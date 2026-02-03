import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface TeamMember {
    name: string;
    phone: string;
    email: string;
    regdNumber: string;
    department: string;
    year: string;
    section: string;
    skillsets: string;
}

interface TeamRegistrationData {
    teamName: string;
    teamSize: number;
    members: TeamMember[];
}

export async function saveRegistration(teamData: TeamRegistrationData) {
    console.log("💾 [saveRegistration] Starting Firestore save...");
    console.log("📋 Team data:", {
        teamName: teamData.teamName,
        teamSize: teamData.teamSize,
        memberCount: teamData.members.length
    });

    const registrationsRef = collection(db, "registrations");

    const dataToSave = {
        teamName: teamData.teamName,
        teamSize: teamData.teamSize,
        members: teamData.members,
        submittedAt: Timestamp.now(),
    };

    console.log("📝 [saveRegistration] Writing to Firestore...");
    const docRef = await addDoc(registrationsRef, dataToSave);
    console.log("✅ [saveRegistration] Document created with ID:", docRef.id);
    console.log("📍 Document path: registrations/" + docRef.id);

    return docRef.id;
}
