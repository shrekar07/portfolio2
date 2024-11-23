import React from "react";

const Work = () => {
  return (
    <div
      id="work"
      className="container flex flex-col gap-10 py-4 pt-8 max-w-[90%] ml-20 relative"
    >
      {/* Work Section */}
      <div className="flex flex-col gap-8">
        <h2 className="scroll-m-20 pb-3 text-4xl font-secondary font-bold tracking-tight relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-800 after:mt-2">
          Work
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {/* IBM Section */}
          <div className="rounded-lg border border-gray-700 bg-primary text-gray-800 shadow-sm w-full pt-6">
            <div className="p-6 pt-0">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <img
                    alt="IBM Company Logo"
                    loading="lazy"
                    width="95"
                    height="95"
                    decoding="async"
                    className="mt-20"
                    style={{ color: "transparent" }}
                    srcSet="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg 1x, https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg 2x"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2">
                    <p className="font-secondary text-2xl text-white">IBM</p>
                    <div
                      data-orientation="vertical"
                      role="none"
                      className="shrink-0 bg-gray-600 hidden sm:block w-[2px] h-7"
                    ></div>
                    <p className="text-gray-500 text-xl">Data Analytics</p>
                  </div>
                  <p className="leading-7 text-white">
                    I successfully completed the IBM SkillsBuild and CSRBOX
                    Micro-Internship in Data Analytics, enhancing my expertise
                    in data analysis, visualization, and problem-solving
                    through hands-on projects and industry-relevant training.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1veKIIvbLRM1Guw_u7JKJgntiUHuJH1zQ/view?usp=drive_link"
                    className="inline-flex z-20 items-center justify-center rounded-md text-sm font-secondary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary-foreground hover:bg-primary/90 hover:text-white h-9 px-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certification
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
                      className="h-[0.85rem] w-[0.85rem] ml-1"
                    >
                      <path d="M14 3h7v7"></path>
                      <path d="M10 14L21 3"></path>
                      <path d="M5 12v6a2 2 0 0 0 2 2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* PHN Technologies Section */}
          <div className="rounded-lg border border-gray-700 bg-primary text-gray-800 shadow-sm w-full pt-6">
            <div className="p-6 pt-0">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <img
                    alt="PHN Technologies Logo"
                    loading="lazy"
                    width="95"
                    height="95"
                    decoding="async"
                    className="mt-14 rounded-2xl"
                    style={{ color: "transparent" }}
                    src="/phn.png"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2">
                    <p className="font-secondary text-2xl text-white">
                      PHN-Technologies
                    </p>
                    <div
                      data-orientation="vertical"
                      role="none"
                      className="shrink-0 bg-gray-600 hidden sm:block w-[2px] h-7"
                    ></div>
                    <p className="text-gray-500 text-xl">Web Developer</p>
                  </div>
                  <p className="leading-7 text-white">
                    Completed a web development internship at PHN Technologies,
                    where I developed responsive user interfaces, optimized
                    website performance, and collaborated with teams to
                    implement modern web technologies
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1hdvEc6xfdMlB_puWDfa2nFr6Gw79o1Mz/view?usp=drive_link"
                    className="inline-flex z-20 items-center justify-center rounded-md text-sm font-secondary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary-foreground hover:bg-primary/90 hover:text-white h-9 px-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certification
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
                      className="h-[0.85rem] w-[0.85rem] ml-1"
                    >
                      <path d="M14 3h7v7"></path>
                      <path d="M10 14L21 3"></path>
                      <path d="M5 12v6a2 2 0 0 0 2 2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col gap-8">
        <h2 className="scroll-m-20 pb-3 font-secondary text-4xl font-bold tracking-tight relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-800 after:mt-2">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Netflix Clone */}
          <div className="rounded-lg border border-gray-700 bg-primary text-card-foreground shadow-sm group flex flex-col">
            <div className="space-y-1.5 p-6 flex flex-col gap-2">
              <h3 className="text-2xl leading-none tracking-tight font-bold">
                Netflix Clone
              </h3>
              <div className="overflow-hidden px-4 py-4 bg-gradient-to-r from-[#ff80b5] via-[#ff80b5] to-[#9089fc] rounded-lg">
                <img
                  alt="work"
                  loading="lazy"
                  width="610"
                  height="318"
                  decoding="async"
                  className="w-full object-cover rounded-lg bg-gray-50 transition ease-in-out group-hover:scale-105 duration-500"
                  style={{ color: "transparent" }}
                  src="/netflix_clone.png"
                />
              </div>
            </div>
            <div className="p-6 pt-0 flex-1">
              <div className="w-full flex-col gap-2">
                <div>
                  <p className="leading-7 text-muted-foreground">Fully functional cloned website</p>
                </div>
              <div className="flex gap-2 flex-wrap py-4 items-center">
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-black text-primary-foreground hover:bg-gray-300">React JS</div>
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-primary-foreground hover:bg-gray-300">Tailwind</div>
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-primary-foreground hover:bg-gray-300">Firebase</div>
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-primary-foreground hover:bg-gray-300">Typescript</div>
              </div>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <div className="flex gap-4">
                <a href="https://github.com/Shrekar7/netflix_clone" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black text-primary-foreground hover:bg-gray-700 hover:text-white h-9 px-3" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-[0.85rem] w-[0.85rem] mr-1">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Live site
                </a>
                <a href="https://github.com/Shrekar7/netflix_clone" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white hover:text-black bg-gray-700 text-secondary-foreground hover:bg-gray-300 h-9 px-3" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-[0.85rem] w-[0.85rem] mr-1">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-primary border-gray-700 text-card-foreground shadow-sm group flex flex-col">
            <div className="space-y-1.5 p-6 flex flex-col gap-2">
              <h3 className="text-2xl leading-none tracking-tight font-bold">
                Rythmo
              </h3>
              <div className="overflow-hidden px-4 py-4 bg-gradient-to-r from-[#ff80b5] via-[#ff80b5] to-[#9089fc] rounded-lg">
                <img
                  alt="work"
                  loading="lazy"
                  width="610"
                  height="318"
                  decoding="async"
                  className="w-full object-cover rounded-lg bg-gray-50 transition ease-in-out group-hover:scale-105 duration-500"
                  style={{ color: "transparent" }}
                  src="/rythmo.png"
                />
              </div>
            </div>
            <div className="p-6 pt-0 flex-1">
              <div className="w-full flex-col gap-2">
                <div>
                  <p className="leading-7 text-muted-foreground">An add free music experience</p>
                </div>
              <div className="flex gap-2 flex-wrap py-4 items-center">
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-black text-primary-foreground hover:bg-gray-300">next JS</div>
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-primary-foreground hover:bg-gray-300">Tailwind</div>
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-primary-foreground hover:bg-gray-300">supabase</div>
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-primary-foreground hover:bg-gray-300">Typescript</div>
              </div>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <div className="flex gap-4">
                <a href="https://rythmo.netlify.app/" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black text-primary-foreground hover:bg-gray-700 hover:text-white h-9 px-3" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-[0.85rem] w-[0.85rem] mr-1">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Live site
                </a>
                <a href="https://github.com/Shrekar7/rhythmo" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white bg-gray-700 text-secondary-foreground hover:bg-gray-300 h-9 hover:text-black px-3" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-[0.85rem] w-[0.85rem] mr-1">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-primary border-gray-700 text-card-foreground shadow-sm group flex flex-col">
            <div className="space-y-1.5 p-6 flex flex-col gap-2">
              <h3 className="text-2xl leading-none tracking-tight font-bold">
                Gemini
              </h3>
              <div className="overflow-hidden px-4 py-4 bg-gradient-to-r from-[#ff80b5] via-[#ff80b5] to-[#9089fc] rounded-lg">
                <img
                  alt="work"
                  loading="lazy"
                  width="610"
                  height="318"
                  decoding="async"
                  className="w-full object-cover rounded-lg bg-gray-50 transition ease-in-out group-hover:scale-105 duration-500"
                  style={{ color: "transparent" }}
                  src="/edith.png"
                />
              </div>
            </div>
            <div className="p-6 pt-0 flex-1">
              <div className="w-full flex-col gap-2">
                <div>
                  <p className="leading-7 text-muted-foreground">A fully functional personal A.I</p>
                </div>
              <div className="flex gap-2 flex-wrap py-4 items-center">
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-black text-primary-foreground hover:bg-gray-300">React JS</div>
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-primary-foreground hover:bg-gray-300">Tailwind</div>
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-primary-foreground hover:bg-gray-300">Firebase</div>
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white font-primary text-primary-foreground hover:bg-gray-300">Typescript</div>
              </div>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <div className="flex gap-4">
                <a href="#" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black text-primary-foreground hover:bg-gray-700 hover:text-white h-9 px-3" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-[0.85rem] w-[0.85rem] mr-1">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Live site
                </a>
                <a href="#" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white hover:text-black bg-gray-700 text-secondary-foreground hover:bg-gray-300 h-9 px-3" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-[0.85rem] w-[0.85rem] mr-1">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
