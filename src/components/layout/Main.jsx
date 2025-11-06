import AboutUs from "../AboutUs"
import HeroSection from "../HeroSection"
import Menu from "../Menu"


function Main() {


    return (
        <main>
            {/* SEÇÃO DA HERO SECTION COM O TÍTULO "YOU NEED A COFFEE TIME" */}
            <HeroSection />
        
            {/* SEÇÃO DO MENU DE CAFÉ */}
            <Menu />

            {/* SEÇÃO DO ABOUT US */}
            <AboutUs />
        </main>


    )
}

export default Main