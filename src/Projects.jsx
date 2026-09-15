import project1 from "./assets/project1.png"
import project2 from "./assets/project2.png"
import project3 from "./assets/project3.png"

const Projects = () => {
    return (
        <section id="projects" className="bg-[#12110F] text-white py-20 px-6">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-center pb-12">
                    My <span className="text-[#8b5cf6]">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <a
                        href="http://127.0.0.1:5502/index.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={project1}
                            alt="Project 1"
                            className="w-full h-64 object-cover rounded-2xl transition-all duration-300 hover:scale-105"
                        />
                    </a>

                    <a
                        href="http://127.0.0.1:5502/index.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={project2}
                            alt="Project 2"
                            className="w-full h-64 object-cover rounded-2xl transition-all duration-300 hover:scale-105"
                        />
                    </a>

                    <a
                        href="http://127.0.0.1:5502/home.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={project3}
                            alt="Project 3"
                            className="w-full h-64 object-cover rounded-2xl transition-all duration-300 hover:scale-105"
                        />
                    </a>

                </div>

            </div>

        </section>
    )
}

export default Projects