"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

import { uploadPitchDeck } from "@/lib/uploadPitchDeck";
import { saveRegistration } from "@/lib/saveRegistration";

export default function IdeathonForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        rollNumber: "",
        department: "",
        section: "",
        teamName: "",
        pitchDeck: [] as File[],
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const handleFileChange = (files: File[]) => {
        setFormData({ ...formData, pitchDeck: files });
        if (errors.pitchDeck) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors.pitchDeck;
                return newErrors;
            });
        }
    };

    const validateStep1 = () => {
        const newErrors: Record<string, boolean> = {};
        if (!formData.name.trim()) newErrors.name = true;
        if (!formData.email.trim()) newErrors.email = true;
        if (!formData.contact.trim()) newErrors.contact = true;
        if (!formData.rollNumber.trim()) newErrors.rollNumber = true;
        if (!formData.department.trim()) newErrors.department = true;
        if (!formData.section.trim()) newErrors.section = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Record<string, boolean> = {};
        if (!formData.teamName.trim()) newErrors.teamName = true;
        if (!formData.pitchDeck || formData.pitchDeck.length === 0) newErrors.pitchDeck = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setCurrentStep(2);
        }
    };

    const resetForm = () => {
        setShowSuccess(false);
        setCurrentStep(1);
        setFormData({
            name: "",
            email: "",
            contact: "",
            rollNumber: "",
            department: "",
            section: "",
            teamName: "",
            pitchDeck: [],
        });
        setErrors({});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isSubmitting) return;

        if (!validateStep2()) {
            return;
        }

        setIsSubmitting(true);
        setUploadProgress(0);

        try {
            const file = formData.pitchDeck[0];

            // Upload pitch deck → Firebase
            const pitchDeckUrl = await uploadPitchDeck(file, (progress) => {
                setUploadProgress(progress);
            });

            // Save all details to Firestore
            await saveRegistration(formData, pitchDeckUrl);

            // Show success animation instead of alert
            setShowSuccess(true);
        } catch (error) {
            console.error("Error submitting:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
            setUploadProgress(0);
        }
    };

    return (
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-12 pointer-events-auto">
            {/* Success Animation Overlay */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 15 }}
                            className="relative flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-3xl shadow-2xl max-w-sm text-center"
                        >
                            {/* Confetti Particles */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                                    animate={{
                                        opacity: 0,
                                        x: (Math.random() - 0.5) * 200,
                                        y: (Math.random() - 0.5) * 200,
                                        scale: Math.random() * 1.5,
                                        rotate: Math.random() * 360
                                    }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute w-2 h-2 rounded-full bg-blue-400 top-1/2 left-1/2"
                                />
                            ))}

                            {/* Glowing Background Circle */}
                            <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />

                            {/* Checkmark Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-600/50 z-10"
                            >
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-2xl font-bold text-white mb-2 z-10"
                            >
                                Registration Submitted!
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-gray-400 text-sm mb-6 z-10"
                            >
                                Good luck! We'll reach out to you soon.
                            </motion.p>

                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                onClick={resetForm}
                                className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors z-10"
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Stepper */}
            <div className="w-full max-w-2xl mb-8">
                <div className="flex items-center justify-between relative">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2 z-0">
                        <motion.div
                            className="h-full bg-blue-600"
                            initial={{ width: "0%" }}
                            animate={{ width: currentStep === 2 ? "100%" : "0%" }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                    {/* STEP 1 */}
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all",
                                currentStep >= 1
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                                    : "bg-gray-800 text-gray-500"
                            )}
                            whileHover={{ scale: 1.1 }}
                        >
                            1
                        </motion.div>
                        <p className="mt-2 text-sm text-gray-400 font-medium">
                            Personal Details
                        </p>
                    </div>

                    {/* STEP 2 */}
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all",
                                currentStep === 2
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                                    : "bg-gray-800 text-gray-500"
                            )}
                            whileHover={{ scale: 1.1 }}
                        >
                            2
                        </motion.div>
                        <p className="mt-2 text-sm text-gray-400 font-medium">
                            Team & Pitch Deck
                        </p>
                    </div>
                </div>
            </div>

            {/* FORM BODY */}
            <AnimatePresence mode="wait">
                {currentStep === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-2xl pointer-events-auto"
                    >
                        <div className="shadow-input mx-auto w-full max-w-2xl rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 border border-gray-700/50 pointer-events-auto">
                            <h2 className="text-2xl font-bold text-white">Personal Details</h2>
                            <p className="mt-1 text-xs text-gray-300">
                                Enter your personal information to register for Ideathon 4.0
                            </p>

                            <form
                                className="my-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleNext();
                                }}
                            >
                                <LabelInputContainer className="mb-3">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your full name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        className={cn(errors.name && "shake border-red-500")}
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1">Required</span>}
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-3">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        placeholder="your.email@example.com"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        className={cn(errors.email && "shake border-red-500")}
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-1">Required</span>}
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="contact">Contact Number</Label>
                                    <Input
                                        id="contact"
                                        placeholder="+91 XXXXX XXXXX"
                                        type="text"
                                        value={formData.contact}
                                        onChange={(e) =>
                                            handleInputChange("contact", e.target.value)
                                        }
                                        className={cn(errors.contact && "shake border-red-500")}
                                    />
                                    {errors.contact && <span className="text-red-500 text-xs mt-1">Required</span>}
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="rollNumber">Roll Number</Label>
                                    <Input
                                        id="rollNumber"
                                        placeholder="Enter your roll number"
                                        type="text"
                                        value={formData.rollNumber}
                                        onChange={(e) =>
                                            handleInputChange("rollNumber", e.target.value)
                                        }
                                        className={cn(errors.rollNumber && "shake border-red-500")}
                                    />
                                    {errors.rollNumber && <span className="text-red-500 text-xs mt-1">Required</span>}
                                </LabelInputContainer>

                                <div className="mb-3 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                    <LabelInputContainer>
                                        <Label htmlFor="department">Department</Label>
                                        <select
                                            id="department"
                                            value={formData.department}
                                            onChange={(e) =>
                                                handleInputChange("department", e.target.value)
                                            }
                                            className={cn(
                                                "flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm",
                                                errors.department && "shake border border-red-500"
                                            )}
                                        >
                                            <option value="">Select Department</option>
                                            <option value="CSE">CSE</option>
                                            <option value="CSM">CSM</option>
                                            <option value="CSD">CSD</option>
                                            <option value="CSC">CSC</option>
                                            <option value="CSO">CSO</option>
                                            <option value="ECE">ECE</option>
                                            <option value="EEE">EEE</option>
                                            <option value="Civil">Civil</option>
                                            <option value="Mech">Mech</option>
                                        </select>
                                        {errors.department && <span className="text-red-500 text-xs mt-1">Required</span>}
                                    </LabelInputContainer>

                                    <LabelInputContainer>
                                        <Label htmlFor="section">Section</Label>
                                        <Input
                                            id="section"
                                            placeholder="e.g., A, B, C"
                                            type="text"
                                            value={formData.section}
                                            onChange={(e) =>
                                                handleInputChange("section", e.target.value)
                                            }
                                            className={cn(errors.section && "shake border-red-500")}
                                        />
                                        {errors.section && <span className="text-red-500 text-xs mt-1">Required</span>}
                                    </LabelInputContainer>
                                </div>

                                <button
                                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 text-white font-medium"
                                    type="submit"
                                >
                                    Next →
                                    <BottomGradient />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}

                {currentStep === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-2xl pointer-events-auto"
                    >
                        <div className="shadow-input mx-auto w-full max-w-2xl rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 border border-gray-700/50 pointer-events-auto">
                            <h2 className="text-2xl font-bold text-white">Team & Pitch Deck</h2>
                            <p className="mt-1 text-xs text-gray-300">
                                Provide your team details and upload your pitch deck
                            </p>

                            <form className="my-6" onSubmit={handleSubmit}>
                                <LabelInputContainer className="mb-3">
                                    <Label htmlFor="teamName">Team Name</Label>
                                    <Input
                                        id="teamName"
                                        placeholder="Enter your team name"
                                        type="text"
                                        value={formData.teamName}
                                        onChange={(e) =>
                                            handleInputChange("teamName", e.target.value)
                                        }
                                        className={cn(errors.teamName && "shake border-red-500")}
                                    />
                                    {errors.teamName && <span className="text-red-500 text-xs mt-1">Required</span>}
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-6">
                                    <Label htmlFor="pitchDeck">Pitch Deck Upload</Label>
                                    <div className={cn(
                                        "bg-black/30 border border-gray-700 rounded-lg overflow-hidden mt-2",
                                        errors.pitchDeck && "shake border-red-500"
                                    )}>
                                        <FileUpload onChange={handleFileChange} />
                                    </div>
                                    {errors.pitchDeck && <span className="text-red-500 text-xs mt-1">Required</span>}
                                </LabelInputContainer>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setCurrentStep(1)}
                                        type="button"
                                        className="h-10 flex-1 rounded-md bg-gray-700 text-white font-medium hover:bg-gray-600 transition-all"
                                    >
                                        ← Back
                                    </button>

                                    <button
                                        disabled={isSubmitting}
                                        className={cn(
                                            "group/btn relative block h-10 flex-1 rounded-md bg-gradient-to-br from-black to-neutral-600 text-white font-medium overflow-hidden",
                                            isSubmitting && "cursor-not-allowed"
                                        )}
                                        type="submit"
                                    >
                                        {/* Progress Bar Background */}
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            animate={{ width: `${uploadProgress}%` }}
                                            transition={{ ease: "easeOut", duration: 0.3 }}
                                            className="absolute inset-0 bg-blue-600/60 z-0"
                                            style={{ left: 0, top: 0, height: '100%' }}
                                        />

                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                uploadProgress > 0 ? (
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        {`Uploading... ${Math.round(uploadProgress)}%`}
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Submitting...
                                                    </span>
                                                )
                                            ) : (
                                                "Submit"
                                            )}
                                        </span>
                                        <BottomGradient />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
