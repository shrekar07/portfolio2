import React from "react";


const Header = () => {
  return (
    <div>
      <div className="cointainer px-24 relative max-w-[100%] min-h-[100svh] flex flex-col items-center justify-center gap-20 bg-black text-white">
        {/* Resume Button */}
        <div className="absolute top-10 left-20 hidden md:block z-20">
          <a
            href="https://drive.google.com/file/d/1HIzEaA3bdBRWxtxtENi5b2VrYq2fZrtF/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center font-secondary gap-2 items-center mx-auto shadow-xl text-sm bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 text-black before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-purple-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-1 rounded-xl group"
          >
            View Resume
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 absolute top-8 right-20 md:top-10 z-20">
          {/* Email Icon */}
          <a
            aria-label="email"
            className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-white/10 h-10 px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:shrekarreddy7@gmail.com"
          >
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
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            aria-label="linkedin"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-white/10 h-10 px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/srikar-reddy-b-976187247/"
          >
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
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* GitHub Icon */}
          <a
            aria-label="github"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-white/10 h-10 px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shrekar7"
          >
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
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
        </div>

        {/* Heading and Profile */}
        <div className="group relative text-center">
          <h1 className="scroll-m-20 text-7xl sm:text-9xl font-extrabold tracking-tight lg:text-10xl leading-none mb-28">
            <span className="font-primary whitespace-nowrap duration-500 ease-in-out transition bg-gradient-to-r from-[#ff80b5] to-[#9089fc] bg-clip-text text-transparent">
              Srikar Reddy
            </span>
          </h1>
          <div className="rounded-2xl shadow-2xl shadow-purple-600 h-40 w-40 lg:h-52 lg:w-52 transition absolute -bottom-6 lg:-bottom-14 left-1/2 transform -translate-x-1/2 overflow-hidden">
            <img
              alt="profile-photo"
              loading="lazy"
              width="320"
              height="320"
              decoding="async"
              className="object-cover h-40 w-40 lg:h-52 lg:w-52 group-hover:scale-110 transition duration-700 ease-in-out bg-black"
              src="/profile2.jpg"
            />
          </div>
        </div>

        {/* Footer */}
        <p className="hidden lg:block absolute bottom-9 font-secondary left-24 text-2xl text-gray-400 text-muted-foreground whitespace-nowrap">
          Software Developer and Tech Enthusiast
        </p>
        <p className="lg:hidden text-xl text-white text-center font-medium text-muted-foreground">
          Focused On Building Quality Experiences
        </p>
        <p className="hidden lg:block absolute bottom-9 right-24 text-2xl font-secondary text-gray-400 text-muted-foreground whitespace-nowrap">
          Focused on building quality experiences
        </p>
      </div>
    </div>
  );
};

export default Header;
