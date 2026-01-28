// lib/uploadPitchDeck.ts

import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "sonner";
import { createElement } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export async function uploadPitchDeck(file: File, onProgress?: (progress: number) => void): Promise<string> {


    if (!file) {
        console.error("❌ [uploadPitchDeck] No file provided");
        throw new Error("No file provided");
    }

    const maxSize = 25 * 1024 * 1024; // 25MB
    if (file.size > maxSize) {
        toast.custom((id) => createElement(motion.div, {
            initial: { opacity: 0, y: -20, scale: 0.9 },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1,
                x: [0, -10, 10, -10, 10, 0]
            },
            exit: { opacity: 0, y: -20, scale: 0.9 },
            transition: { duration: 0.4, ease: "easeOut" },
            style: {
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 24px',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.5)',
                borderRadius: '12px',
                color: '#EF4444',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                backdropFilter: 'blur(8px)',
                width: 'fit-content',
                minWidth: '300px'
            }
        }, [
            createElement(AlertTriangle, { size: 24, className: "text-red-500", key: "icon" }),
            createElement("span", {
                style: { fontWeight: 600, fontSize: '15px' },
                key: "text"
            }, "File size must be less than 25MB")
        ]), { duration: 2500, id: 'file-size-error' });

        console.error("❌ [uploadPitchDeck] File too large:", file.size);
        throw new Error("File size must be less than 25MB");
    }

    // Validate file type
    const validTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
        'application/vnd.ms-powerpoint' // .ppt
    ];

    if (!validTypes.includes(file.type)) {
        console.error("❌ [uploadPitchDeck] Invalid file type:", file.type);
        throw new Error("Only PDF and PPTX files are allowed");
    }

    // Create file path in Firebase Storage
    const timestamp = Date.now();
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filePath = `pitchdecks/${timestamp}-${sanitizedFileName}`;


    const storageRef = ref(storage, filePath);

    // Upload file with metadata using resumable upload


    const metadata = {
        contentType: file.type,
        customMetadata: {
            originalName: file.name,
            uploadedAt: new Date().toISOString(),
            fileSize: file.size.toString()
        }
    };

    return new Promise((resolve, reject) => {
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                if (onProgress) {
                    onProgress(progress);
                }
            },
            (error) => {
                console.error("❌ [uploadPitchDeck] Upload failed:", error);
                console.error("Error code:", error.code);
                console.error("Error message:", error.message);

                // Provide user-friendly error messages
                let userMessage = "Upload failed. ";
                if (error.code === 'storage/unauthorized') {
                    userMessage += "You don't have permission to upload files.";
                } else if (error.code === 'storage/canceled') {
                    userMessage += "Upload was cancelled.";
                } else if (error.code === 'storage/unknown') {
                    userMessage += "An unknown error occurred. Please check your internet connection and try again.";
                } else {
                    userMessage += error.message;
                }

                reject(new Error(userMessage));
            },
            async () => {


                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                    resolve(downloadURL);
                } catch (error) {
                    console.error("❌ [uploadPitchDeck] Failed to get download URL:", error);
                    reject(error);
                }
            }
        );
    });
}
