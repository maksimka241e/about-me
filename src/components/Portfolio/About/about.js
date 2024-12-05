import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { backgroundColors, colors } from "../../../hooks/DateSlise";
import './about.css'

export function AboutPortfolio(){
    const FillColor = useSelector(colors)
    const color = useSelector(backgroundColors)

    return(
        <div className="aboutPortfolio">
            <h3 className={`aboutPortfolio__title text-${color}`}>A collection of my projects</h3>
            <p className={`aboutPortfolio__text text-${color}` }>Over the years of working in web development, I have gained extensive experience working on projects in various industries and technologies. Let me show you my best creations.</p>
            <Link className={`aboutPortfolio__link Header__section2__article3__link links-${FillColor}-n3`} to={`/Contact/3`}>Hire Me</Link>
            <Outlet/>
        </div>
    )
}