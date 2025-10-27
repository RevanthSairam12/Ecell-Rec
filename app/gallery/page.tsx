"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Add your images to public/gallery/ folder
// Just drop your images there and update this array with filenames
const galleryImages = [
  // Example: "image1.jpg", "image2.png", "photo1.jpeg"
  // Add your image filenames here
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Matching other pages style */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-blue-100/30 to-indigo-100/40"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-200/20 to-transparent"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Partner Logos bar just below header */}
        <div className="absolute top-16 left-0 right-0 z-20">
          {/* Desktop layout: left and right logos */}
          <div className="hidden md:flex justify-between items-center px-6 max-w-7xl mx-auto">
            <div className="relative w-36 h-16">
              <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
            </div>
            <div className="relative w-36 h-16">
              <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
            </div>
          </div>
          {/* Mobile layout: two logos */}
          <div className="md:hidden px-5">
            <div className="flex justify-between items-center">
              <div className="relative w-20 h-12">
                <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
              </div>
              <div className="relative w-20 h-12">
                <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8 md:mt-12">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.01em' }}>
                Gallery
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-800 mb-4 font-semibold tracking-wide" style={{ fontFamily: '"Lato", system-ui, sans-serif', letterSpacing: '0.02em' }}>
              Our Journey in Pictures
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Lato", system-ui, sans-serif', fontWeight: 400 }}>
              Capturing moments of innovation, teamwork, and entrepreneurial spirit
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content Section */}
      <section className="relative py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Empty State */}
          {galleryImages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3">No Images Yet</h2>
              <p className="text-muted-foreground mb-4">
                Upload your images to <code className="bg-muted px-2 py-1 rounded">public/gallery/</code>
              </p>
              <p className="text-sm text-muted-foreground">
                Then update the <code className="bg-muted px-1 rounded">galleryImages</code> array in this file
              </p>
              </div>
            </motion.div>
          ) : (
          <>
            {/* Image Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-card hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={`/gallery/${image}`}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                      Click to view
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                  onClick={() => setSelectedImage(null)}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    className="relative max-w-6xl max-h-[90vh] w-full h-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={`/gallery/${selectedImage}`}
                      alt="Full size image"
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
