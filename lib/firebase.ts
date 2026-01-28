// lib/firebase.ts

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_qs7Mzh_vuIjLDaGA-YdYmNXiuxN0Abw",
  authDomain: "ideathon-8d4c1.firebaseapp.com",
  projectId: "ideathon-8d4c1",
  storageBucket: "ideathon-8d4c1.firebasestorage.app",
  messagingSenderId: "296804811891",
  appId: "1:296804811891:web:5fe2f9c434779fbee4d606",
  measurementId: "G-BNNX98HV6S"
};

console.log("🔥 [Firebase] Initializing Firebase...");
console.log("📦 Project ID:", firebaseConfig.projectId);
console.log("🗄️ Storage Bucket:", firebaseConfig.storageBucket);

// Prevent multiple initializations
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const storage = getStorage(app);

console.log("✅ [Firebase] Firebase initialized successfully");
console.log("🌐 Storage URL:", `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o`);

export default app;
