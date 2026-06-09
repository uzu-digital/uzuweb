import Footer from './components/Footer'
import "transition-style"


function AvisoDePrivacidad() {
  return (
    <>
      <main className='max-w-[1100px] mx-auto'>
        <section className='flex flex-col gap-5 px-10 py-36'>
          <h1 className='font-bold text-xl'>Aviso de privacidad</h1>
          <p>Nauka Comunicación Estratégica S de RL de CV, mejor conocido como Uzu Digital, con domicilio en calle Miguel Lerdo de Tejada #2280 colonia Lafayette, municipio Guadalajara, c.p. 44150, en la entidad de Jalisco, país México, y portal de internet https://uzu.digital/ , es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
          <p>¿Qué datos personales recopilamos y para qué los utilizamos?
            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
          </p>
          <p>Datos de identificación y contacto (Nombre y correo electrónico).</p>
          <p>Datos de plataformas de terceros: Al utilizar nuestra aplicación e iniciar sesión a través de Meta (Facebook Login), recopilamos información de su perfil público (public_profile), listas de páginas de Facebook (pages_show_list), datos de interacción de sus páginas (pages_read_engagement), datos de su cuenta de Instagram Business (instagram_basic), así como estadísticas e información de sus cuentas de anuncios (ads_read, read_insights).</p>
          <p>Finalidades principales del tratamiento:<br />
            Los datos obtenidos a través de las APIs de Meta se utilizarán estrictamente para:</p>
          <p>Autenticar su identidad y permitirle el acceso a las herramientas de nuestra aplicación.</p>
          <p>Analizar el rendimiento, métricas e insights de sus campañas publicitarias y páginas de redes sociales vinculadas.</p>
          <p>Brindarle reportes automatizados y optimización de servicios de marketing digital.</p>
          <p>Finalidades secundarias: <br />
            De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:</p>
          <p>Publicitaria: Para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias de navegación.</p>
          <p>En caso de que no desee que sus datos personales se utilicen para estas finalidades secundarias, indíquelo escribiendo a hola@uzu.digital. La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.</p>
          <p>INSTRUCCIONES PARA LA ELIMINACIÓN DE DATOS DE USUARIO (Meta / Facebook Data Deletion)</p>
          <p>Uzu Digital respeta la privacidad de sus usuarios y proporciona un mecanismo sencillo para solicitar la eliminación de la información recopilada a través de la plataforma de Meta.</p>
          <p>Si desea eliminar sus datos de usuario de nuestra aplicación vinculada a Facebook o Instagram, puede hacerlo siguiendo estos pasos:</p>
          <p>Envíe un correo electrónico a hola@uzu.digital con el asunto "Solicitud de Eliminación de Datos - Meta App".</p>
          <p>En el cuerpo del correo, especifique su nombre completo y el ID de usuario o correo electrónico asociado a la cuenta de Facebook/Instagram con la que inició sesión.</p>
          <p>Una vez recibida la solicitud, nuestro equipo procederá a desvincular sus cuentas y a borrar de forma permanente de nuestros servidores toda la información relacionada con sus páginas, anuncios e insights en un plazo no mayor a 5 días hábiles.</p>
          <p>Le enviaremos un correo de confirmación una vez que el proceso de eliminación haya concluido exitosamente.</p>
        </section>
      </main>
      <Footer isLetter={true} />
    </>
  )
}

export default AvisoDePrivacidad
