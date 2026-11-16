function About () {
    return (
        <section className="bg-white dark:bg-[#142338]" id="about">
            <div className="max-w-6xl mx-auto py-12 px-3">
                <div className="flex flex-col md:flex-row gap-7 w-full">
                    <div className="w-full md:w-1/2">
                     <img className="object-cover h-52 w-full rounded-lg dark:opacity-40" src="https://res.cloudinary.com/ggqklbyt/image/upload/v1794307525/file_00000000abb481f6ab089a71b41b5318.png" alt="About Image" />
                    </div>

                    <div className="bg-[#1769AA] h-14 w-2 rounded-lg max-md:hidden"></div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-[#17324D] mb-3 dark:text-[#F4F4F0]">About Us</h2>
                        <p className="text-black dark:text-[#F4F4F0] text-xl">At BollyScapes we are passionate about travel and discovery.
                            Our mission is to help you explore the world's most fascinating places,
                            learn about amazing attractions and plan your next adventure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;