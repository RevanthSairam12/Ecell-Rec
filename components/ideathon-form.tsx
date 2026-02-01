"use client";

import React, { useState, useEffect, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

import { saveRegistration } from "@/lib/saveRegistration";

// Team member interface
interface TeamMember {
    name: string;
    phone: string;
    email: string;
    regdNumber: string;
    department: string;
    section: string;
    skillsets: string;
}

export default function IdeathonForm() {
    const formRef = useRef<HTMLDivElement>(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        teamName: "",
        teamSize: 3,
        members: [] as TeamMember[],
    });

    // Initialize members array when teamSize changes
    useEffect(() => {
        const newMembers: TeamMember[] = [];
        for (let i = 0; i < formData.teamSize; i++) {
            newMembers.push(
                formData.members[i] || {
                    name: "",
                    phone: "",
                    email: "",
                    regdNumber: "",
                    department: "",
                    section: "",
                    skillsets: "",
                }
            );
        }
        setFormData((prev) => ({ ...prev, members: newMembers }));
    }, [formData.teamSize]);

    const handleTeamNameChange = (value: string) => {
        setFormData({ ...formData, teamName: value });
        if (errors.teamName) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors.teamName;
                return newErrors;
            });
        }
    };

    const handleTeamSizeChange = (value: number) => {
        setFormData({ ...formData, teamSize: value });
        if (errors.teamSize) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors.teamSize;
                return newErrors;
            });
        }
    };

    const handleMemberChange = (index: number, field: keyof TeamMember, value: string) => {
        const newMembers = [...formData.members];
        newMembers[index] = { ...newMembers[index], [field]: value };
        setFormData({ ...formData, members: newMembers });

        // Clear error for this specific field
        const errorKey = `member${index}_${field}`;
        if (errors[errorKey]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[errorKey];
                return newErrors;
            });
        }
    };

    const validateStep1 = () => {
        const newErrors: Record<string, boolean> = {};
        if (!formData.teamName.trim()) newErrors.teamName = true;
        if (!formData.teamSize || formData.teamSize < 3 || formData.teamSize > 5) {
            newErrors.teamSize = true;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Record<string, boolean> = {};

        formData.members.forEach((member, index) => {
            if (!member.name.trim()) newErrors[`member${index}_name`] = true;
            if (!member.phone.trim()) newErrors[`member${index}_phone`] = true;
            if (!member.email.trim()) newErrors[`member${index}_email`] = true;
            if (!member.regdNumber.trim()) newErrors[`member${index}_regdNumber`] = true;
            if (!member.department.trim()) newErrors[`member${index}_department`] = true;
            if (!member.section.trim()) newErrors[`member${index}_section`] = true;
            if (!member.skillsets.trim()) newErrors[`member${index}_skillsets`] = true;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setCurrentStep(2);
        }
    };

    const handleBack = () => {
        setCurrentStep(1);

        // Smooth auto-scroll back to Step 1
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const resetForm = () => {
        setShowSuccess(false);
        setCurrentStep(1);
        setFormData({
            teamName: "",
            teamSize: 3,
            members: [],
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

        try {
            // Save registration data to Firestore
            await saveRegistration({
                teamName: formData.teamName,
                teamSize: formData.teamSize,
                members: formData.members,
            });

            // Show success animation
            setShowSuccess(true);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
            console.error("Error submitting:", error);
            alert(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="ideathon-form" ref={formRef} className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-12 pointer-events-auto">
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
                            Team Details
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
                            Team Members
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
                            <h2 className="text-2xl font-bold text-white">Team Details</h2>
                            <p className="mt-1 text-xs text-gray-300">
                                Enter your team name and select team size
                            </p>

                            <form
                                className="my-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleNext();
                                }}
                            >
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="teamName">Team Name</Label>
                                    <Input
                                        id="teamName"
                                        placeholder="Enter your team name"
                                        type="text"
                                        value={formData.teamName}
                                        onChange={(e) => handleTeamNameChange(e.target.value)}
                                        className={cn(errors.teamName && "shake border-red-500")}
                                    />
                                    {errors.teamName && <span className="text-red-500 text-xs mt-1">Required</span>}
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="teamSize">Team Size</Label>
                                    <select
                                        id="teamSize"
                                        value={formData.teamSize}
                                        onChange={(e) => handleTeamSizeChange(Number(e.target.value))}
                                        className={cn(
                                            "flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm",
                                            errors.teamSize && "shake border border-red-500"
                                        )}
                                    >
                                        <option value={3}>3 Members</option>
                                        <option value={4}>4 Members</option>
                                        <option value={5}>5 Members</option>
                                    </select>
                                    {errors.teamSize && <span className="text-red-500 text-xs mt-1">Required</span>}
                                </LabelInputContainer>

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
                            <h2 className="text-2xl font-bold text-white">Team Members</h2>
                            <p className="mt-1 text-xs text-gray-300">
                                Provide details for all {formData.teamSize} team members
                            </p>

                            <form className="my-6" onSubmit={handleSubmit}>
                                {/* Dynamic Member Inputs */}
                                {formData.members.map((member, index) => (
                                    <div key={index} className="mb-6 p-4 bg-black/30 border border-gray-700 rounded-lg">
                                        <h3 className="text-lg font-semibold text-white mb-3">
                                            Member {index + 1}
                                        </h3>

                                        <LabelInputContainer className="mb-3">
                                            <Label htmlFor={`member${index}_name`}>Full Name</Label>
                                            <Input
                                                id={`member${index}_name`}
                                                placeholder="Enter full name"
                                                type="text"
                                                value={member.name}
                                                onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                                                className={cn(errors[`member${index}_name`] && "shake border-red-500")}
                                            />
                                            {errors[`member${index}_name`] && <span className="text-red-500 text-xs mt-1">Required</span>}
                                        </LabelInputContainer>

                                        <LabelInputContainer className="mb-3">
                                            <Label htmlFor={`member${index}_phone`}>Phone Number</Label>
                                            <Input
                                                id={`member${index}_phone`}
                                                placeholder="+91 XXXXX XXXXX"
                                                type="text"
                                                value={member.phone}
                                                onChange={(e) => handleMemberChange(index, "phone", e.target.value)}
                                                className={cn(errors[`member${index}_phone`] && "shake border-red-500")}
                                            />
                                            {errors[`member${index}_phone`] && <span className="text-red-500 text-xs mt-1">Required</span>}
                                        </LabelInputContainer>

                                        <LabelInputContainer className="mb-3">
                                            <Label htmlFor={`member${index}_email`}>Email Address</Label>
                                            <Input
                                                id={`member${index}_email`}
                                                placeholder="email@example.com"
                                                type="email"
                                                value={member.email}
                                                onChange={(e) => handleMemberChange(index, "email", e.target.value)}
                                                className={cn(errors[`member${index}_email`] && "shake border-red-500")}
                                            />
                                            {errors[`member${index}_email`] && <span className="text-red-500 text-xs mt-1">Required</span>}
                                        </LabelInputContainer>

                                        <LabelInputContainer className="mb-3">
                                            <Label htmlFor={`member${index}_regdNumber`}>Registration Number</Label>
                                            <Input
                                                id={`member${index}_regdNumber`}
                                                placeholder="Enter registration number"
                                                type="text"
                                                value={member.regdNumber}
                                                onChange={(e) => handleMemberChange(index, "regdNumber", e.target.value)}
                                                className={cn(errors[`member${index}_regdNumber`] && "shake border-red-500")}
                                            />
                                            {errors[`member${index}_regdNumber`] && <span className="text-red-500 text-xs mt-1">Required</span>}
                                        </LabelInputContainer>

                                        <div className="mb-3 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                            <LabelInputContainer>
                                                <Label htmlFor={`member${index}_department`}>Department</Label>
                                                <select
                                                    id={`member${index}_department`}
                                                    value={member.department}
                                                    onChange={(e) => handleMemberChange(index, "department", e.target.value)}
                                                    className={cn(
                                                        "flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm",
                                                        errors[`member${index}_department`] && "shake border border-red-500"
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
                                                {errors[`member${index}_department`] && <span className="text-red-500 text-xs mt-1">Required</span>}
                                            </LabelInputContainer>

                                            <LabelInputContainer>
                                                <Label htmlFor={`member${index}_section`}>Section</Label>
                                                <Input
                                                    id={`member${index}_section`}
                                                    placeholder="e.g., A, B, C"
                                                    type="text"
                                                    value={member.section}
                                                    onChange={(e) => handleMemberChange(index, "section", e.target.value)}
                                                    className={cn(errors[`member${index}_section`] && "shake border-red-500")}
                                                />
                                                {errors[`member${index}_section`] && <span className="text-red-500 text-xs mt-1">Required</span>}
                                            </LabelInputContainer>
                                        </div>

                                        <LabelInputContainer className="mb-0">
                                            <Label htmlFor={`member${index}_skillsets`}>Skillsets</Label>
                                            <Input
                                                id={`member${index}_skillsets`}
                                                placeholder="e.g., React, Node.js, Python"
                                                type="text"
                                                value={member.skillsets}
                                                onChange={(e) => handleMemberChange(index, "skillsets", e.target.value)}
                                                className={cn(errors[`member${index}_skillsets`] && "shake border-red-500")}
                                            />
                                            {errors[`member${index}_skillsets`] && <span className="text-red-500 text-xs mt-1">Required</span>}
                                        </LabelInputContainer>
                                    </div>
                                ))}

                                <div className="flex gap-4">
                                    <button
                                        onClick={handleBack}
                                        type="button"
                                        className="h-10 flex-1 rounded-md bg-gray-700 text-white font-medium hover:bg-gray-600 transition-all"
                                    >
                                        ← Back
                                    </button>

                                    <button
                                        disabled={isSubmitting}
                                        className={cn(
                                            "group/btn relative block h-10 flex-1 rounded-md bg-gradient-to-br from-black to-neutral-600 text-white font-medium overflow-hidden",
                                            isSubmitting && "cursor-not-allowed opacity-50"
                                        )}
                                        type="submit"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Submitting...
                                                </span>
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

            {/* Download Template Section */}
            <div className="mt-8 text-center space-y-4 w-full max-w-2xl">
                <p className="text-sm text-gray-400">
                    To want a reference of Pitch Deck download this
                </p>
                <a
                    href="/resources/Pitch_Deck_Template.pptx"
                    download
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                    Download PPT FORMAT
                </a>
            </div>
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
