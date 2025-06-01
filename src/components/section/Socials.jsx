export const Socials = () => {
    return(
        <section
            id="socials"
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-980 text-white pt-32"
        >
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Connect with Me
                </h2>
                <p className="text-gray-300 mb-6 text-lg text-center">
                    I'm always open to new opportunities, collaborations, or just a chat. Feel free to reach out!
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
                        GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
                        LinkedIn
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
                        Twitter
                    </a>
                </div>
            </div>
        </section>
    );
};