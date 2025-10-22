function Header() {

    const itensMenu = [
        {nome: "Home", href: undefined, iconName: "bi bi-house"},
        {nome: "Menu", href: undefined, iconName: "bi bi-menu-up"},
        {nome: "About us", href: undefined, iconName: "bi bi-info-circle"}
    ]

    return (
        <header className="bg-[var(--light-coffee)] rounded-2xl flex justify-center z-10 sticky top-1">
            <ul className="flex flex-row gap-4 justify-center sm:text-xl xl:text-2xl ">
             
            {
                itensMenu.map((item, index) => (

                    <li key={index}>
                        <i className={item.iconName}></i>
                        <a className="pl-2 cursor-pointer  hover:text-orange-900 active:text-orange-900 active:text-shadow-[1px_1px_10px_black] hover:text-shadow-[1px_1px_20px_red] duration-300">{item.nome}</a>
                    </li>) 
                )
            }


            </ul>
        </header>
    )
}

export default Header