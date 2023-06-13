import imgCss from "../image/css.png"
import imgExpress from "../image/express.png"
import imgHtml from "../image/html.png"
import imgJavascript from "../image/javascript.png"
import imgJwt from "../image/jwt.png"
import imgMongodb from "../image/mongodb.png"
import imgReact from "../image/react.png"
import imgRedux from "../image/redux.png"
import imgTailwind from "../image/tailwind.png"
import imgMysql from "../image/mysql.png"
import imgNodejs from "../image/nodejs.png"
import imgPython from "../image/python.png"

export default function ProjectCard({ maxProjects }) {    
    
    const projectsArray = [
        {
            'id':'1',
            'imagen':'https://astro-modern-personal-website.netlify.app/_astro/post_img_Z1NWKef.webp',
            'titulo':'Demo Project 1',
            'descripcion':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil neque molestias tenetur veritatis officiis in eius consequatur aliquam ipsam dicta iste ipsum illo possimus sapiente quidem laboriosam, dolorem est iusto.',
            'link':'/project/Project1',
            'alt':"escribir datos sobre el projecto para ceo",
            'title':"titulo para mejorar la experiencia de usuario, cuando el mouse esta sobre la imagen",
            'svg': [imgCss, imgExpress, imgHtml, imgJavascript, imgJwt, imgMongodb, imgReact, imgRedux, imgTailwind, imgMysql, imgNodejs, imgPython]            
        },
        {
            'id':'2',
            'imagen':'https://astro-modern-personal-website.netlify.app/_astro/post_img_Z1NWKef.webp',
            'titulo':'Demo Project 2',
            'descripcion':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil neque molestias tenetur veritatis officiis in eius consequatur aliquam ipsam dicta iste ipsum illo possimus sapiente quidem laboriosam, dolorem est iusto.',
            'link':'/project/Project2',
            'alt':"escribir datos sobre el projecto para ceo",
            'title':"titulo para mejorar la experiencia de usuario, cuando el mouse esta sobre la imagen",
            'svg': [imgCss, imgExpress, imgHtml, imgJavascript, imgJwt, imgMongodb, imgReact, imgRedux, imgTailwind, imgMysql, imgNodejs, imgPython]
        },
        {
            'id':'3',
            'imagen':'https://astro-modern-personal-website.netlify.app/_astro/post_img_Z1NWKef.webp',
            'titulo':'Demo Project 3',
            'descripcion':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil neque molestias tenetur veritatis officiis in eius consequatur aliquam ipsam dicta iste ipsum illo possimus sapiente quidem laboriosam, dolorem est iusto.',
            'link':'/project/Project3',
            'alt':"escribir datos sobre el projecto para ceo",
            'title':"titulo para mejorar la experiencia de usuario, cuando el mouse esta sobre la imagen",
            'svg': [imgCss, imgExpress, imgHtml, imgJavascript, imgJwt, imgMongodb, imgReact, imgRedux, imgTailwind, imgMysql, imgNodejs, imgPython]
        },
        {
            'id':'4',
            'imagen':'https://astro-modern-personal-website.netlify.app/_astro/post_img_Z1NWKef.webp',
            'titulo':'Demo Project 4',
            'descripcion':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil neque molestias tenetur veritatis officiis in eius consequatur aliquam ipsam dicta iste ipsum illo possimus sapiente quidem laboriosam, dolorem est iusto.',
            'link':'/project/Project4',
            'alt':"escribir datos sobre el projecto para ceo",
            'title':"titulo para mejorar la experiencia de usuario, cuando el mouse esta sobre la imagen",
            'svg': [imgCss, imgExpress, imgHtml, imgJavascript, imgJwt, imgMongodb, imgReact, imgRedux, imgTailwind, imgMysql, imgNodejs, imgPython]
        },
        {
            'id':'5',
            'imagen':'https://astro-modern-personal-website.netlify.app/_astro/post_img_Z1NWKef.webp',
            'titulo':'Demo Project 5',
            'descripcion':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil neque molestias tenetur veritatis officiis in eius consequatur aliquam ipsam dicta iste ipsum illo possimus sapiente quidem laboriosam, dolorem est iusto.',
            'link':'/project/Project5',
            'alt':"escribir datos sobre el projecto para ceo",
            'title':"titulo para mejorar la experiencia de usuario, cuando el mouse esta sobre la imagen",
            'svg': [imgCss, imgExpress, imgHtml, imgJavascript, imgJwt, imgMongodb, imgReact, imgRedux, imgTailwind, imgMysql, imgNodejs, imgPython]
        },
        {
            'id':'6',
            'imagen':'https://astro-modern-personal-website.netlify.app/_astro/post_img_Z1NWKef.webp',
            'titulo':'Demo Project 6',
            'descripcion':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil neque molestias tenetur veritatis officiis in eius consequatur aliquam ipsam dicta iste ipsum illo possimus sapiente quidem laboriosam, dolorem est iusto.',
            'link':'/project/Project6',
            'alt':"escribir datos sobre el projecto para ceo",
            'title':"titulo para mejorar la experiencia de usuario, cuando el mouse esta sobre la imagen",
            'svg': [imgCss, imgExpress, imgHtml, imgJavascript, imgJwt, imgMongodb, imgReact, imgRedux, imgTailwind, imgMysql, imgNodejs, imgPython]
        }
    ]

    const projectsList = projectsArray.slice(0, maxProjects).map(project =>       
        <a href={project.link}>
            <div className="grid grid-cols-4 gap-4 text-[#fff] cursor-pointer hover:scale-105 hover:shadow-lg ease-in duration-300 rounded-2xl px-2 py-8">
                <div class="col-span-4 md:col-span-1 m-auto">
                    <img className="rounded-2xl" src={project.imagen}></img>
                </div>
                <div class="col-span-4 md:col-span-3">
                    <h1 className="text-2xl">{project.titulo} -    
                    <span className="block md:contents">                     
                        {project.svg.map(img =>(
                            <img className="inline w-6" src={img}></img>   
                        ))}                       
                    </span> 
                    </h1>
                    <p className="text-base pt-2">{project.descripcion}</p>
                </div>
            </div>
        </a> 
    );

    return (
        <>
            <div className="py-4">{projectsList}</div>
        </>      
    )
}