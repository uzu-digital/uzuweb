import React, { useState } from 'react'
import Facebok from "../assets/Facebook.svg"
import X from "../assets/X.svg"
import Instagram from "../assets/Instagram.svg"
import { useForm } from 'react-hook-form'
import ReCAPTCHA from "react-google-recaptcha"
import axios from "axios"

export default function Footer({ isLetter }) {
    const [send, setSend] = useState(false)
    const [response, setResponse] = useState(undefined)
    const [captchaHandler, setCaptchaHandler] = useState(false)

    const social = [
        {
            title: "Facebook",
            img: Facebok,
            link: "https://www.facebook.com/uzumx"
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

    // Form behavior
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ shouldUseNativeValidation: true })
    const reCaptcha = value => {
        setValue("reCaptcha", value)
    }

    const sendValues = async (values) => {
        try {
            const responseEmail = await axios.post(`https://uzu.digital/hello.php?name=${values.name}&tel=${values.tel}&message=${values.message}&email=${values.email}`)
            setResponse(responseEmail.data)
            setSend(false)
        } catch {
            console.log(response)
        }
    }


    return (
        <footer className='bg-black text-white' id='Contacto'>
            <div className='max-w-[1450px] mx-auto py-16 px-4'>
                {
                    !isLetter ? (
                    <div>
                        <h2 className='font-black text-[8rem]'>Contacto</h2>
                    </div>)
                : ""
                }
                {
                    !isLetter ? (
                        <div className='px-[260px] pb-32 pt-12'>
                            <form onSubmit={handleSubmit((values) => {
                                if (values.reCaptcha) {
                                    setSend(true)
                                    sendValues(values)
                                    setCaptchaHandler(false)
                                } else {
                                    setCaptchaHandler(true)
                                }
                            })} method="post" className='flex flex-col gap-10'>
                                {
                                    captchaHandler ?
                                        <div className='bg-red-500 text-white w-full p-2 rounded-md font-bold'>
                                            ¡Resuelva el captcha antes de enviar!
                                        </div>
                                        : ""
                                }
                                {
                                    response ?
                                        <div className='bg-green-500 text-white w-full p-2 rounded-md font-bold'>
                                            ¡Formulario enviado con éxito!
                                        </div>
                                        : ""
                                }
                                <div className='relative'>
                                    <input {...register("name", { required: true })} className='input-form' type="text" name="name" id="name" />
                                    <label htmlFor="name" className='float-label'>Nombre</label>
                                    <div className='bar-dow-input'></div>
                                    {
                                        errors.name && (
                                            <p className='text-red-500 absolute text-[0.8rem] pt-2'>Introduce un nombre válido</p>
                                        )
                                    }
                                </div>
                                <div className='relative'>
                                    <input {...register("email", { required: true })} className='input-form' type="email" name="email" id="email" />
                                    <label htmlFor="email" className='float-label'>Email</label>
                                    <div className='bar-dow-input'></div>
                                    {
                                        errors.email && (
                                            <p className='text-red-500 absolute text-[0.8rem] pt-2'>Introduce un email válido</p>
                                        )
                                    }
                                </div>
                                <div className='relative'>
                                    <input maxLength={11} {...register("tel", { required: true })} className='input-form' type="tel" name="tel" id="tel" />
                                    <label className='float-label' htmlFor="tel">Teléfono</label>
                                    <div className='bar-dow-input'></div>
                                    {
                                        errors.tel && (
                                            <p className='text-red-500 absolute text-[0.8rem] pt-2'>Introduce un número válido</p>
                                        )
                                    }
                                </div>
                                <div className='relative'>
                                    <textarea {...register("message", { required: true })} className='text-area-form' name="message" id="message" cols="30" rows="3"></textarea>
                                    <label className='float-label' htmlFor="message">Mensaje</label>
                                    <div className='bar-dow-input'></div>
                                    {
                                        errors.message && (
                                            <p className='text-red-500 absolute text-[0.8rem] pt-2'>Introduce un mensaje válido</p>
                                        )
                                    }
                                </div>
                                <div>
                                    <ReCAPTCHA sitekey='6Lf3t5cpAAAAAPDMzuRqii0jQP_4GecWP6zp7Kkf' {...register("reCaptcha")} onChange={reCaptcha} />
                                </div>
                                <div className='grid justify-center mt-16'>
                                    {
                                        !send ?
                                            <button className='bg-[#00cbd8] hover:bg-[#00c4ed] text-[#fafafc] px-14 py-2 rounded-full text-[1.3rem] transition-colors'>Enviar</button>
                                            :
                                            <button disabled className='bg-gray-500 text-[#fafafc] px-14 py-2 rounded-full text-[1.3rem] transition-colors'>Enviando información...</button>
                                    }

                                </div>

                            </form>
                        </div>
                    )
                        : ""
                }

                <div className='flex justify-between items-center text-[1.4rem]'>
                    <div>
                        <a className='text-[0.8rem]' href="/nauka-comunicacion-estrategica.html">Nauka Comunicación Estratégica S de RL de CV</a>
                        <p>hola@uzu.digital</p>
                    </div>
                    <p>33 4524 8030</p>
                    <div className='flex'>
                        {
                            social.map((e, index) => (
                                <a key={index} title={e.title} target='_blank' href={e.link}>
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
