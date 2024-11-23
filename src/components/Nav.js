import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Apply theme on component mount
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Persist theme in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="fixed border border-purple-500 p-2 rounded-lg bottom-7 left-1/2 -translate-x-1/2 bg-black z-50 shadow">
          <div className="flex items-center gap-2">
            {/* About Button */}
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-flex items-center font-secondary justify-center text-sl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white/10 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer"
            >
              About
            </Link>
            {/* Work Button */}
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center text-sl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white/10 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer"
            >
              Work
            </Link>
            {/* Contact Button */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center text-sl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white/10 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer"
            >
              Contact
            </Link>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 rotate-0 scale-100 transition-all"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="M12 20v2"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
