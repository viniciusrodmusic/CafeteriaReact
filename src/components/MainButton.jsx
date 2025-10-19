function MainButton({ bgColor, textColor, textContent }) {

    const btnBgColor = bgColor == "red" ? "bg-red-200" : "bg-0";
    const btnTextColor = textColor == "black" ? "text-black" : "text-white"

    return (
        <button className={
            `${btnBgColor} ${btnTextColor}
            outline-[var(--light-coffee)] 
            outline-1 p-3 rounded-3xl m-5
            font-bold text-[1.5rem]
            hover:text-red-400 cursor-pointer
            shadow-[-5px_5px_30px_black]`
        }>{textContent}</button>
    )

}

export default MainButton