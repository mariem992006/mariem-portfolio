const About = () => {
    return (
        <div id="about" className="bg-[#12110F] text-white pb-20 ">

            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-4xl font-bold pb-12">
                    About <span className="text-[#8b5cf6]">Me</span>
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-8 hover:border-[#8b5cf6] duration-300 hover:scale-105">

                        <div className="w-12 h-12 rounded-full bg-[#2a222d] flex items-center justify-center mx-auto mb-6 text-xl">
                            💻
                        </div>
        
                        <h3 className="text-2xl font-semibold mb-4">
                            Who I Am
                        </h3>

                        <p className="text-gray-400">
                            I am a Computer Science student who loves programming
                            and UI design. I enjoy learning new technologies and
                            building creative projects.
                        </p>

                    </div>


                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-8 hover:border-[#d946ef] transition-all duration-300 hover:scale-105">

                        <div className="w-12 h-12 rounded-full bg-[#2a222d] flex items-center justify-center mx-auto mb-6 text-xl">
                            🎨
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            What I Love
                        </h3>

                        <p className="text-gray-400">
                            I love Front-End Development and creating clean, responsive,
                            and user-friendly websites with modern and beautiful interfaces.
                        </p>

                    </div>

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-8 hover:border-[#f472b6] transition-all duration-300 hover:scale-105">

                        <div className="w-12 h-12 rounded-full bg-[#2a222d] flex items-center justify-center mx-auto mb-6 text-xl">
                            🚀
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            My Goal
                        </h3>

                        <p className="text-gray-400">
                            I am always excited to learn new technologies and work
                            on different projects to become a better Full Stack Developer.
                        </p>

                    </div>

                </div>

            </div>  

        </div>
    )
}

export default About