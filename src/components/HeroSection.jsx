import MainTitle from './MainTitle'
import cafeteriaFundo from "../assets/cafeteria-fundo.jpg"



export default function HeroSection() {


  return (
    
   <section id="home" style={{ backgroundImage: `url(${cafeteriaFundo})` }}
            className={`h-screen w-full bg-cover bg-no-repeat flex items-center justify-center`}>
                <MainTitle /> 
  </section>


  )
}
