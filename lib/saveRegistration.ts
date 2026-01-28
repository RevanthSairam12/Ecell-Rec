import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function saveRegistration(formData: any, pitchDeckUrl: string) {
    console.log("💾 [saveRegistration] Starting Firestore save...");
    console.log("📋 Form data:", {
        name: formData.name,
        email: formData.email,
        department: formData.department,
        teamName: formData.teamName
    });
    console.log("🔗 Pitch deck URL:", pitchDeckUrl);

    const registrationsRef = collection(db, "registrations");

    const dataToSave = {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        rollNumber: formData.rollNumber,
        department: formData.department,
        section: formData.section,
        teamName: formData.teamName,
        pitchDeckUrl: pitchDeckUrl,
        submittedAt: Timestamp.now(),
    };

    console.log("📝 [saveRegistration] Writing to Firestore...");
    const docRef = await addDoc(registrationsRef, dataToSave);
    console.log("✅ [saveRegistration] Document created with ID:", docRef.id);
    console.log("📍 Document path: registrations/" + docRef.id);

    return docRef.id;
}
