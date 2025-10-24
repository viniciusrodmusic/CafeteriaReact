import { useEffect, useState, useRef } from "react"
import Button from "./Button"
import coffee1 from "../assets/coffee1.jpg"
import coffee2 from "../assets/coffee2.jpg"
import coffee3 from "../assets/coffee3.jpg"

function CoffeeOption({coffeeImage, textContent, price}) {

    const coffeeImageUrl = coffeeImage == 3 ? coffee3 : coffeeImage == 2 ? coffee2 : coffeeImage == 1 ? coffee1 : ""

    const containerRef = useRef(null); // Referência ao elemento a ser observado
    const [isVisible, setIsVisible] = useState(false); // Situação de visibilidade do elemento na viewport

    const callbackFunction = (entries) => {
        // Função que determina se o elemento está visível ou não na viewport
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const myObserver = new IntersectionObserver(callbackFunction, { threshold: 0.5 });
        if (containerRef.current) myObserver.observe(containerRef.current);

        return () => {
            if (containerRef.current) myObserver.unobserve(containerRef.current)
        }
    }, [containerRef])



    useState

    return (
        // CONTAINER QUE ABRIGA IMAGEM, DESCRIÇÃO, PREÇO E BOTÃO DE COMPRA
        <section ref={containerRef} className={`
        ${isVisible ? "transform-[translateY(0px)] opacity-100" : "transform-[translateY(50px)] opacity-0"}
        hover:outline-1 hover:shadow-[1px_1px_50px_rgb(255,200,150)] active:shadow-none active:outline-4
        cursor-pointer duration-500 lg:duration-1000 rounded-3xl text-white 
        bg-linear-to-bl from-[var(--dark-coffee)] to-[var(--dark-coffee2)]
        active:to-[var(--dark-coffee2)]/25 flex flex-col items-center justify-around overflow-hidden 
        shadow-[-10px_10px_40px_rgba(0,0,0,0.5)] p-4 w-4/4 sm:h-xl sm:w-sm`}>
            {/* IMAGEM DO CARD */}
            <img src={coffeeImageUrl} className="p-4 rounded-4xl aspect-square h-[40vw] sm:h-64 xl:h-64 object-cover"></img>
            {/* DESCRIÇÃO DO CAFÉ */}
            <p className="text-amber-100 sm:h-24 flex text-center items-center font-bold text-[min(5vw,1.4rem)]">{textContent}</p>

            {/* CONTAINER QUE ABRIGA O PREÇO E O BOTÃO DE COMPRAR */}
            <div className="flex items-center justify-around h-24 w-full whitespace-nowrap">
                <p className="font-['DM_Serif_Display',Arial] text-[min(5vw,2rem)] text-[var(--light-coffee)]">{price}</p>
                <Button bgColor="yellow" textColor="black" textContent="order"/>
            </div>

        </section>
    )

}

export default CoffeeOption