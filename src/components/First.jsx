import Contact from "../assets/BotonContactanos.svg"

export default function First() {
    return (
        <section className="banner relative overflow-hidden z-10">
            <div className="flex flex-col items-center py-16 relative z-10">
                <h1 className="text-[100px] text-center max-w-[850px] leading-[6rem] flex flex-col items-center relative z-20">
                    <div>Nos</div>
                    <div>especializamos</div>
                    <div className="flex gap-2 items-center">en <div className="bg-[#01C2EC] px-3 rounded-full w-fit font-black italic relative z-0 flex flex-col h-[77px] justify-end">comunicación</div></div>
                    <div className="flex items-center"><div className="bg-[#01CAD9] px-3 rounded-full w-fit font-black italic mt-0 flex h-[80px] justify-end items-end">digital</div></div>
                </h1>
                <div className="absolute w-full border-moveL top-[55%] h-1 z-10"></div>
                <div className="absolute w-full border-moveR top-[55%] left-[-100%] h-1 z-10"></div>
                <div className="w-40 pt-12 contact-button">
                    <a href="#Contacto" rel="noopener noreferrer">
                        <img className="w-full" src={Contact} alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
}