import React from 'react'
import Facebok from "../assets/Facebook.svg"
import X from "../assets/X.svg"
import Instagram from "../assets/Instagram.svg"

export default function Footer() {
    const social = [
        {
            title: "Facebook",
            img: Facebok,
            link: "https://www.facebook.com/uzu.digital"
        },
        {
            title: "X",
            img: X,
            link: "https://twitter.com/uzudigital"
        },
        {
            title: "Instagram",
            img: Instagram,
            link: "https://www.instagram.com/uzu.digital/"
        }
    ]
  return (
    <footer className='bg-black text-white' id='Contacto'>
        <div className='max-w-[1450px] mx-auto pt-16 pb-8'>
            <div>
                <h2 className='font-black text-[8rem]'>Contacto</h2>
            </div>
            <div className='px-[260px] pb-32 pt-12'>
                <form method="post" className='flex flex-col gap-5'>
                    <div className='relative'>
                        <input className='input-form' type="text" name="" id="" required/>
                        <label htmlFor="name" className='float-label'>Nombre</label>
                        <div className='bar-dow-input'></div>
                    </div>
                    <div className='relative'>
                        <input className='input-form' type="email" name="email" id="email" required />
                        <label htmlFor="email" className='float-label'>Email</label>
                        <div className='bar-dow-input'></div>
                    </div> 
                    <div className='relative'>
                        <input className='input-form' type="tel" name="tel" id="tel" required />
                        <label className='float-label' htmlFor="tel">Teléfono</label>
                        <div className='bar-dow-input'></div>
                    </div>
                    <div className='relative'>
                        <textarea required className='text-area-form' name="message" id="message" cols="30" rows="3"></textarea>
                        <label className='float-label' htmlFor="message">Mensaje</label>
                        <div className='bar-dow-input'></div>
                    </div>
                    <div className='grid justify-center mt-16'>
                        <button className='bg-[#00cbd8] hover:bg-[#00c4ed] text-[#fafafc] px-14 py-2 rounded-full text-[1.3rem] transition-colors'>Enviar</button>
                    </div>
                </form>
            </div>
            <div className='flex justify-between text-[1.4rem]'>
                <p>hola@uzu.digital</p>
                <p>33 2304 3734</p>
                <div className='flex'>
                    {
                        social.map((e, index) => (
                            <a key={index} title={e.title} target='_blank' href="">
                                <img className='w-8' src={e.img} alt="" />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    </footer>
  )
}
