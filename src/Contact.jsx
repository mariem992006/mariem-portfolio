import { useState } from "react"

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Name:", name)
        console.log("Email:", email)
        console.log("Message:", message)

        setName("")
        setEmail("")
        setMessage("")
    }
    return (
        <div id="contact" className="bg-[#12110F] text-white py-20">

            <div className="max-w-5xl mx-auto">

                <h2 className="text-4xl font-bold text-center pb-12">
                    Contact <span className="text-[#8b5cf6]">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div className="flex flex-col justify-center">

                        <h3 className="text-2xl font-semibold">
                            Let's Talk
                        </h3>

                        <p className="text-gray-400 mt-4">
                            I'm always open to new opportunities, projects,
                            and interesting ideas. Feel free to get in touch with me.
                        </p>

                        <div className="mt-8">

                            <p className="text-gray-300">
                                🖂 <span className="ml-2">maromh0909@gmail.com</span>
                            </p>

                            <p className="text-gray-300">
                                🕾 <span className="ml-2">+201011582818</span>
                            </p>

                            <p className="text-gray-300">
                                📍 <span className="ml-2">Alexandria - Cairo, Egypt</span>
                            </p>

                        </div>

                    </div>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-[#1b1917] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#1b1917] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition mt-4"
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-[#1b1917] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition mt-4"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#f472b6] text-white duration-300 hover:scale-105"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
            <div className="text-gray-400 text-center pb-1 pt-5 border-t border-gray-800 mt-6">

                <p>
                    © 2026 Mariem Mohamed. All rights reserved.
                </p>

            </div>

        </div>

    )
}

export default Contact