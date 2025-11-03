function Header() {

    const itensMenu = [
        {nome: "Home", href: "#home", iconName: "bi bi-house"},
        {nome: "Menu", href: "#menu", iconName: "bi bi-menu-up"},
        {nome: "About us", href: "#about-us", iconName: "bi bi-info-circle"}
    ]

    return (
        <header className="bg-amber-100/50 flex justify-center z-10 fixed top-0 p-2 w-full">
            <ul className="flex flex-row gap-4 justify-center text-1xl sm:text-2xl">
             
            {
                itensMenu.map((item, index) => (

                    <li key={index}>
                        <i className={item.iconName}></i>
                        <a href={item.href} className="pl-2 cursor-pointer  hover:text-amber-500 active:text-amber-100 hover:scale-125 active:text-shadow-[1px_1px_10px_black] hover:text-shadow-[1px_1px_20px_red] duration-300">{item.nome}</a>
                    </li>) 
                )
            }


            </ul>
        </header>
    )
}

export default Header