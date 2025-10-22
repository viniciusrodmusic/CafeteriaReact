function Button({ bgColor, textColor, textContent }) {

    const btnBgColor = bgColor == "red" ? "bg-red-200" : bgColor == "yellow" ? "bg-yellow-300" : "";
    const btnTextColor = textColor == "black" ? "text-black" : "text-white"

    return (
        <button className={
            `${btnBgColor} ${btnTextColor}
            duration-20 lg:duration-200 ease-in-out
            outline-[var(--light-coffee)] 
            outline-1 p-4 rounded-3xl m-5
            font-bold text-sm 
            md:text-xl lg:text-2xl 
            cursor-pointer shadow-[-5px_5px_30px_black]
            hover:scale-95 hover:text-red-400 
            active:outline-4 active:text-red-400
            active:scale-95 active:shadow-[1px_1px_10px_black]
            `
        }>{textContent}</button>
    )

}

export default Button
