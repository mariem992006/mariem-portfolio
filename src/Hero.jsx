import me from "./assets/me.jpeg"

const Hero = () => {
    return (
        <section id="home" className="bg-[#12110F] text-white min-h-screen mt-15">

            <div className="max-w-6xl mx-auto flex flex-col items-center text-center pt-12">

                <img
                    src={me}
                    alt="Mariem Mohamed"
                    className="w-[250px] h-[250px] rounded-full object-cover "
                />

                <div className="pt-12">

                    <h1 className="text-4xl font-bold">
                        <span className="text-[#8b5cf6]">
                            I'm Mariem Mohamed,
                        </span>
                        <br />
                        Computer Science Student based in Egypt
                    </h1>

                    <p className="pt-6 text-lg">
                        I am a Computer Science student who loves programming
                        and UI design. Web application programming is something
                        that I do to enhance my programming skills and learn new things.
                    </p>

                    <div className="flex justify-center gap-4 mt-8">

                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#f472b6] text-white px-6 py-3 rounded-3xl duration-300 hover:scale-105"
                        >
                            Contact with me
                        </a>

                        <a
                            href="#about"
                            className="border-2 border-white px-6 py-3 rounded-3xl duration-300 hover:scale-110 hover:bg-[#8b5cf6] hover:border-[#8b5cf6]"
                        >
                            About Me
                        </a>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero