import Accordion from "../components/Accordion.component"
import cvEjemplo1 from '../assets/cvEjemplo1.jpg'
import cvEjemplo2 from '../assets/cvEjemplo2.jpg'
import cvEjemplo3 from '../assets/cvEjemplo3.jpeg'
// import ModeloDeCurriculumVitae from '../assets/modelosDeCurriculumVitae.docx'
import ModeloDeCurriculumVitae from '../assets/ModeloDeCurriculumVitae.pdf'

//INFO SOBRE LA PAGINA
export const accordionData1Slide1 = {
    title: "Registro de usuario",
    orden: "One",
    itemList: [
        "Debes completar un registro de usuario con los siguientes datos, Nombre de usuario, email, contraseña y fecha de nacimiento.",
        "Luego de eso podras acceder al login, con la posibilidad de recordar tus credenciales al seleccionar dicha opción.",
        "¿Olvidaste tu contraseña?... ¡No te preocupes! simplemente ingresa tu correo con el que estas registrado y reestableceremos tu contraseña, te enviaremos un correo con la infomación para poder volver a acceder.",
    ]
}
export const accordionData2Slide1 = {
    title: "¿Como funcionan los roles?",
    orden: "Two",
    itemList: [
        "Postulantes: Son los usuarios que estan buscando trabajo, tendras la opción de darte a conocer brindando infomación sobre ti en tu perfil, asi como acceder a todas las funcionalidades de la plataforma.",
        "Empleadores: Son aquellos usuarios que buscan dar trabajo y conseguir empleados para sus emprendimientos. Tambien contaras con acceso a la mayoria de las funcionalidades con pequeñas diferencias.",
        "Particulares: Este rol es el que menos opciones tiene en comparación. Es principalmente para los que tienen curiosidad por la plataforma.",
    ]
}

export const accordionData3Slide1 = {
    title: "Personalizacion del perfil",
    orden: "Three",
    itemList: [
        "Dependiendo de tu rol esto variara un poco, tendras más o menos campos para personalizar tu perfil personal.",
        "Ningun campo es obligatorio, pero ten en cuenta que cuanto mas completo este tu perfil, más interesante resultara para otros usuarios.",
        "Podras brindar información sobre, asi como una descripción y contacto. Ademas de una foto de perfil.",
    ]
}

export const accordionData4Slide1 = {
    title: "Subida de archivos",
    orden: "Four",
    itemList: [
        "Tendras la posibilidad de subir archivos que complementen tu perfil, como tu curriculum, tu portafolio, etc.",
        "Podras subir archivos de distintos tipos, tales como .docx, .pdf, .xlsx, .pptx, e imagenes de distintos formatos.",
        "También podras eliminarlas en cualquier momento, pero no podras recuperarlas.",
    ]
}

export const accordionData5Slide1 = {
    title: "Creacion de Posteos",
    orden: "Five",
    itemList: [
        "Los posteos son la principal forma de darte a conocer, ya que estos aparecen en la pantalla principal de la plataforma",
        "Los mismos deben tener un título y un cuerpo. Además de opcionalmente incluir una imagén.",
        "Los posteos pueden ser eliminados desde tu perfil, donde además veras todos los posteos que hayas hecho.",
        "No podras crear un posteo hasta que no hayas elegido un rubro y una ubicación.",
        "Los posteos tienen un icono representativo de su rubro",
    ]
}

export const accordionData6Slide1 = {
    title: "Sala de chat",
    orden: "Six",
    itemList: [
        "Podras entrar a una sala de chat global con todos los usuarios de nuestra plataforma, podras ver quienes estan en la sala y enviar mensajes privados. (proximamente)",
        "¡Recuerda ser amable con todos los demas!",
    ]
}

export const accordionData7Slide1 = {
    title: "Notificaciones",
    orden: "Seven",
    itemList: [
        "El icono de la campana se volvera amarilla en caso de que tengas alguna notificacion.",
        "Aquí podras ver cuando alguien haya intentado contactar contigo (proximamente).",
        "Si tu contraseña a sido reestablecida entonces se te mostrara un mensaje pidiendote que cambien la contraseña por defecto",
    ]
}

export const accordionData8Slide1 = {
    title: "Filtros de busqueda de posteos",
    orden: "Eight",
    itemList: [
        "Los posteos pueden filtrarse segun los rangos de edad de los usuarios, sus ubicaciones, sus rubros y roles.",
        "Los filtros no pueden combinarse.(de momento)",
        "Si deseas quitar los filtros entonces simplemente oprime el boton 'Quitar filtros'.",
    ]
}

export const accordionData9Slide1 = {
    title: "Busqueda de usuarios",
    orden: "Nine",
    itemList: [
        "Si conoces el nombre de usuario de otro usuario, puedes buscarlo en la barra de busqueda escribiendo su nombre. Se mostrara una barra de resultados aproximados.",
        "Si quieres ver sus perfiles simplemente presiona su nombre en los resultados y seras redirigido."
    ]
}

export const accordionData10Slide1 = {
    title: "Otras detalles y funcionalidades",
    orden: "Ten",
    itemList: [
        "Si deseas volver al inicio puedes presionar el logo de la plataforma en la esquina superior izquierda. 'Job Unite' y seras redirigido al inicio.",
        "Si deseas ver tu perfil, debes presionar tu imagen en la esquina superior derecha y se despliegara un menu de opciones. También podras cerrar tu sesión desde ahí.",
        "Si deseas comunicarte con nuestro equipo de soporte, puedes presionar el correo de soporte en la parte inferior y escribirnos tus inquietudes. ¡Nos comunicaremos contigo lo antes posible!",
        "El proceso de eliminar tu cuenta es irreversible, si deseas borrar tu cuenta, deberas presionar el boton 'Eliminar cuenta' en tu perfil.",
        "Puedes seguir a otros usuarios, de ese modo puedes interactuar con ellos de manera privada, además de dejarles una calificación. (proximamente)",
        "Si precionas sobre el nombre de un usuarios en un posteos o en la barra de sugeridos, seras redirigido a su perfil.",
        "Las sesiones duran una hora, pasado ese tiempo deberas volver a iniciar sesión.",
    ]
}

//PORQUE CONTRATAR EMPLEADOS SIN EXPERIENCIA
export const accordionData1Slide2 = {
    title: "Demuestran mayor entusiasmo y motivación",
    orden: "One",
    itemList: [
        "Como en todo negocio o empresa, las personas que ingresan desde cero a una nueva oportunidad, llegan con mucha emoción y motivación para dar lo mejor de ellos.",
        "Desde la productividad y actitud, que pueden hacer una gran diferencia y a la par contagiar a los demás.",
        "Estas personas buscan todas las maneras de cumplir con los objetivos, lo que significa un mayor esfuerzo y dedicación para realizar las operaciones.",
    ],
}

export const accordionData2Slide2 = {
    title: "Dispuestos a aprender",
    orden: "Two",
    itemList: [
        "En algunas ocasiones, profesionales con larga carrera no les parece buena idea seguir capacitándose o actualizarse de nuevas tecnologías o metodologías que puedan mejorar su labor de venta o instalación de paneles solares.",
        "Por otra parte, quiénes comienzan en el sector tienen una mayor  predisposición de aprender desde prácticas antiguas o tradicionales hasta nuevas innovaciones que cambian el mundo del sector fotovoltaico."
    ],
}

export const accordionData3Slide2 = {
    title: "Mayor flexibilidad",
    orden: "Tree",
    itemList: [
        "Las personas que inician en el medio, suelen ser más abiertos al momento de realizar diferentes roles dentro de la empresa.",
        "Están dispuestos a comenzar desde cero para tener la oportunidad de crecer dentro de la empresa."
    ],
}

