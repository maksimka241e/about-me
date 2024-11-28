import { useSelector } from "react-redux";
import Icons from "./../../Common/image/header/Icons-Img.jpg";
import "./about.css";
import { backgroundColors, colors } from "../../../hooks/DateSlise";
import { Link, Outlet } from "react-router-dom";
export function AboutHome() {
  const FillColor = useSelector(colors);
  const color = useSelector(backgroundColors);
  return (
    <div className="AboutHome marginBlock">
      <article className="AboutHome__article1">
        <div className="AboutHome__article1__textBlock1">
          <p className={`AboutHome__article1__textBlock1__text text-${color}`}>
            HI, I'M MAX
          </p>
          <h3
            className={`AboutHome__article1__textBlock1__title color-${FillColor}`}
          >
            {}
          </h3>
          <p className={`AboutHome__article1__textBlock1__text1 text-${color}`}>
            Check out my {" "}
            <span className={` color-${FillColor}`}><Link className={` color-${FillColor} td`} to={`/Portfolio/1`}>project portfolio</Link></span> and online{" "}
            <span className={` color-${FillColor}`}><Link className={` color-${FillColor} td`} to={`/Resume/2`}>resume</Link></span>.
          </p>
        </div>
        <div className="AboutHome__article1__btnBlock">
          <Link className={`colorsLink`} to={`/Portfolio/1`}><button
            className={`AboutHome__article1__btnBlock__btn-portfolio btn-${FillColor}`}
          >
            View Portfolio
          </button></Link>
           <Link className={`colorsLink`} to={`/Resume/2`}><button className="AboutHome__article1__btnBlock__btn-resume">
           View Resume
          </button></Link>
        </div>
        <div className="AboutHome__article1__textBlock2">
          <section className="AboutHome__article1__textBlock2__section1">
            <h3 className={`AboutHome__article1__textBlock2__section1__title color-${FillColor}`}>2</h3>
            <p className={`AboutHome__article1__textBlock2__section1__text text-${color}`}>Learning experience</p>
          </section>
          <section className="AboutHome__article1__textBlock2__section2">
            <h3 className={`AboutHome__article1__textBlock2__section2__title color-${FillColor}`}>8</h3>
            <p className={`AboutHome__article1__textBlock2__section2__text text-${color}`}>Projects Completed</p>
          </section>
        </div>
      </article>
      <article className="AboutHome__article2">
        <div
          className={`AboutHome__article2__backgroundImg background-${FillColor}`}
        ></div>
        <img className="AboutHome__article2__img" src={Icons} alt="icons" />
      </article>
      <Outlet/>
    </div>
  );
}
