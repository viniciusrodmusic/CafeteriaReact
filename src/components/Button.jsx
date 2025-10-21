function Button({ bgColor, textColor, textContent }) {

    const btnBgColor = bgColor == "red" ? "bg-red-200" : bgColor == "yellow" ? "bg-yellow-300" : "";
    const btnTextColor = textColor == "black" ? "text-black" : "text-white"

    return (
        <button className={
            `${btnBgColor} ${btnTextColor} hover:scale-95 duration-100
            outline-[var(--light-coffee)] 
            outline-1 p-4 rounded-3xl m-5
            font-bold hover:text-red-400 
            text-sm md:text-xl lg:text-2xl cursor-pointer shadow-[-5px_5px_30px_black]
            `
        }>{textContent}</button>
    )

}

export default Button
