import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Pagination, Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/arrow.css";

import ACE from "../assets/Clientes-ACE.svg"
import DOT from "../assets/Clientes-DOT.svg"
import ElCielo from "../assets/Clientes-ElCielo.svg"
import Habitat from "../assets/Clientes-Habitat.svg"
import P7 from "../assets/Clientes-P7.svg"
import Qin from "../assets/Clientes-Qin.svg"
import ZAP from "../assets/Clientes-ZAP.svg"
import { useEffect, useState } from "react";

export default function Fourth() {
    const [elementsPerView, setElementsPerView] = useState(3)
    const clients = [
        { img: ACE },
        { img: DOT },
        { img: ElCielo },
        { img: Habitat },
        { img: P7 },
        { img: Qin },
        { img: ZAP },
    ]
    const _plugins = [new Arrow()]

    const changeToThree = () => {
        const arrowL = document.getElementById("left-arrow").classList
        const arrowR = document.getElementById("right-arrow").classList
        if(arrowL.length > 1) {
            arrowL.remove("hiddenElement")
            arrowR.remove("hiddenElement")
        }
        setElementsPerView(3)
    }

    const changeToTwo = () => {
        const arrowL = document.getElementById("left-arrow").classList
        const arrowR = document.getElementById("right-arrow").classList
        arrowL.add("hiddenElement")
        arrowR.add("hiddenElement")
        setElementsPerView(2)
    }

    window.addEventListener("resize", () => {
        window.innerWidth > 900 ? changeToThree() : changeToTwo()
    })

    useEffect(() => {
        window.innerWidth > 900 ? changeToThree() : changeToTwo()
    }, [])


    
    return (
        <section className="bg-[#f3f3f3]" id="Clientes">
            <div className="max-w-[1450px] mx-auto py-12 px-4">
                <div className="">
                    <h2 className="font-bold text-[3rem]">Clientes</h2>
                </div>
                <div>
                    <Flicking
                        defaultIndex={0}
                        align="prev"
                        panelsPerView={elementsPerView}
                        circular={true}
                        plugins={_plugins}
                    >
                        {
                            clients.map((client, index) => <div key={index} className="panel flex items-center justify-center"><img className="w-[16rem]" src={client.img} alt="" /></div>)
                        }
                        <ViewportSlot>
                            <span id="left-arrow" className="flicking-arrow-prev"></span>
                            <span id="right-arrow" className="flicking-arrow-next"></span>
                        </ViewportSlot>
                    </Flicking>
                </div>
            </div>
        </section>
    )
}