export const accordionData4Slide2 = {
    title: "Proponen nuevas ideas",
    orden: "Four",
    itemList: [
        "Contratar a personal sin experiencia a diferencia de lo que se cree que no son capaces de aportar nada, estas personas ingresan con muchas nuevas ideas y experiencias diferentes que podrían aportar una nueva perspectiva a tu empresa."
    ],
}

export const accordionData5Slide2 = {
    title: "Ahorro de costes",
    orden: "Five",
    itemList: [
        "Como bien sabemos, una persona con amplia experiencia y conocimiento en un sector, puede cobrar una gran suma por sus honorarios.",
        "En cambio, con una persona que se inicia en este mercado, el coste puede ser mucho menor al menos al principio."
    ],
}

//PREGUNTAS DE EMPLEADOS
export const accordionData1Slide3 = {
    title: "¿Qué debo llevar a la entrevista?",
    orden: "One",
    itemList: [
        "Prepararse adecuadamente para una entrevista es crucial para causar una buena impresión. Por ellos, es recomendable que lleves cosas como copias de tu currículum, documentos de identificación, información de contacto, referencias laborales, certificados académicos, portafolio(muestras de tu trabajo), etc.",
    ],
}

export const accordionData2Slide3 = {
    title: "¿Cómo debo vestirme?",
    orden: "Two",
    itemList: [
        "La elección de la vestimenta adecuada para generar una buena impresión es importante.",
        "Para entornos más formales (finanzas o empresariales), opta por un traje o conjunto de negocios. Los hombres pueden usar un traje oscuro con corbata, y las mujeres pueden usar un traje o un vestido de negocios.",
        "Para entornos más informales (tecnología, startups), puedes optar por un atuendo de negocios casuales. Esto podría ser pantalones de vestir y una camisa para hombres, o un vestido o blusa y pantalones para mujeres.",
        "Limita los accesorios para evitar distracciones. Usa joyería discreta y evita llevar demasiados accesorios llamativos.",
        "Presta atención a la higiene personal. Asegúrate de que tu ropa esté limpia y planchada. Mantén el cabello y las uñas bien cuidados.",
        "Opta por colores neutros y sólidos. Evita patrones llamativos o colores brillantes que puedan distraer.",
    ],
}

export const accordionData3Slide3 = {
    title: "¿Qué puedo esperar durante la entrevista?",
    orden: "Tree",
    itemList: [
        "Durante una entrevista de trabajo, puedes esperar una serie de preguntas y situaciones diseñadas para evaluar tus habilidades, experiencia, personalidad y idoneidad para el puesto. Algunas preguntas podrian estar relacionadas a las siguientes tematicas:",
        "Preguntas sobre tu currículum",
        "Presentación de tus habilidades prácticas",
        "Preguntas de comportamiento",
        "¿Cuáles son tus habilidades",
        "¿Cuáles son tus metas y motivaciones?",
        "Ponerte en un escenario hipotético y hacerte preguntas sobre el mismo",
    ],
}

export const accordionData4Slide3 = {
    title: "¿Cómo debo comportarme en una entrevista?",
    orden: "Four",
    itemList: [
        "Es normal que existan nervios en esta situación, pero existen ciertos puntos a tener en cuenta para sobrellevar esto, tales como:",
        "Tener una idea previa de que es lo que vas a decir, habiendo investigado un poco previamente los intereses de la empresa y sabiendo los puntos que quieres tocar",
        "Anticípate a preguntas difíciles y prepárate para responderlas de manera positiva",
        "Mantener un lenguaje corporal positivo y seguro, manteniendo el contacto visual y evitando distracciones o gestos nerviosos.",
        "Escucha atentamente las preguntas del entrevistador y responde de manera clara y específica.",
        "Evita dar respuestas demasiado largas o cortas, se claro y conciso",
        "Utiliza un lenguaje apropiado, evita el uso de jergas",
        "Muestra entusiasmo y motivación al entrevistador",
        "Haz preguntas al final de la entrevista, demostrando interes en el puesto.",
        "Termina la entrevista agradeciendo al entrevistador por su tiempo y pregunta sobre los proximos pasos.",
    ],
}

