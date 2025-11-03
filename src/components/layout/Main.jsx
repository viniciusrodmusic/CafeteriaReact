import MainTitle from "../MainTitle"
import cafeteriaFundo from "../../assets/cafeteria-fundo.jpg"
import Menu from "../Menu"


function Main() {


    return (
        <main>
            {/* SEÇÃO HOME */}
            <section id="home" style={{ backgroundImage: `url(${cafeteriaFundo})` }}
            className={`h-screen w-full bg-cover bg-no-repeat flex items-center justify-center`}>
                
                <MainTitle /> 
            </section>

        
            {/* SEÇÃO DO MENU DE CAFÉ */}
            <Menu />
            {/* SEÇÃO DO ABOUT US */}
          
        </main>


    )
}

export default Main