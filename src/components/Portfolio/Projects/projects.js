import { useSelector } from "react-redux"
import { AllProjects } from "../../Home/Projects/dataProjects"
import { backgroundColors, colors } from "../../../hooks/DateSlise"
import './projects.css'
export function ProjectsPortfolio(){
    const FillColor = useSelector(colors)
    const color = useSelector(backgroundColors)
    return(
        <div className={`ProjectPortfolio marginBlock`}>
            <article className={`ProjectPortfolio__AllBlock`}>
                {AllProjects.map((item, index) => (
                    <div className={`ProjectPortfolio__AllBlock__div`} key={index}>
                        <a className={`ProjectPortfolio__AllBlock__div__a`} href={item.url}>
                            <img  className={`ProjectPortfolio__AllBlock__div__img border-${FillColor}`} src={item.urlImg} alt={item.title}/>
                        </a>
                        <article className={`ProjectPortfolio__AllBlock__div__article1`}>
                            {item.Skills.map((i) => (
                                <p className={`ProjectPortfolio__AllBlock__div__article1__text text-${color}`}>{i}</p>
                            ))}
                        </article>
                        <article className={`ProjectPortfolio__AllBlock__div__article2`}>
                            <h3 className={`ProjectPortfolio__AllBlock__div__article2__title text-${color}`}>{item.title}</h3>
                            <button onClick={() =>   window.open(item.url, '_blank', 'noopener,noreferrer')} className={`ProjectPortfolio__AllBlock__div__article2__button backHover-${FillColor} back-${color} textBtn-${color}`}>{`>`}</button>
                        </article>
                    </div>
                ))}
            </article>
        </div>
    )
}

// <article className="Projects__article2">
//         {FeaturedProjects.map((item, index) => (
//           <div className={`Projects__article2__block`} key={index}>
//             <a className="Projects_a" href={item.url}>
//               <img
//                 className={`Projects__article2__block__img border-${FillColor}`}
//                 src={item.urlImg}
//                 alt={item.title}
//               />
//             </a>
//             <article className={`Projects__article2__block__section1`}>
//               {item.Skills.map((i) => (
//                 <p
//                   className={`Projects__article2__block__section1__text text-${color}`}
//                 >
//                   {i}
//                 </p>
//               ))}
//             </article>
//             <article className={`Projects__article2__block__section2`}>
//               <h3
//                 className={`Projects__article2__block__section2__title text-${color}`}
//               >
//                 {item.title}
//               </h3>
//               <button
//                 onClick={() =>   window.open(item.url, '_blank', 'noopener,noreferrer')}
//                 className={`Projects__article2__block__section2__button backHover-${FillColor} back-${color} textBtn-${color}`}
//               >{`>`}</button>
//             </article>
//           </div>
//         ))}
//       </article>
//       <Outlet />
//     </div>
//   );
// }