function Hero () {
    return (
        <section id="home" className="bg-[url('https://res.cloudinary.com/ggqklbyt/image/upload/file_000000005620820889497b4a5e95f764.png')] bg-cover bg-center bg-no-repeat">
            <div className="dark:bg-gradient-to-r from-[#101B2B]/90 via-[#101B2B]/60 to-[#101B2B]/45">
            <div className="max-w-6xl mx-auto text-[#17324D] dark:text-[#F4F4F0] py-12 px-3">
                <h1 className="text-5xl md:text-6xl font-bold dark:text-white">Bolly<span className="dark:text-[#1769AA]">Scapes</span></h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-3">Discover Places. Create Memories.</h2>
                <p className="text-lg md:text-xl font-semibold mb-5 max-w-sm md:max-w-lg">Explore breathtaking destinations around the world, from iconic landmarks to hidden gems.</p>
                <a href="#destination" className="bg-[#1769AA] hover:bg-[#17324D] text-white rounded-2xl py-3 px-5 font-semibold md:text-lg"><span>&#9992;</span> Explore Destinations &rarr;</a>
            </div>
            </div>
        </section>
    )
}

export default Hero;