export const accordionData5Slide3 = {
    title: "¿Qué preguntas puedo hacer?",
    orden: "Five",
    itemList: [
        "Hacer preguntas durante una entrevista no solo demuestra tu interés en la posición, sino que también te proporciona información valiosa. Algunas preguntas que podrias hacer son:",
        "¿Cuáles son las responsabilidades de este puesto?",
        " ¿Cuáles son las expectativas en cuanto a horas de trabajo y disponibilidad?",
        "¿Cuál es la cultura y valores de la empresa?",
        "¿Cómo es el equipo con el que trabajaré?",
        "¿Cómo es el proceso de entrenamiento para este puesto?",
        "¿Hay oportunidades de capacitación?",
        "¿Cuál es la estructura de la empresa?",
        "¿Qué beneficios ofrece la empresa?",
        "¿Cuándo podré empezar?",
        "¿Ofrecen programas de bienestar o beneficios para los empleados?",
        "¿Cuál es la visión a corto y largo plazo de la empresa y cómo se alinea este puesto con esa visión?",
    ],
}

export const accordionData6Slide3 = {
    title: "¿Cómo elaboro mi curriculum?",
    orden: "Six",
    itemList: [
        "Muchos nos hacemos esta pregunta en un principio y puede parecer algo muy complicado, pero debes saber que hay ciertos puntos que comunmente se incluyen. Tales como:",
        "Información personal: nombre completo, correo, fecha de nacimiento, genero, nacionalidad, estado civil, etc.",
        "Perfil laboral: experiencia laboral, estudios realizados, habilidades clave, etc.",
        "Experiencia laboral: estudios realizados, trabajos previos, etc.",
        "Educación: Detalla tus logros educativos, certificaciones, distinciones, etc.",
        "Referencias: En caso de ser necesario, incluye recomendaciones que hayas recibido de otras personas.",
    ],
}
//PREGUNTAS DE EMPLEADORES

export const accordionData1Slide4 = {
    title: "Experiencia y habilidades",
    orden: "One",
    itemList: [
        "¿Cuál es tu experiencia laboral relevante para este puesto?",
        "¿Cuáles son tus habilidades clave para este trabajo?",
        "¿Puedes proporcionar ejemplos específicos de proyectos en los que hayas trabajado anteriormente?",
    ],
}
export const accordionData2Slide4 = {
    title: "Gestión del tiempo",
    orden: "Two",
    itemList: [
        "¿Cómo priorizas y gestionas tu tiempo para cumplir con plazos?",
        "¿Cómo manejas situaciones de trabajo bajo presión?",
    ],
}
export const accordionData3Slide4 = {
    title: "Adaptabilidad y resolución de problemas",
    orden: "Three",
    itemList: [
        "¿Cómo te adaptas a los cambios en el entorno laboral?",
        "Cuentame sobre algún desafio por el cual hayas pasado antes y como lo afrontaste"
    ],
}
export const accordionData4Slide4 = {
    title: "Trabajo en equipo y colaboración",
    orden: "Four",
    itemList: [
        "¿Cómo te integras en un equipo de trabajo?",
        "¿Tienes experiencias en el trabajo en equipo?",
    ],
}
export const accordionData5Slide4 = {
    title: "Motivación y metas",
    orden: "Five",
    itemList: [
        "¿Qué te motiva a trabajar en querer trabajar con nosotros?",
        "¿Dónde te ves profesionalmente en cinco años?",
    ],
}

export const accordionData6Slide4 = {
    title: "Autogestión y organización",
    orden: "Six",
    itemList: [
        "¿Cómo te organizas para cumplir con tus plazos y entregables?",
        "¿Cómo estableces y sigues tus propias metas de trabajo?",
    ],
}

export const accordionData7Slide4 = {
    title: "Habilidades técnicas y actualización",
    orden: "Seven",
    itemList: [
        "¿Cómo te mantienes actualizado/a en tus habilidades y conocimientos?",
        "¿Has realizado alguna capacitación o curso recientemente?",
    ],
}


