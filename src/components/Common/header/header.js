import Icons from "../image/header/Icons-Img.jpg";
import SunIcons from "../image/header/icons8-sun.svg";
import MoonIcons from "../image/header/icons8-moon-24.png";
import { Link, Outlet, useParams } from "react-router-dom";

import "./header.css";
import { useDispatch, useSelector } from "react-redux";

import {
  backgroundColors,
  ChangeBackgroundColors,
  colors,
} from "../../../hooks/DateSlise";
import { AllIconsHeaders } from "../../Home/Projects/dataProjects";

export function Header() {
  const { id } = useParams();
  const color = useSelector(backgroundColors);
  const dispatch = useDispatch();
  const FillColor = useSelector(colors);

  

  if (color === "Light") {
    document.body.style.background = "rgb(41 41 41)";
  } else if (color === "Dark") {
    document.body.style.background = "#fff";
  }

  function Changes() {
    if (color === "Light") {
      dispatch(ChangeBackgroundColors("Dark"));
    } else if (color === "Dark") {
      dispatch(ChangeBackgroundColors("Light"));
    }
  }

  return (
    <header className={`Header back-${color}`}>
      <section className={`Header__section1 bs-${color}`}>
        <div className="Header__section1__btn">
          <p className={`Header__section1__btn__text text-${color}`}>
            {color} Mode
          </p>
          <div
            className={`Header__section1__btn--changes_color background-${FillColor}`}
            onClick={() => Changes()}
          >
            <img
              className="Header__section1__btn--changes_color__img"
              src={color === "Light" ? SunIcons : MoonIcons}
              alt="SunIcons"
            />
          </div>
        </div>
      </section>
      <section className={`Header__section2 backgroundIcons-${color}`}>
        <article className="Header__section2__article1">
          <img
            src={`${Icons}`}
            alt=""
            className="Header__section2__article1__img1"
          />
          <h3 className={`Header__section2__article1__title text-${color}`}>
            Max Maximov
          </h3>
          <p className={`Header__section2__article1__text text-${color}`}>
            Frontend developer
          </p>
          <div></div>
        </article>
        <article className="Header__section2__article2">
          <Link
            className={`Header__section2__article2__link  text-${color} active-${id === undefined ? "0" : "none"}-${FillColor} active-${id === "0" ? "0" : "none"}-${FillColor} links-${FillColor}`}to={`/Home/0`}>
            About Me
          </Link>
          <Link
            className={`Header__section2__article2__link  text-${color} active-${id === "1" ? "0" : "none"}-${FillColor} links-${FillColor}`}
            to={`/Portfolio/1`}
          >
            Portfolio
          </Link>
          <Link
            className={`Header__section2__article2__link  text-${color} active-${id === "2" ? "0" : "none"}-${FillColor} links-${FillColor}`}
            to={`/Resume/2`}
          >
            Resume
          </Link>
          <Link
            className={`Header__section2__article2__link  text-${color} active-${id === "3" ? "0" : "none"}-${FillColor} links-${FillColor}`}
            to={`/Contact/3`}
          >
            Contact
          </Link>
        </article>
        <article className="Header__section2__article3">
          <Link
            className={`Header__section2__article3__link links-${FillColor}-n3`}
            to={`/Contact/3`}
          >
            Hire Me
          </Link>
        </article>
      </section>
      <Outlet />
    </header>
  );
}
