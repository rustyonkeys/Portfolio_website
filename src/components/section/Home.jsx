import { Typewriter } from 'react-simple-typewriter';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineSparkles } from 'react-icons/hi';
import RevealOnScroll from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-980 to-gray-800 text-white relative"
    >
     <RevealOnScroll> 
      <div className="text-center z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          <Typewriter
            words={['Hi, I am Shreyas Shetty']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 mb-10 font-serif italic max-w-2xl mx-auto">
          A Software Engineer based in Glasgow.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary Button */}
          <a
            href="#project"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-blue-600 text-white font-semibold rounded-lg bg-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 shadow-md hover:shadow-lg"
          >
            View My Work
            <HiOutlineSparkles className="text-xl" />
          </a>

          {/* Secondary Button */}
          <a
            href="#Contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-blue-500/50 text-blue-400 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
          >
            Connect With Me/Resume
            <HiArrowNarrowRight className="text-xl" />
          </a>
        </div>
      </div>
    </RevealOnScroll>
    </section>
  );
};
