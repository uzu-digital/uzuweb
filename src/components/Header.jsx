import UzuLogo from "../assets/UZU_Logo.svg"

export default function Header() {
    const linksMenu = [
        { name: "Nosotros", link: "#Nosotros" },
        { name: "Servicios", link: "#Servicios" },
        { name: "Clientes", link: "#Clientes" },
        { name: "Novedades", link: "#Novedades" },
        { name: "Contacto", link: "#Contacto" }
    ]
    return (
        <header>
            <div class="flex items-center max-w-[1100px] mx-auto py-7 px-12 justify-between">
                <div class="w-36">
                    <img class="w-full" src={UzuLogo} alt="" />
                </div>
                <nav>
                    <ul class="flex gap-12 font-bold">
                    {
                        linksMenu.map((link, index) => <li key={index}><a href={link.link}>{link.name}</a></li>)
                    }
                    </ul>
                </nav>
            </div>
        </header>
    )
}