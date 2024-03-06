import React from 'react'

export default function Fifth() {
    const data = [
        {
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacinia mauris, eget condimentum purus. Nullam et eros bibendum, placerat"
        },
        {
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacinia mauris, eget condimentum purus. Nullam et eros bibendum, placerat"
        },
        {
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacinia mauris, eget condimentum purus. Nullam et eros bibendum, placerat"
        }
    ]
    return (
        <section className='bg-[#fafafc]' id='Novedades'>
            <div className='max-w-[1450px] mx-auto py-[100px]'>
                <div className='mb-[60px]'>
                    <h2 className='font-bold text-[3rem]'>Novedades</h2>
                </div>
                <div className='grid grid-cols-3 gap-32'>
                    {
                        data.map((e, index) => (
                            <div key={index} className='bg-white px-4 py-6 shadow-xl rounded-lg'>
                                <div className='w-full h-[250px]'></div>
                                <div className='mb-1'>
                                    <h3 className='font-bold text-[#00c4ed] text-[1.2rem]'>{e.title}</h3>
                                </div>
                                <div>
                                    <p className='text-[1.1rem]'>{e.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='grid justify-center mt-28'>
                    <button className='bg-[#00cbd8] hover:bg-[#00c4ed] text-[#fafafc] px-10 py-2 rounded-full text-[1.3rem] transition-colors'>Leer más</button>
                </div>
            </div>
        </section>
    )
}
