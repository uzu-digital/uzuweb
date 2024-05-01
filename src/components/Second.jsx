import SecondPart from "../assets/UZU_Somos.png"

export default function Second() {
    return (
        <section class="bg-white max-w-[1440px] mx-auto" id="Nosotros">
            <div class="flex items-center max-h-[380px] gap-x-5 container-nosotros">
                <div class="pl-10">
                    <h2 class="font-bold text-[3rem]">Somos <span class="font-black italic">UZU Digital</span></h2>
                    <p class="font-normal text-[1.2rem] max-w-[700px]">
                        Nos especializamos en traducir la escencia de nuestros clientes en mensajes publicitarios que lleguen de manera directa a su público meta.
                    </p>
                </div>
                <div class="flex justify-end w-full mt-6">
                    <img class="w-[750px]" src={SecondPart} alt="" />
                </div>
            </div>
        </section>
    )
}