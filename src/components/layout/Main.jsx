import MainTitle from "../MainTitle"
import cafeteriaFundo from "../../assets/cafeteria-fundo.jpg"
import Menu from "../Menu"
function Main() {


    return (
        <main className="">
            <section style={{
                backgroundImage: `url(${cafeteriaFundo})`
            }} className={`h-screen w-full bg-cover bg-no-repeat flex items-center justify-center`}>
                <MainTitle /> 
            </section>

            <Menu />
        </main>


    )
}

export default Main