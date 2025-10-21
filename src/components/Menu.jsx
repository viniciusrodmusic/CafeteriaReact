import CoffeeOption from "./CoffeeOption"

function Menu() {



    return (
        <section className="h-auto xl:h-screen bg-[var(--dark-coffee)] flex flex-col md:justify-around items-center xl:p-8 gap-6" >

            <h2 className="text-4xl lg:text-6xl text-white text-center break-normal w-3/4">How would you like to <span className="text-[var(--light-coffee)]">feel</span> today?</h2>

            {/* A BANDEJA DE COR CLARA COM AS OPÇÕES DE CAFÉ DENTRO: */}
            <div className="p-8 gap-[100px] sm:gap-6 bg-[var(--lighter-coffee)] size-full xl:size-3/4 rounded-4xl flex-col xl:flex-row flex justify-around items-center" >
                <CoffeeOption textContent="sweet with Lapuccino + Chocolate" coffeeImage="3" price="$ 5.00"/>
                <CoffeeOption textContent="stronger with Black Coffee" coffeeImage="1" price="$ 2.00"/>
                <CoffeeOption textContent="just calm with Coffee + Milk" coffeeImage="2" price="$ 3.00"/>
            </div>



        </section>
    )


}

export default Menu