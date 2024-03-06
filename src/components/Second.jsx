import SecondPart from "../assets/UZU_Somos.png"

export default function Second() {
    return (
        <section class="bg-white max-h-[480px] flex items-center" id="Nosotros">
            <div class="grid grid-cols-2 items-center max-w-[2000px] mx-auto">
                <div class=" pl-56">
                    <h2 class="font-bold text-[3rem]">Somos <span class="font-black italic">UZU Digital</span></h2>
                    <p class="font-normal text-[1.2rem] max-w-[580px]">
                        Nos especializamos en traducir la escencia de nuestros clientes en mensajes publicitarios que lleguen de manera directa a su público meta.
                    </p>
                </div>
                <div class="flex justify-end w-full pt-[100px]">
                    <img class="" src={SecondPart} alt="" />
                </div>
            </div>
        </section>
    )
}