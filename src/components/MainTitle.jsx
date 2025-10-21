import Button from "./Button"

function MainTitle() {
    // Card: You need a coffee time + 2 buttons

    return (
        <>
                <section className="text-white flex flex-col items-center md:items-start w-full md:w-3/4">

                    <div className="flex flex-col items-center w-3/4">
                        <h1 className="text-6xl/[3rem] lg:text-8xl/[5rem] text-center animate-fade-right animate-once animate-duration-1000 animate-delay-200 animate-ease-out">You need a <span className="text-[var(--light-coffee)]">coffee</span> time</h1>
                        
                        <div className="w-screen sm:w-4/4 flex justify-center">
                            <Button textContent="Book a table"/>
                            <Button bgColor="red" textColor="black" textContent="About us"/>
                        </div>

                    </div>

                </section>

                <div className="hidden md:inline h-full w-1/4">
                    {/* Somente um bloco invisível que divide o layout em dois para facilitar localizar o título mais pra esquerda */}
                </div>

        </>
    )
}

export default MainTitle
