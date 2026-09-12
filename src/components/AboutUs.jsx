import '../styles/AboutUs.css'

function AboutUs() {
    return (
        <section id="about-us" className="min-h-screen w-full flex flex-col items-center justify-center p-8 lg:p-16">
            <div className="max-w-4xl text-center flex flex-col items-center gap-8">
                <h2 className="text-4xl lg:text-6xl break-normal text-orange-300">10 years of good coffee and good moments</h2>
                <p className="text-white text-lg lg:text-xl max-w-3xl leading-relaxed opacity-90">
                    We are a big coffee enterprise, working to offer good coffee and a good experience for you and your family, and we really believe we can make it possible. 2015, a coffee lover called Rodrigues decided to offer the best morning drink of his city, so he took it seriously and brought Coffee Time into existence.
                </p>
            </div>
        </section>
    )
}

export default AboutUs;
