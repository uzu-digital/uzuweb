import React from 'react'

export default function Menu({ menuButton, setMenuButton }) {
  const linksMenu = [
    { name: "Nosotros", link: "#Nosotros" },
    { name: "Servicios", link: "#Servicios" },
    { name: "Clientes", link: "#Clientes" },
    //{ name: "Novedades", link: "#Novedades" },
    { name: "Contacto", link: "#Contacto" }
  ]
  const handleLinks = () => {
    const container = document.getElementById("menu-mobile")
    const classes = container.classList

    const main = document.getElementById("main").classList
    const footer = document.getElementById("Contacto").classList

    if (classes.contains("container-menu-in")) {
      setMenuButton(false)
      classes.add("container-menu-out")
      classes.remove("container-menu-in")
      main.remove("hiddenElement")
      footer.remove("hiddenElement")
    } else if (classes.contains("container-menu-out")) {
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
    <nav id="menu-mobile" className="container-menu-mobile hidden">
      <ul class="flex gap-12 font-bold menu-items">
        {
          linksMenu.map((link, index) => <li key={index}><a onClick={handleLinks} href={link.link}>{link.name}</a></li>)
        }
      </ul>
    </nav>
  )
}
