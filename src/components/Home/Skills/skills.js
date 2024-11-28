import { useSelector } from "react-redux"
import { backgroundColors, colors } from "../../../hooks/DateSlise"
import IconsJS from '../../Common/image/skills/js.png'
import IconsCSS from '../../Common/image/skills/css.png'
import IconsGulp from '../../Common/image/skills/gulp.png'
import IconsNpm from '../../Common/image/skills/npm.png'
import IconsHTML from '../../Common/image/skills/html.png'
import IconsReact from '../../Common/image/skills/react.png'
import './skills.css'
import { Link, Outlet } from "react-router-dom"

export function Skills(){
    const color = useSelector(backgroundColors)
    const FillColor = useSelector(colors)

    return(
        <article className="Skills marginBlock">
            <div className="Skills__block1">
                <h3 className={`Skills__block1__title border-left-${FillColor} text-${color}`}>What I do</h3>
                <p className={`Skills__block1__text text-${color}`}>Below is a brief overview of my basic technical skills and the technologies I use. Would you like to know more about my experience?  Check out my
                    <span className={` color-${FillColor}`}><Link className={` color-${FillColor} td`} to={`/Portfolio/1`}> project portfolio</Link></span> and online{" "}
                    <span className={` color-${FillColor}`}><Link className={` color-${FillColor} td`} to={`/Resume/2`}>resume</Link></span>.</p>
            </div>
            <div className="Skills__block2">
                <article className={`Skills__block2__article1 backgroundIcons-${color} border-${FillColor}`}>
                    <img className="Skills__block2__article1__img" src={IconsJS} alt="img"/>
                    <h3 className={`Skills__block2__article1__title text-${color}`}>Vanilla JavaScript</h3>
                    <p className={`Skills__block2__article1__text text-${color}`}>The listed skills and technologies are listed here.</p>
                </article>
                <article className={`Skills__block2__article2 backgroundIcons-${color} border-${FillColor}`}>
                    <img className="Skills__block2__article2__img" src={IconsReact} alt="img"/>
                    <h3 className={`Skills__block2__article1__title text-${color}`}>React</h3>
                    <p className={`Skills__block2__article1__text text-${color}`}>The listed skills and technologies are listed here.</p>
                </article>
                <article className={`Skills__block2__article3 backgroundIcons-${color} border-${FillColor}`}>
                    <div className="Skills__block2__article3__blockIcons">
                        <img className="Skills__block2__article3__blockIcons__img1" src={IconsNpm} alt="img"/>
                        <img className="Skills__block2__article3__blockIcons__img2" src={IconsGulp} alt="img"/>
                    </div>
                    <h3 className={`Skills__block2__article1__title text-${color}`}>npm, Gulp</h3>
                    <p className={`Skills__block2__article1__text text-${color}`}>The listed skills and technologies are listed here.</p>
                </article>
                <article className={`Skills__block2__article4 backgroundIcons-${color} border-${FillColor}`}>
                <div className="Skills__block2__article4__blockIcons">
                        <img className="Skills__block2__article4__blockIcons__img1" src={IconsHTML} alt="img"/>
                        <img className="Skills__block2__article4__blockIcons__img2" src={IconsCSS} alt="img"/>
                    </div>
                    <h3 className={`Skills__block2__article1__title text-${color}`}>HTML & CSS</h3>
                    <p className={`Skills__block2__article1__text text-${color}`}>The listed skills and technologies are listed here.</p>
                </article>
                <Outlet />
            </div>
        </article>
    )
}
//