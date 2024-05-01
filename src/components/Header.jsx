import { useState } from "react"
import UzuLogo from "../assets/UZU_Logo.svg"

export default function Header({menuButton, setMenuButton}) {
    const linksMenu = [
        { name: "Nosotros", link: "#Nosotros" },
        { name: "Servicios", link: "#Servicios" },
        { name: "Clientes", link: "#Clientes" },
        //{ name: "Novedades", link: "#Novedades" },
        { name: "Contacto", link: "#Contacto" }
    ]
    
    // Array to iterate 3 times for the menu lines icon. IGNORE IT
    const menu = [1,1,1]

    // Menu animation
    const open = () => {
        const container = document.getElementById("menu-mobile")
        const classes = container.classList

        const main = document.getElementById("main").classList
        const footer = document.getElementById("Contacto").classList
        
        if(classes.contains("container-menu-in")) {
            setMenuButton(false)
            classes.add("container-menu-out")
            classes.remove("container-menu-in")
            main.remove("hiddenElement")
            footer.remove("hiddenElement")
        } else if(classes.contains("container-menu-out")) {
            setMenuButton(true)
            classes.add("container-menu-in")
            classes.remove("container-menu-out")
            main.add("hiddenElement")
            footer.add("hiddenElement")
        } else {
            setMenuButton(true)
            classes.add("container-menu-in")
            main.add("hiddenElement")
            footer.add("hiddenElement")
        }
    }
    
    return (
        <header className="sticky top-0 z-[11] bg-white">
            <div class="flex items-center max-w-[1100px] mx-auto py-7 px-12 justify-between">
                <div class="w-36 relative z-20">
                    <img class="w-full" src={UzuLogo} alt="" />
                </div>
                <div className="hidden max-[900px]:block relative z-20">
                    <button className="flex flex-col gap-1 w-8" onClick={open}>
                        {
                            !menuButton ? menu.map(() => (
                                <div className="h-1 w-full bg-black rounded-lg"></div>
                            ))
                            : ""
                        }
                        {
                            menuButton ? menu.map(() => (
                                <div className="h-1 w-full bg-[#01C2EC] rounded-lg"></div>
                            ))
                            : ""
                        }
                    </button>
                </div>
                <nav id="menu" className="container-menu">
                    <ul class="flex gap-12 font-bold menu-items">
                    {
                        linksMenu.map((link, index) => <li key={index}><a href={link.link}>{link.name}</a></li>)
                    }
                    </ul>
                </nav>
            </div>
        </header>
    )
}