// SLIDES PARA RENDERIZAR
export const slideData1 = {
    title: '¿Cómo funciona nuesta plataforma?',
    subtitle: 'Las posibilidades que ofrecemos a nuestros usuarios son las siguientes:',
    listItems: [
        <Accordion
            title={accordionData1Slide1.title}
            orden={accordionData1Slide1.orden}
            itemList={accordionData1Slide1.itemList}
        />,

        <Accordion
            title={accordionData2Slide1.title}
            orden={accordionData2Slide1.orden}
            itemList={accordionData2Slide1.itemList}
        />,

        <Accordion
            title={accordionData3Slide1.title}
            orden={accordionData3Slide1.orden}
            itemList={accordionData3Slide1.itemList}
        />,

        <Accordion
            title={accordionData4Slide1.title}
            orden={accordionData4Slide1.orden}
            itemList={accordionData4Slide1.itemList}
        />,

        <Accordion
            title={accordionData5Slide1.title}
            orden={accordionData5Slide1.orden}
            itemList={accordionData5Slide1.itemList}
        />,

        <Accordion
            title={accordionData6Slide1.title}
            orden={accordionData6Slide1.orden}
            itemList={accordionData6Slide1.itemList}
        />,

        <Accordion
            title={accordionData7Slide1.title}
            orden={accordionData7Slide1.orden}
            itemList={accordionData7Slide1.itemList}
        />,

        <Accordion
            title={accordionData8Slide1.title}
            orden={accordionData8Slide1.orden}
            itemList={accordionData8Slide1.itemList}
        />,

        <Accordion
            title={accordionData9Slide1.title}
            orden={accordionData9Slide1.orden}
            itemList={accordionData9Slide1.itemList}
        />,

        <Accordion
            title={accordionData10Slide1.title}
            orden={accordionData10Slide1.orden}
            itemList={accordionData10Slide1.itemList}
        />,
    ],
};

export const slideData2 = {
    title: "Preguntas frecuntes de los postulantes",
    subtitle: "Algunas de las preguntas que más frecuentemente pueden surgir por parte de los postulantes a la hora de buscar un primer trabajo son:",
    listItems: [
        <Accordion
            title={accordionData1Slide3.title}
            orden={accordionData1Slide3.orden}
            itemList={accordionData1Slide3.itemList}
        />,

        <Accordion
            title={accordionData2Slide3.title}
            orden={accordionData2Slide3.orden}
            itemList={accordionData2Slide3.itemList}
        />,

        <Accordion
            title={accordionData3Slide3.title}
            orden={accordionData3Slide3.orden}
            itemList={accordionData3Slide3.itemList}
        />,

        <Accordion
            title={accordionData4Slide3.title}
            orden={accordionData4Slide3.orden}
            itemList={accordionData4Slide3.itemList}
        />,

        <Accordion
            title={accordionData5Slide3.title}
            orden={accordionData5Slide3.orden}
            itemList={accordionData5Slide3.itemList}
        />,

        <Accordion
            title={accordionData6Slide3.title}
            orden={accordionData6Slide3.orden}
            itemList={accordionData6Slide3.itemList}
            children={
                <>
                    <ul>
                        <h6>Modelos en PDF</h6>
                        <li><a href={ModeloDeCurriculumVitae} target='_blank'>Modelo de curriculum vitae en PDF 1.</a></li>
                        <h6>Modelos en Imagenes</h6>
                        <li><a href={cvEjemplo1} target='_blank'>Imagen de modelo de curriculum vitae 1.</a></li>
                        <li><a href={cvEjemplo2} target='_blank'>Imagen de modelo de curriculum vitae 2.</a></li>
                        <li><a href={cvEjemplo3} target='_blank'>Imagen de modelo de curriculum vitae 3.</a></li>
                        <h6>Más material que puede resultarte de utilidad para tu curriculum</h6>
                        <li><a href="https://www.cvmaker.com.ar/" target='_blank'>www.cvmaker.com.ar</a></li>
                        <li><a href="https://cv-lite.com/es/resume/create" target='_blank'>www.cv-lite.com</a></li>
                        <li><a href="https://www.canva.com/es_mx/curriculum-vitae/plantillas/" target='_blank'>www.canva.com</a></li>
                    </ul>
                </>
            }
        />,
    ]
}

