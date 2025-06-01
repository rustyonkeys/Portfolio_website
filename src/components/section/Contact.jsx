import RevealOnScroll from "../RevealOnScroll";

export const Contact = () => {
    return(
        <section
            id="contact"
            className="min-h-screen pt-30 flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-980 text-white pt-32"
        >
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Get in Touch
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-300 shadow-lg">
                        <p className="text-gray-300 mb-6 text-lg">
                            I'm always open to new opportunities, collaborations, or want to start project together. Feel free to reach out!
                        </p>

                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="block mx-auto p-20 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};