import Head from "next/head";

let s_logo = "/Logo.png"

const Meta = ({title, keywords, description, ogTitle, ogType, ogUrl, ogImage}) => {
    return ( 
       <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
           <meta name="keywords" content={keywords}></meta>
           <meta name="description" content={description}></meta>
           <meta property="og:title" content={ogTitle} />
           <meta property="og:type" content={ogType} />
           <meta property="og:url" content={ogUrl} />
           <meta property="og:image" content={ogImage} />
           <meta charSet="utf-8"></meta>
           <link rel="icon" href="/Logo.png"></link>
           <title>{title}</title>
       </Head>
     );
}
 Meta.defaultProps = {
     title: "Simbiosis Estudio",
     keywords: "Arquitectura, Diseño de edificios, Planificación urbana, Ingeniería estructural, Construcción,Proyectos de viviendas,Renovación de edificios, Arquitectura sostenible, Diseño de interiores, Mobiliario urbano ",
     description: "Somos una empresa de arquitectura especializada en el diseño de edificios y la planificación urbana. Ofrecemos servicios de ingeniería estructural, construcción y renovación de edificios, así como proyectos de viviendas y arquitectura sostenible. Además, nuestro equipo de profesionales también se dedica al diseño de interiores y mobiliario urbano. ¡Contáctanos para más información!",
     ogTitle: "Simbiosis Estudio",
     ogImage: {s_logo}
 }

 export default Meta;