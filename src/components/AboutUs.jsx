import cafeteriaLogo from "../assets/coffee-logo.png"
import Button from "./Button";

function AboutUs() {


    return (
        <section id="about-us" className="h-screen bg-black text-amber-400 flex justify-center items-center text-5xl">

        <div className="p-4 flex flex-col justify-center items-center w-fit">
            <h2 className="w-fit text-4xl">10 years of good coffee and good moments</h2>
            <p className=" w-full text-amber-100 text-xs sm:text-sm sm:w-2/4">We are a big coffee enterprise, working to offer good coffee and a good experience for you
                and your family, and we really believe we can make it possible. 2015, a coffee lover called Rodrigues decided
                to offer the best morning drink of his city, so he took it seriously and brought Coffee Time into existence.
            </p>
        </div>
        <img className="h-[20vw] lg:h-80" src={cafeteriaLogo}></img>
        </section>
    )
}

export default AboutUs;