import Flicking, {ViewportSlot} from "@egjs/react-flicking";
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

export default function Fourth() {
    const clients = [
        {img: ACE},
        {img: DOT},
        {img: ElCielo},
        {img: Habitat},
        {img: P7},
        {img: Qin},
        {img: ZAP},
    ]
    const _plugins = [new Arrow()]
    return (
        <section className="bg-[#f3f3f3]" id="Clientes">
            <div className="max-w-[1450px] mx-auto py-12">
                <div className="">
                    <h2 className="font-bold text-[3rem]">Clientes</h2>
                </div>
                <div>
                    <Flicking
                        defaultIndex={0}
                        align="prev"
                        panelsPerView={3}
                        circular={true}
                        plugins={_plugins}
                    >
                        {
                            clients.map((client, index) => <div key={index} className="panel flex items-center justify-center"><img className="w-[16rem]" src={client.img} alt="" /></div> )
                        }
                        <ViewportSlot>
                            <span className="flicking-arrow-prev"></span>
                            <span className="flicking-arrow-next"></span>
                        </ViewportSlot>
                    </Flicking>
                </div>
            </div>
        </section>
    )
}