import Cobertura from '../assets/Servicios_Coberturas.svg';
import Estrategia from '../assets/Servicios_EstrategiaDigital.svg';
import Fotografia from '../assets/Servicios_Fotografíadeproducto.svg';
import Identidad from '../assets/Servicios_IdentidadG.svg';
import PautaRRS from '../assets/Servicios_PautaRRSS.svg';
import PautaGoogle from '../assets/Servicios_Pautagoogle.svg';

export default function Third() {
    const services = [
        { name: 'Estrategia Digital', image: Estrategia },
        { name: 'Pauta en Redes Sociales', image: PautaRRS },
        { name: 'Pauta campañas de Google Ads', image: PautaGoogle },
        { name: 'Identidad Gráfica', image: Identidad },
        { name: 'Fotografía de producto', image: Fotografia },
        { name: 'Coberturas fotográficas', image: Cobertura }
    ];
    return (
        <section class="bg-[#fafafc]" id='Servicios'>
            <div class="py-[200px]">
                <div class="grid grid-cols-3 justify-items-center max-w-[1400px] gap-y-9 mx-auto font-bold">
                    <div class="flex items-center gap-4">
                        <div class="w-20"><img class="w-full" src={services[0].image} alt="" /></div>
                        <div class="w-[200px]"><p>Estrategia</p><p>Digital</p></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-20"><img class="w-full" src={services[1].image} alt="" /></div>
                        <div class="w-[200px]"><p>Pauta en</p><p>Redes Sociales</p></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-20"><img class="w-full" src={services[2].image} alt="" /></div>
                        <div class="w-[200px]"><p>Pauta campañas</p><p>de Google Ads</p></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-20"><img class="w-full" src={services[3].image} alt="" /></div>
                        <div class="w-[200px]"><p>Identidad</p><p>Gráfica</p></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-20"><img class="w-full" src={services[4].image} alt="" /></div>
                        <div class="w-[200px]"><p>Fotografía</p><p>de producto</p></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-20"><img class="w-full" src={services[5].image} alt="" /></div>
                        <div class="w-[200px]"><p>Coberturas</p><p>fotográficas</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}