export const slideData3 = {
    title: "¿Preguntas frecuntes de los empleadores?",
    subtitle: "Algunos de los intereses que más frecuentemente pueden surgir por parte de los empleadores a la hora de buscar personal son:",
    listItems: [
        <Accordion
            title={accordionData1Slide4.title}
            orden={accordionData1Slide4.orden}
            itemList={accordionData1Slide4.itemList}
        />,

        <Accordion
            title={accordionData2Slide4.title}
            orden={accordionData2Slide4.orden}
            itemList={accordionData2Slide4.itemList}
        />,

        <Accordion
            title={accordionData3Slide4.title}
            orden={accordionData3Slide4.orden}
            itemList={accordionData3Slide4.itemList}
        />,

        <Accordion
            title={accordionData4Slide4.title}
            orden={accordionData4Slide4.orden}
            itemList={accordionData4Slide4.itemList}
        />,

        <Accordion
            title={accordionData5Slide4.title}
            orden={accordionData5Slide4.orden}
            itemList={accordionData5Slide4.itemList}
        />
        ,

        <Accordion
            title={accordionData6Slide4.title}
            orden={accordionData6Slide4.orden}
            itemList={accordionData6Slide4.itemList}
        />
        ,

        <Accordion
            title={accordionData7Slide4.title}
            orden={accordionData7Slide4.orden}
            itemList={accordionData7Slide4.itemList}
        />,
    ]
}

export const slideData4 = {
    title: "¿Por qué deberias contratar empleados con poca o nula experiencia?",
    subtitle: "",
    listItems: [
        <Accordion
            title={accordionData1Slide2.title}
            orden={accordionData1Slide2.orden}
            itemList={accordionData1Slide2.itemList}
        />,

        <Accordion
            title={accordionData2Slide2.title}
            orden={accordionData2Slide2.orden}
            itemList={accordionData2Slide2.itemList}
        />,

        <Accordion
            title={accordionData3Slide2.title}
            orden={accordionData3Slide2.orden}
            itemList={accordionData3Slide2.itemList}
        />,

        <Accordion
            title={accordionData4Slide2.title}
            orden={accordionData4Slide2.orden}
            itemList={accordionData4Slide2.itemList}
        />,

        <Accordion
            title={accordionData5Slide2.title}
            orden={accordionData5Slide2.orden}
            itemList={accordionData5Slide2.itemList}
        />

    ]
}

export const slideData5 = {
    title: 'Régimen de Promoción de la Contratación de Trabajo Registrado',
    subtitle: '¿En que consiste?',
    listItems: [
        'El régimen permanente para micro-empleadores, establece un régimen transitorio que aplica a las empresas con menos de 80 empleados. Este régimen beneficia la contratación de nuevos puestos registrados, y consiste en descuentos temporarios en las contribuciones patronales (excluyendo obras sociales)',

        'Las empresas con 15 empleados o menos, pagarán 0% de contribuciones patronales en el primer año y 25% en el segundo año, por cada nuevo empleado, siempre que esta contratación aumente la nómina del personal (respecto de la cantidad de empleados que tenía a marzo de 2014). Por su parte, las empresas que tengan entre 16 y 80 empleados pagarán un 50% en los dos primeros años de cada nuevo puesto de trabajo formal creado.',

        'A diferencia del régimen permanente, para acceder a los beneficios de este régimen transitorio de promoción de contrataciones, los empleadores deben solicitar ejercer esta opción ante la AFIP. En otras palabras, es un beneficio optativo que no se activará si el empleador no lo demanda.'
    ],
};

