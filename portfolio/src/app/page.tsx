"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HomeContextProvider, useHomeContext } from "./components/home_context";
import { FadeIn } from "./components/FadeIn";

const Home = () => {
  const { isDarkTheme } = useHomeContext();
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
      el.classList.add("opacity-0");
      setTimeout(() => el.classList.remove("opacity-0"), 200);
    });
  }, []);

  return (
    <div
      className={`font-roboto min-h-screen p-4 sm:p-8 md:p-12 pb-12 grid grid-rows-[auto_1fr_auto] items-center justify-items-center gap-8 sm:gap-12 md:gap-16 transition-all duration-300 ${
        isDarkTheme
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Header Section */}
      <FadeIn>
        <header className="row-start-1 w-full px-4 md:px-12 text-center">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto space-y-4">
            <h1
              className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold fade-in tracking-wide animate-scaleText font-montserrat ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              Hi, I&apos;m Suraj K R
            </h1>
            <p
              className={`text-xl sm:text-2xl md:text-3xl mt-4 fade-in max-w-4xl leading-relaxed animate-scaleText font-lora ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Front-End Developer | Next.js & React.js Enthusiast
            </p>
          </div>
        </header>
      </FadeIn>
      {/* Main Section */}
      <main className="flex flex-col gap-6 sm:gap-8 row-start-2 items-center text-center w-full max-w-4xl mx-auto fade-in">
        {/* Profile Image */}
        <FadeIn>
          <Image
            className={`rounded-full shadow-lg border-[6px] sm:border-[10px] border-white dark:border-purple-600 transition-transform transform ${
              hovering ? "scale-110" : "scale-100"
            }`}
            src="/png/mypic.png" // Replace with your own image
            alt="Profile Picture"
            width={150}
            height={150}
            priority
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          />
        </FadeIn>
        <FadeIn>
          <p
            className={`sm:text-2xl md:text-4xl mt-4 max-w-4xl leading-loose hover:animate-scaleText font-lora ${
              isDarkTheme ? "text-gray-300" : "text-gray-800"
            }`}
          >
            I&apos;m a passionate developer with 1.3 years of experience in
            building high-quality, dynamic, and responsive websites using
            Next.js, React.js, and TailwindCSS. I&apos;ve worked extensively on
            e-commerce solutions, API integration, and more.
          </p>
        </FadeIn>
      </main>
      {/* About Section */}
      <section id="about" className="fade-in w-full text-center mt-12 px-4">
        <h2
          className={`text-3xl sm:text-5xl md:text-6xl font-bold mt-6 sm:mt-8 font-montserrat ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          About Me
        </h2>
        <FadeIn>
          <p
            className={`text-base sm:text-2xl md:text-4xl mt-4 max-w-6xl mx-auto leading-loose font-lora hover:animate-scaleText ${
              isDarkTheme ? "text-gray-300" : "text-gray-800"
            }`}
          >
            I specialize in creating dynamic and responsive web applications.
            With my passion for coding and eye for design, I build exceptional
            web experiences using modern technologies like Next.js, React.js,
            and TailwindCSS. I&apos;m always striving to learn more and improve
            my craft.
          </p>
        </FadeIn>
      </section>
      {/* Skills Section */}
      <section
        id="skills"
        className="fade-in w-full text-center mt-16 sm:mt-24 px-4"
      >
        <h2
          className={`text-3xl sm:text-5xl md:text-6xl font-bold mt-6 sm:mt-8 border-b-2 pb-2 font-montserrat ${
            isDarkTheme ? "text-white border-white" : "text-black border-black"
          }`}
        >
          Skills
        </h2>
        <ul
          className={`list-disc list-inside mt-4 sm:mt-8 space-y-2 max-w-4xl mx-auto text-xl sm:text-2xl md:text-4xl font-fira hover:animate-scaleText ${
            isDarkTheme ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <FadeIn>
            <li>Next.js, React.js, JavaScript, TypeScript</li>
          </FadeIn>
          <FadeIn>
            <li>TailwindCSS, CSS3, HTML5</li>
          </FadeIn>
          <FadeIn>
            <li>API Integration, Responsive Design</li>
          </FadeIn>
        </ul>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="fade-in w-full text-center mt-8 sm:mt-12 px-4"
      >
        <h2
          className={`text-3xl sm:text-5xl md:text-6xl font-bold mt-6 sm:mt-8 border-b-2 pb-2 font-montserrat ${
            isDarkTheme ? "text-white border-white" : "text-black border-black"
          }`}
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-8 w-full max-w-4xl mx-auto">
          <a
            href="https://zoozle.in"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white dark:bg-gray-700 dark:text-white text-black rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <FadeIn>
              <h3 className="text-lg sm:text-xl font-bold font-montserrat">
                Zoozle E-commerce Platform
              </h3>
            </FadeIn>
            <FadeIn>
              <p className="text-sm font-lora">
                Designed and developed front-end pages and integrated APIs.
              </p>
            </FadeIn>
          </a>
        </div>
      </section>
      {/* Call to Action */}
      <FadeIn>
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8 fade-in">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black hover:bg-black hover:text-white text-xs sm:text-sm md:text-base h-10 sm:h-12 px-4 sm:px-5 font-lora"
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-black hover:text-white text-xs sm:text-sm md:text-base h-10 sm:h-12 px-4 sm:px-5 font-lora"
            href="mailto:your-email@gmail.com"
          >
            Contact Me
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-black hover:text-white text-xs sm:text-sm md:text-base h-10 sm:h-12 px-4 sm:px-5 font-lora"
            href="https://drive.google.com/file/d/1vLm1c5_CJlMst3XyXx6TAE1_nNEqpLyE/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </FadeIn>{" "}
    </div>
  );
};

export default function HomePage() {
  return (
    <HomeContextProvider>
      <Home />
    </HomeContextProvider>
  );
}
