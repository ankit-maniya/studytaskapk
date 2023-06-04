"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const allLinks = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Contact",
      href: "/contactus",
    },
    {
      id: 3,
      title: "How it Works",
      href: "/how-it-works",
    },
    {
      id: 4,
      title: "Services",
      href: "/services",
    },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom border-bottom-dark text-white bg-primary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          StudyTasks
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {allLinks && allLinks.length > 0
              ? allLinks.map((link, key) => {
                  console.log("pathname :: ", pathname);
                  const isActive = pathname.startsWith(link.href.split("/")[1]);

                  return (
                    <li className="nav-item" key={link.id}>
                      <Link
                        className={"nav-link"}
                        aria-current="page"
                        href={link.href}
                        key={link.id}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}
