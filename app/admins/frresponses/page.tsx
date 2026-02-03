"use client";

import React, { useEffect, useMemo, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "motion/react";

// --- Interfaces ---

interface TeamMember {
  name: string;
  phone: string;
  email: string;
  regdNumber: string;
  department: string;
  section: string;
  skillsets: string;
  year: string;
}

interface TeamRegistration {
  id: string; // Firestore Document ID
  teamName: string;
  teamSize: number;
  members: TeamMember[];
  submittedAt?: Timestamp;
}

// --- Components ---

const TeamRow = ({
  row,
  index,
}: {
  row: TeamRegistration;
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  // Helper to safely render " - " for empty values
  const renderValue = (val?: string | number | null) => {
    if (!val) return "-";
    const str = String(val).trim();
    return str === "" ? "-" : str;
  };

  const formattedDate = row.submittedAt
    ? row.submittedAt.toDate().toLocaleString()
    : "-";

  return (
    <>
      {/* Main Team Row */}
      <tr
        className={`border-t border-zinc-800 transition-colors ${expanded ? "bg-zinc-900/80" : "hover:bg-zinc-900/40"
          }`}
        onClick={() => setExpanded(!expanded)}
      >
        <td className="px-4 py-4 text-gray-400 font-mono text-xs">{index + 1}</td>
        <td className="px-4 py-4 font-medium text-white">{renderValue(row.teamName)}</td>
        <td className="px-4 py-4 text-gray-300">{renderValue(row.teamSize)}</td>
        <td className="px-4 py-4 text-gray-400 text-sm whitespace-nowrap">
          {formattedDate}
        </td>
        <td className="px-4 py-4 text-right">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded)
            }}
            className="p-2 rounded-full hover:bg-zinc-800 text-blue-400 transition-colors"
          >
            {expanded ? (
              <ChevronUpIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
          </button>
        </td>
      </tr>

      {/* Expandable Member Details */}
      <AnimatePresence>
        {expanded && (
          <tr>
            <td colSpan={5} className="p-0 border-b border-zinc-800">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-zinc-950/50"
              >
                <div className="p-4 md:p-6 overflow-x-auto">
                  <h4 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                    Team Members Details
                  </h4>
                  <table className="w-full text-left text-sm border-collapse min-w-[800px]">
                    <thead className="bg-zinc-900 text-gray-400 text-xs uppercase tracking-wide">
                      <tr>
                        <th className="px-4 py-3 font-semibold border-b border-zinc-700">#</th>
                        <th className="px-4 py-3 font-semibold border-b border-zinc-700">Name</th>
                        <th className="px-4 py-3 font-semibold border-b border-zinc-700">Email</th>
                        <th className="px-4 py-3 font-semibold border-b border-zinc-700">Phone</th>
                        <th className="px-4 py-3 font-semibold border-b border-zinc-700">Regd No</th>
                        <th className="px-4 py-3 font-semibold border-b border-zinc-700">Dept</th>
                        <th className="px-4 py-3 font-semibold border-b border-zinc-700">Year</th>
                        <th className="px-4 py-3 font-semibold border-b border-zinc-700">Section</th>
                        <th className="px-4 py-3 font-semibold border-b border-zinc-700">Skillsets</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {row.members && row.members.length > 0 ? (
                        row.members.map((member, i) => (
                          <tr key={i} className="hover:bg-zinc-900/30 transition-colors text-gray-300">
                            <td className="px-4 py-3 text-gray-500 font-mono text-xs">{i + 1}</td>
                            <td className="px-4 py-3 font-medium text-white">{renderValue(member.name)}</td>
                            <td className="px-4 py-3">{renderValue(member.email)}</td>
                            <td className="px-4 py-3 font-mono text-xs">{renderValue(member.phone)}</td>
                            <td className="px-4 py-3 font-mono text-xs">{renderValue(member.regdNumber)}</td>
                            <td className="px-4 py-3">{renderValue(member.department)}</td>
                            <td className="px-4 py-3">{renderValue(member.year)}</td>
                            <td className="px-4 py-3">{renderValue(member.section)}</td>
                            <td className="px-4 py-3 max-w-[200px] truncate" title={member.skillsets}>
                              {renderValue(member.skillsets)}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={9} className="px-4 py-4 text-center text-gray-500 italic">
                            No members found for this team.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Main Page Component ---

const FirebaseResponsesPage = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  const [rows, setRows] = useState<TeamRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isAuthed) {
      return;
    }
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const registrationsRef = collection(db, "registrations");
        const registrationsQuery = query(
          registrationsRef,
          orderBy("submittedAt", "desc")
        );
        const snapshot = await getDocs(registrationsQuery);

        // Map Firestore docs to TeamRegistration interface
        // Note: We are NOT fetching from Storage.
        const data = snapshot.docs.map((doc) => {
          const d = doc.data();
          return {
            id: doc.id,
            teamName: d.teamName,
            teamSize: d.teamSize,
            members: d.members || [],
            submittedAt: d.submittedAt
          } as TeamRegistration;
        });

        setRows(data);
      } catch (err) {
        console.error("Failed to load responses:", err);
        setError("Failed to load responses. Check Firebase permissions.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [isAuthed]);

  // Updated Search Logic: Matches Team fields OR Nested Member fields
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;

    return rows.filter((row) => {
      // Team Level Search
      const teamMatch = [
        row.teamName,
        String(row.teamSize),
        row.submittedAt?.toDate().toLocaleString()
      ].some(val => val && val.toLowerCase().includes(q));

      if (teamMatch) return true;

      // Member Level Search
      const memberMatch = row.members.some(member => {
        return [
          member.name,
          member.email,
          member.phone,
          member.regdNumber,
          member.department,
          member.year,
          member.section,
          member.skillsets
        ].some(val => val && val.toLowerCase().includes(q));
      });

      return memberMatch;
    });
  }, [rows, search]);

  // Auth Screen
  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-10 flex items-center justify-center font-sans">
        <div className="w-full max-w-sm border border-zinc-800 rounded-2xl p-8 bg-zinc-950/50 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Admin Portal</h1>
            <p className="text-sm text-gray-500 mt-2">Enter your secured credentials.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Username</label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin123"
                className="bg-zinc-900/80 border-zinc-700 text-white mt-1.5 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-zinc-900/80 border-zinc-700 text-white mt-1.5 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {authError && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3">
                <p className="text-red-400 text-sm text-center font-medium">{authError}</p>
              </div>
            )}

            <Button
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-6 rounded-xl mt-4 transition-all hover:shadow-lg hover:shadow-blue-500/20"
              onClick={() => {
                if (username === "admin123" && password === "ecell2025") {
                  setAuthError(null);
                  setIsAuthed(true);
                  return;
                }
                setAuthError("Invalid credentials provided.");
              }}
            >
              Sign In to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Screen
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 pt-40 pb-10 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 pb-8 border-b border-zinc-800">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Registrations
              <span className="text-blue-500">.</span>
            </h1>
            <p className="text-sm text-gray-400 mt-2 max-w-md">
              Manage and view all Ideathon team registrations. Search across teams and individual members.
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-4 w-4 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search teams or members..."
                className="pl-10 w-full sm:w-80 bg-zinc-900 border-zinc-700 text-white focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setSearch("")}
              className="border-zinc-700 hover:bg-zinc-800 text-gray-300 hover:text-white"
            >
              Clear
            </Button>
          </div>
        </div>

        {/* Content */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 animate-pulse">
            <div className="w-10 h-10 border-4 border-zinc-800 border-t-blue-500 rounded-full animate-spin mb-4" />
            <p>Syncing with Firestore...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-red-400 text-lg font-medium mb-2">Unavailable</p>
            <p className="text-gray-400">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/20 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-zinc-950/80 border-b border-zinc-800 text-gray-400 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-4 font-semibold w-16 text-center">SL.No</th>
                    <th className="px-4 py-4 font-semibold">Team Name</th>
                    <th className="px-4 py-4 font-semibold">Size</th>
                    <th className="px-4 py-4 font-semibold">Submitted At</th>
                    <th className="px-4 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {filtered.length > 0 ? (
                    filtered.map((row, index) => (
                      <TeamRow key={row.id} row={row} index={index} />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center">
                        <p className="text-gray-500 text-lg">No matching records found.</p>
                        <p className="text-gray-600 text-sm mt-1">Try adjusting your search terms.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-6 text-center text-xs text-gray-600">
          Total Records: {filtered.length} | Source: Firestore (registrations)
        </div>
      </div>
    </div>
  );
};

// --- Icons ---
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function ChevronUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export default FirebaseResponsesPage;
