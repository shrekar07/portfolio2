import React from "react";

const About = () => {
  return (
    <div className="py-8 px-4 sm:py-12 mr-4 ml-20 container max-w-[90%]" id="about">
      <div className="font-primary flex flex-col gap-8">
        {/* Heading */}
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
          I focus on building
          <span className="bg-gradient-to-r from-[#ff80b5] via-[#ff80b5] to-[#9089fc] bg-clip-text text-transparent">
            {" "}
            Quality
          </span>{" "}
          applications and services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Column */}
          <div className="font-secondary flex flex-col gap-10 lg:col-span-3">
            <p className="text-xl ">
              I'm an undergraduate student from St. Martin's Engineering College,
              pursuing a bachelor's degree in Computer Science and Engineering.
            </p>
            <p className="text-xl">
              My passion lies in creating software that solves real-world problems and positively impacts people's lives.
            </p>
            <p className="text-xl">
              Right now, I'm working on some exciting projects that I can't wait
              to share with you. But I'm always open to new opportunities and
              collaborations.
            </p>
            <a
              href="https://drive.google.com/file/d/1HIzEaA3bdBRWxtxtENi5b2VrYq2fZrtF/view?usp=drive_linkx"
              target="_blank"
              className="inline-flex items-center font-secondary justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-black hover:bg-white/10 hover:text-white h-10 px-4 py-2 self-start"
            >
              View Resume
            </a>
          </div>

          {/* Right Column (Box) */}
          <div className="lg:col-span-2 rounded-lg border border-purple-500 bg-primary text-white shadow-sm p-6">
            <div className="flex flex-col gap-4">
              {/* Languages and Markup */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  Languages | Markup
                </h3>
                <p className="leading-7 text-gray-600">
                  JavaScript, TypeScript, Python, C, C++, HTML, CSS
                </p>
              </div>

              {/* Libraries and Frameworks */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  Libraries | Frameworks
                </h3>
                <p className="leading-7 text-gray-600">
                  React.js, Node.js, Next.js, Solid.js, Qwik.js, Express.js, Firebase, Redux Toolkit, REST API, GraphQL, Tailwind CSS, Chakra UI, Material UI, Shadcn/ui, Bootstrap, React Native
                </p>
              </div>

              {/* Databases */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  Databases
                </h3>
                <p className="leading-7 text-gray-600">
                  MongoDB, Firebase Cloud Firestore
                </p>
              </div>

              {/* Tools */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  Tools
                </h3>
                <p className="leading-7 text-gray-700">
                  Git, GitHub, Bash, VSCode, Postman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
