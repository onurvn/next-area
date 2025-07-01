import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-10 gap-24">
      <div className="w-[95%] flex flex-row items-center md:items-start justify-center md:justify-cem gap-5 md:gap-10">
        <ul className="w-[95%] md:w-[30%] h-fit items-start flex flex-col md:flex-row gap-5 dm-sans font-bold text-sm">
          <li>
            <Link href={"#benefits"}>Benefits</Link>
          </li>
          <li>
            <Link href={"#specification"}>Specification</Link>
          </li>
          <li>
            <Link href={"#how-to"}>How-to</Link>
          </li>
        </ul>
        <ul className="w-[95%] h-fit items-start flex flex-col md:flex-row gap-5 dm-sans font-bold text-sm">
          <li>
            <Link target="_blank" href={"https://www.instagram.com"}>
              Instagram
            </Link>
          </li>
          <li>
            <Link target="_blank" href={"https://www.x.com"}>
              X
            </Link>
          </li>
          <li>
            <Link target="_blank" href={"https://www.tiktok.com"}>
              TikTok
            </Link>
          </li>
          <li>
            <Link target="_blank" href={"https://www.youtube.com"}>
              Youtube
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[95%] h-fit roboto-mono flex items-end justify-between">
        <div className="flex flex-row items-end gap-10">
          <div className="relative w-8 h-16">
            <Image
              src="/images/human_logo.svg"
              alt="Human footer logo"
              fill
              className="object-contain"
              loading="lazy"
              priority={false}
            />
          </div>
          <p className="text-xs text-footer-text">© Area. 2025</p>
        </div>
        <p className="text-xs text-footer-text w-fit h-fit ">
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
