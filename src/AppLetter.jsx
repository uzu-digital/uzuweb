import Footer from './components/Footer'
import "transition-style"


function AppLetter() {
  return (
    <>
      <main className='max-w-[1100px] mx-auto'>
        <section className='flex flex-col gap-5 px-10 py-36'>
          <p>A la opinión pública</p>
          <p>Somos Uzu Digital, o Nauka Comunicación Estratégica, nuestro nombre legal
            desde que creamos la empresa. Son casi 10 años de camino en los que nos hemos
            dedicado a la comunicación digital: diseño de estrategias de comunicación y su
            implementación, diseño gráfico, pauta digital, producción audiovisual, manejo de
            redes sociales y muchos servicios más.</p>
          <p>Empezamos como una empresa pequeña en la que todos trabajábamos en todas
            las áreas para aprender y desarrollarnos como profesionales, pero fuimos
            creciendo y nos especializamos en todas las ramas de la publicidad digital.
            Actualmente tenemos casi 100 empleados en tres sedes en el país: Guadalajara,
            Ciudad de México y Monterrey.</p>
          <p>Además de los clientes comerciales con los que hemos trabajado en México,
            Estados Unidos y Canadá, contamos con amplia experiencia en el área política, lo
            cual nos ha requerido mantener nuestro registro en el Padrón de Proveedores del
            Instituto Nacional Electoral vigente y renovado cada año, pues hemos colaborado
            con candidatos a todos los niveles de gobierno: alcaldías, diputaciones locales y
            federales, gubernaturas y la presidencia de la república, en la campaña de Jorge
            Álvarez Máynez por Movimiento Ciudadano. Además de esto hemos laborado con
            gobiernos municipales y estatales y universidades públicas en distintos lugares
            del país.</p>
          <p>En una investigación del INE en 2022, nos buscaron en el domicilio de San Dionisio
            51, Jardines de San Ignacio, en Zapopan, Jalisco, lugar en el que estuvieron
            nuestras oficinas instaladas desde 2016. Desde marzo de 2020 la empresa había
            pasado al trabajo remoto debido a la pandemia por COVID-19 que azotó al mundo.
            Por eso la oficina se encontraba vacía, no recibimos la notificación y nos
            nombraron “posible empresa fantasma”. A finales de 2022 dejamos ese inmueble
            y cambiamos nuestro domicilio fiscal.</p>
          <p>Hoy nuestras oficinas se encuentran en el 2280 de Lerdo de Tejada, en la colonia
            Lafayette, en Guadalajara, espacio que nos sigue viendo crecer gracias al
            talento, esfuerzo y desarrollo profesional de casi una centena de colaboradores.</p>
          <p>Estamos abiertos al diálogo y a responder las preguntas que pudiesen tener sobre
            nosotros, nuestra trayectoria y nuestro trabajo pues lo realizamos con orgullo y
            dedicación.</p>
          <p className='text-end italic'>Arturo Álvarez Amaral <br />Director General y representante legal de Nauka
            Comunicación Estratégica, o Uzu Digital.</p>
        </section>
      </main>
      <Footer isLetter={true} />
    </>
  )
}

export default AppLetter
