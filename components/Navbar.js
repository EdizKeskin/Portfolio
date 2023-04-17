"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navlinks = [
  { href: "/", title: "Home" },
  { href: "/contact", title: "Contact" },
  { href: "/projects", title: "Projects" },
];

const MenuButton = ({ isOpened, onClick }) => {
  return (
    <button
      type="button"
      className="flex w-8 h-8 bg-transparent rounded cursor-pointer"
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      <svg viewBox="0 0 100 100" className="w-8 h-8 text-gray-100">
        <path
          className={`${isOpened ? "opened" : ""} line line1`}
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path
          className={`${isOpened ? "opened" : ""} line line2`}
          d="M 20,50 H 80"
        />
        <path
          className={`${isOpened ? "opened" : ""} line line3`}
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
  );
};

function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return isTop;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isTop = useIsScrollTop();

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    closed: {
      top: "-80vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <>
      <LazyMotion features={domAnimation}>
        <header
          className={`w-full overflow-hidden top-0 flex items-center justify-between py-4 z-50 sticky  ${
            isTop
              ? "border-none"
              : "border-b border-gray-200 dark:border-gray-800"
          } bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-md firefox:bg-opacity-100 dark:firefox:bg-opacity-100`}
        >
          <nav className="flex items-center justify-between w-full max-w-2xl px-4 mx-auto md:justify-center sm:px-6 sm:py-2 xl:max-w-3xl xl:px-0">
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block sm:space-x-8">
                {navlinks.map((link) => (
                  <Link
                    key={link.title}
                    title={link.title}
                    href={link.href}
                    className="font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex items-center sm:hidden">
                <MenuButton
                  isOpened={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            </div>
          </nav>
        </header>
        <m.nav
          initial={false}
          variants={menuVariants}
          className={`fixed right-0 top-0 flex flex-col items-center justify-center w-screen h-screen bg-gray-800 backdrop-filter bg-opacity-30 backdrop-blur-md firefox:bg-opacity-100 dark:firefox:bg-opacity-100 ${
            isOpen ? "z-40" : "-z-10"
          }`}
          animate={isOpen ? "opened" : "closed"}
        >
          <m.ul className="text-center">
            {navlinks.map((link) => (
              <m.li key={link.title} variants={linkVariants} className="mb-6">
                <Link
                  href={link.href}
                  className="text-xl font-semibold leading-8 tracking-wide text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  {link.title}
                </Link>
              </m.li>
            ))}
          </m.ul>
        </m.nav>
      </LazyMotion>
    </>
  );
}
