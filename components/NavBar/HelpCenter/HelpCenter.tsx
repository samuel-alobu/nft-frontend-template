import React from "react";
import Link from "next/link";

export default function HelpCenter() {
  const helpCenter = [
    { name: "About", link: "/about" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Sign Up", link: "/sign-up" },
    { name: "Sign In", link: "/sign-in" },
    { name: "Subscription", link: "/subscription" },
  ];

  return (
    <div>
      {helpCenter.map((el) => (
        <div
          key={el.link}>
          <Link
            href={el.link}
            className="block px-4 py-2 transition-all duration-300 ease-in hover:bg-(--icons-color) hover:text-(--shadow-dark-color) hover:rounded-[0.3rem]"
          >
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
