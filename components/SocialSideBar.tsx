"use client";

import Link from "next/link";
import { FC } from "react";
import {
    FaLinkedinIn,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
    FaFacebookF,
} from "react-icons/fa6";

const SocialSidebar: FC = () => {
    return (
        <div
            className="
        fixed z-50
        left-4 top-1/2 -translate-y-1/2
        flex flex-col gap-3
        md:left-5
      "
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
