import MainButton from "./MainButton"

function MainTitle() {
    // Card: You need a coffee time + 2 buttons

    return (
        <>
                <section className="text-white flex flex-col items-start w-[70%]">

                    <div className="flex flex-col items-center w-[75%]">
                        <h1 className="leading-[100px] text-[8rem] text-center w-[60rem]">You need a <span className="text-[var(--light-coffee)]">coffee</span> time</h1>
                        <div>
                        <MainButton textContent="Book a table"/>
                        <MainButton bgColor="red" textColor="black" textContent="About us"/>
                        </div>
                    </div>

                </section>

                <div className="w-[30%] h-[450px]">
                    {/* Somente um bloco invisível que divide o layout em dois para facilitar localizar o título mais pra esquerda */}
                </div>

        </>
    )
}

export default MainTitle
