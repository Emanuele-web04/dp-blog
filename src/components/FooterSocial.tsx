import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";

const FooterSocial = () => {
  return (
    <div className="flex items-center w-full justify-center gap-x-5 p-5">
      <Link
        href={"https://github.com/Emanuele-web04"}
        target="_blank"
        className="social"
      >
        <IoLogoGithub className="icon" />
      </Link>
      <Link
        className="social"
        target="_blank"
        href={
          "https://www.linkedin.com/in/emanuele-di-pietro-12b464284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        }
      >
        <FaLinkedin className="icon" />
      </Link>
      <Link
        href={"https://x.com/manuvelopment"}
        target="_blank"
        className="social"
      >
        <RiTwitterXFill className="icon" />
      </Link>
    </div>
  );
};

export default FooterSocial;
