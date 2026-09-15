const Services = () => {
    return (
        <section id="services" className="bg-[#12110F] text-white py-20">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-center pb-12">
                    My <span className="text-[#8b5cf6]">Services</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-8 hover:border-[#8b5cf6] transition-all duration-300 hover:scale-105">

                        <p className="text-[#8b5cf6] text-lg font-semibold">
                            01
                        </p>

                        <h3 className="text-2xl font-semibold mt-4">
                            Frontend Development
                        </h3>

                        <p className="text-gray-400 mt-4 ">
                            Building responsive and modern websites with clean and
                            user-friendly interfaces.
                        </p>

                    </div>


                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-8 hover:border-[#d946ef] transition-all duration-300 hover:scale-105">

                        <p className="text-[#d946ef] text-lg font-semibold">
                            02
                        </p>

                        <h3 className="text-2xl font-semibold mt-4">
                            UI Design
                        </h3>

                        <p className="text-gray-400 mt-4 leading-7">
                            Creating simple and attractive user interfaces with a
                            focus on user experience and visual details.
                        </p>

                    </div>

                    <div className="bg-[#1b1917] border border-gray-800 rounded-2xl p-8 hover:border-[#f472b6] transition-all duration-300 hover:scale-105">

                        <p className="text-[#f472b6] text-lg font-semibold">
                            03
                        </p>

                        <h3 className="text-2xl font-semibold mt-4">
                            Web Development
                        </h3>

                        <p className="text-gray-400 mt-4 leading-7">
                            Turning ideas and designs into functional and interactive
                            web applications using modern web technologies.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Services