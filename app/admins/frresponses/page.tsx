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

interface IdeathonRegistration {
  id: string;
  name: string;
  email: string;
  contact: string;
  rollNumber: string;
  department: string;
  section: string;
  teamName: string;
  pitchDeckUrl: string;
  submittedAt?: Timestamp;
}

const FirebaseResponsesPage = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [rows, setRows] = useState<IdeathonRegistration[]>([]);
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
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<IdeathonRegistration, "id">),
        }));
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

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) =>
      [
        row.name,
        row.email,
        row.contact,
        row.rollNumber,
        row.department,
        row.section,
        row.teamName,
      ]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(q))
    );
  }, [rows, search]);

  return (
    !isAuthed ? (
      <div className="min-h-screen bg-black text-white px-6 py-10 flex items-center justify-center">
        <div className="w-full max-w-sm border border-zinc-800 rounded-lg p-6 bg-zinc-950">
          <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
          <p className="text-sm text-gray-400 mb-6">Enter credentials to view responses.</p>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-300">Username</label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin123"
                className="bg-zinc-900 border-zinc-800 text-white mt-2"
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ecell2025"
                className="bg-zinc-900 border-zinc-800 text-white mt-2"
              />
            </div>
            {authError && <div className="text-red-400 text-sm">{authError}</div>}
            <Button
              className="w-full bg-blue-600 hover:bg-blue-500"
              onClick={() => {
                if (username === "admin123" && password === "ecell2025") {
                  setAuthError(null);
                  setIsAuthed(true);
                  return;
                }
                setAuthError("Invalid credentials");
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    ) : (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Firebase Responses</h1>
            <p className="text-sm text-gray-400">
              View all ideathon submissions from Firestore.
            </p>
          </div>
          <div className="flex gap-3">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, team..."
              className="bg-zinc-900 border-zinc-800 text-white"
            />
            <Button
              variant="secondary"
              onClick={() => setSearch("")}
              className="bg-zinc-800 text-white"
            >
              Clear
            </Button>
          </div>
        </div>

        {loading && (
          <div className="text-gray-400">Loading responses...</div>
        )}
        {error && <div className="text-red-400">{error}</div>}

        {!loading && !error && (
          <div className="overflow-x-auto border border-zinc-800 rounded-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-900 text-gray-300">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Roll No.</th>
                  <th className="px-4 py-3">Dept</th>
                  <th className="px-4 py-3">Section</th>
                  <th className="px-4 py-3">Team</th>
                  <th className="px-4 py-3">Pitch Deck</th>
                  <th className="px-4 py-3">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr
                    key={row.id}
                    className="border-t border-zinc-800 hover:bg-zinc-900/60"
                  >
                    <td className="px-4 py-3">{row.name}</td>
                    <td className="px-4 py-3">{row.email}</td>
                    <td className="px-4 py-3">{row.contact}</td>
                    <td className="px-4 py-3">{row.rollNumber}</td>
                    <td className="px-4 py-3">{row.department}</td>
                    <td className="px-4 py-3">{row.section}</td>
                    <td className="px-4 py-3">{row.teamName}</td>
                    <td className="px-4 py-3">
                      {row.pitchDeckUrl ? (
                        <a
                          href={row.pitchDeckUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          Open
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-400">
                      {row.submittedAt
                        ? row.submittedAt.toDate().toLocaleString()
                        : "-"}
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td
                      className="px-4 py-6 text-center text-gray-400"
                      colSpan={9}
                    >
                      No responses found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    )
  );
};

export default FirebaseResponsesPage;
