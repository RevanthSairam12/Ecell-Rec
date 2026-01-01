"use client";

import { Galleria } from "primereact/galleria";

interface ImageItem {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
}

const defaultImages: ImageItem[] = [
    {
        itemImageSrc: "/group/group1.jpg",
        thumbnailImageSrc: "/group/group1.jpg",
        alt: "E-Cell Event 1",
    },
    {
        itemImageSrc: "/group/group2.jpg",
        thumbnailImageSrc: "/group/group2.jpg",
        alt: "E-Cell Event 2",
    },
    {
        itemImageSrc: "/group/group3.jpg",
        thumbnailImageSrc: "/group/group3.jpg",
        alt: "E-Cell Event 3",
    }
];

interface GalleriaGalleryProps {
    images?: ImageItem[];
}

export default function GalleriaGallery({ images = defaultImages }: GalleriaGalleryProps) {
    return (
        <div className="max-w-2xl mx-auto my-12 overflow-hidden">
            <Galleria
                value={images}
                numVisible={3}
                circular
                showItemNavigators
                showThumbnails
                autoPlay
                transitionInterval={4000}
                item={(item) => (
                    <div className="w-full aspect-[4/3] md:aspect-video flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden">
                        <img
                            src={item.itemImageSrc}
                            alt={item.alt}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                )}
                thumbnail={(item) => (
                    <div className="px-6 py-4 flex justify-center items-center">
                        <img
                            src={item.thumbnailImageSrc}
                            alt={item.alt}
                            className="rounded-md w-24 block shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                    </div>
                )}
            />
        </div>
    );
}
