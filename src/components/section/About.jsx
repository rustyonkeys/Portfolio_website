export const About = () => {
  const techstack = [
    "Power Bi", "Python", "R", "Git", "Azure", "MicrosoftSQLServer",
    "Snowflake", "Apache", "Airflow", "Matplotlib", "NumPy",
    "Pandas", "Plotly", "scikit-learn"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-300 shadow-lg">
            <p className="text-gray-300 mb-6 text-lg">
              I'm a Data geek (not literally, but yeah) who knows their way around Power BI, SQL, Databricks & Python — and around a bar counter too 🍻.
              With 2+ years of experience turning messy data into meaningful insights, I thrive in greenfield environments where every day brings something new (preferably not on fire).
              Currently on the lookout for new opportunities where I can keep learning, keep building, and maybe even keep caffeinating responsibly ☕.
            </p>

            <div className="rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">My TechStack</h3>
              <div className="flex flex-wrap gap-2">
                {techstack.map((tech, index) => (
                  <Motion.span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    {tech}
                  </Motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Section for Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 flex gap-3 items-center">
                <HiAcademicCap className="text-red-400 text-2xl" />
                Education
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-lg font-semibold">MSc in Data Science</strong>
                  <p className="text-gray-400">University of Glasgow, 2024</p>
                </li>
                <li>
                  <strong className="text-lg font-semibold">BE in Information Technology</strong>
                  <p className="text-gray-400">University of Mumbai, 2021</p>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 flex gap-3 items-center">
                <BiBriefcaseAlt2 className="text-white-400 text-2xl" />
                Work Experience
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-lg font-semibold">Capgemini</strong>
                  <p className="text-gray-400">Data Analyst, 2021–2023</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ✅ Place Socials here – BELOW the grid */}
          
        </div>
      </RevealOnScroll>
    </section>
  );
};
