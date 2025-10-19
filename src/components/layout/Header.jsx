function Header() {

    const itensMenu = [
        {nome: "Home", href: undefined, iconName: "bi bi-house"},
        {nome: "Menu", href: undefined, iconName: "bi bi-menu-up"},
        {nome: "About us", href: undefined, iconName: "bi bi-info-circle"}
    ]

    return (
        <header className="bg-[var(--light-coffee)] rounded-[30px] flex justify-center sticky top-1">
            <ul className="flex flex-row gap-[20px] justify-center text-[1.5rem] ">
             
            {
                itensMenu.map((item, index) => (

                    <li key={index}>
                        <i className={item.iconName}></i>
                        <a className="pl-2 cursor-pointer hover:text-orange-900 duration-300 hover:text-shadow-[-1px_1px_10px_brown]">{item.nome}</a>
                    </li>) 
                )
            }


            </ul>
        </header>
    )
}

export default Header