const Skills = () => {
    return (
        <section id="skills" className="bg-[#12110F] text-white py-20">

            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-4xl font-bold pb-12">
                    My <span className="text-[#8b5cf6]">Skills</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-6 hover:border-[#8b5cf6] duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold">
                            C++
                        </h3>
                    </div>

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-6 hover:border-[#d946ef] duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold">
                            Python
                        </h3>
                    </div>

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-6 hover:border-[#f472b6] duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold">
                            HTML
                        </h3>
                    </div>

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-6 hover:border-[#8b5cf6] duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold">
                            CSS
                        </h3>
                    </div>

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-6 hover:border-[#d946ef] duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold">
                            JavaScript
                        </h3>
                    </div>

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-6 hover:border-[#f472b6] duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold">
                            React
                        </h3>
                    </div>

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-6 hover:border-[#8b5cf6] duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold">
                            Data Structures
                        </h3>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Skills