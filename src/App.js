import React from "react";

// Component imports
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative bg-black bg-cover overflow-hidden bg-no-repeat">
      {/* Main Sections */}
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Banner />
      <Nav />

      {/* Left-side clipPath */}
      <div
        className="absolute inset-x-0 -top-20 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60 sm:left-5"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(70%-11rem)] aspect-[1455/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Right-side clipPath */}
      <div
        className="absolute inset-x-0 z-10 transform-gpu overflow-hidden blur-3xl sm:top-0 sm:right-0"
        aria-hidden="true"
        style={{ top: "calc(25rem)" }}
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#d564fe] to-[#887fff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(22% 22%, 35% 35%, 22% 53%, 53% 75%, 68% 68%, 75% 58%, 80% 66%, 83% 70%, 88% 65%, 90% 50%, 96% 42%, 75% 12%, 65% 8%, 60% 18%, 45% 35%, 34% 20%)",
          }}
        ></div>
      </div>

      {/* Bottom clipPath */}
      <div
        className="absolute inset-x-0 z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
        style={{ top: "calc(55rem)", left: "calc(50% - 2rem)", transform: "translateX(-50%)" }}
      >
        <div
          className="relative w-[40rem] aspect-[1155/678] bg-gradient-to-tr from-[#d564fe] to-[#887fff] opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(10% 10%, 20% 40%, 30% 10%, 45% 50%, 50% 60%, 60% 70%, 75% 40%, 90% 60%, 100% 20%, 80% 10%, 70% 50%, 60% 30%, 50% 20%, 35% 30%, 20% 20%)",
          }}
        >
        </div>
      </div>

      {/* New Polygon Below Bottom clipPath */}
      <div
        className="absolute inset-x-0 z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
        style={{
          top: "calc(70rem)", // Adjusted to position below the bottom clip-path
          left: "calc(50% - 4rem)", // Adjusted position
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="relative w-[50rem] aspect-[1455/678] bg-gradient-to-tl from-[#ff7eb3] to-[#ffdf80] opacity-40 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(10% 15%, 25% 20%, 35% 25%, 45% 40%, 55% 45%, 65% 35%, 75% 45%, 85% 40%, 90% 30%, 80% 20%, 70% 25%, 60% 40%, 50% 35%, 40% 25%, 30% 15%)",
          }}
        ></div>
      </div>

      {/* Another New Polygon Below the Previous One */}
      <div
        className="absolute inset-x-0 z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
        style={{
          top: "calc(95rem)", // Adjusted position below the previous new polygon
          left: "calc(50% - 8rem)", // Adjusted horizontal placement
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="relative w-[60rem] aspect-[1455/678] bg-gradient-to-br from-[#cb5fc0] to-[#6b47ee] opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(0% 20%, 10% 30%, 20% 40%, 30% 30%, 40% 35%, 50% 25%, 60% 20%, 70% 25%, 80% 40%, 90% 30%, 100% 40%, 100% 60%, 90% 70%, 80% 60%, 70% 50%, 60% 60%, 50% 70%, 40% 60%, 30% 70%, 20% 60%, 10% 50%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default App;
