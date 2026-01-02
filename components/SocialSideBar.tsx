"use client";

import Link from "next/link";
import { FC, useState } from "react";
import {
    FaLinkedinIn,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
    FaFacebookF,
    FaAt,
    FaXmark,
} from "react-icons/fa6";

const SocialSidebar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="
        fixed z-50
        left-4 bottom-4
        flex flex-col-reverse gap-3
        md:flex-col md:bottom-auto md:top-1/2 md:-translate-y-1/2
        md:left-5
      "
        >

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                    md:hidden
                    flex items-center justify-center
                    h-10 w-10
                    rounded-full bg-white text-slate-900
                    shadow-md
                    text-lg
                    transition-transform duration-300
                    hover:bg-slate-100 hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-slate-400
                "
                aria-label="Toggle Social Sidebar"
            >
                {isOpen ? <FaXmark /> : <FaAt />}
            </button>

            
            <div
                className={`
                    flex flex-col gap-3
                    transition-all duration-500 ease-in-out
                    ${isOpen
                        ? "max-h-[500px] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 translate-y-4 pointer-events-none md:max-h-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
                    }
                    cursor-auto
                `}
            >
                <IconLink href="https://www.linkedin.com/company/e-cell-rec-vizag/posts/?feedView=all" label="LinkedIn">
                    <FaLinkedinIn />
                </IconLink>
                <IconLink href="https://www.instagram.com/ecell_.rec/" label="Instagram">
                    <FaInstagram />
                </IconLink>
                <IconLink href="https://ecellrec.app/" label="X (Twitter)">
                    <FaXTwitter />
                </IconLink>
                <IconLink
                    href="https://www.youtube.com/@E-cellRec"
                    label="YouTube"
                >
                    <FaYoutube />
                </IconLink>
                <IconLink href="https://ecellrec.app/" label="Facebook">
                    <FaFacebookF />
                </IconLink>
            </div>
        </div>
    );
};

type IconLinkProps = {
    href: string;
    label: string;
    children: React.ReactNode;
};

const IconLink: FC<IconLinkProps> = ({ href, label, children }) => (
    <Link
        href={href}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
        className="
      flex items-center justify-center
      h-10 w-10
      rounded-full bg-white text-slate-900
      shadow-md
      text-lg
      transition
      hover:scale-105 hover:bg-slate-100 hover:shadow-lg
      focus:outline-none focus:ring-2 focus:ring-slate-400
    "
    >
        {children}
    </Link>
);

export default SocialSidebar;
