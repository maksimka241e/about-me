import { useSelector } from "react-redux";
import { FeaturedProjects } from "./dataProjects";
import "./projects.css";
import { backgroundColors, colors } from "../../../hooks/DateSlise";
import { Link, Outlet } from "react-router-dom";

export function Projects() {
  const color = useSelector(backgroundColors);
  const FillColor = useSelector(colors);
  return (
    <div className="Projects marginBlock">
      <article className="Projects__article1">
        <h3
          className={`Projects__article1__title text-${color} border-left-${FillColor}`}
        >
          Featured Projects
        </h3>
        <div className={`Projects__article1__block`}>
          <p className={`Projects__article1__block__text text-${color}`}>
            I take care of every detail so that the works come out beautiful and
            of high quality
          </p>
          <Link className={`colorsLink`} to={`/Portfolio/1`}><button
            className={`background-${FillColor} Projects__article1__block__btn `}
          >
              View Portfolio
          </button></Link>
        </div>
      </article>
      <article className="Projects__article2">
        {FeaturedProjects.map((item, index) => (
          <div className={`Projects__article2__block`} key={index}>
            <a className="Projects_a" href={item.url}>
              <img
                className={`Projects__article2__block__img border-${FillColor}`}
                src={item.urlImg}
                alt={item.title}
              />
            </a>
            <article className={`Projects__article2__block__section1`}>
              {item.Skills.map((i) => (
                <p
                  className={`Projects__article2__block__section1__text text-${color}`}
                >
                  {i}
                </p>
              ))}
            </article>
            <article className={`Projects__article2__block__section2`}>
              <h3
                className={`Projects__article2__block__section2__title text-${color}`}
              >
                {item.title}
              </h3>
              <button
                onClick={() =>   window.open(item.url, '_blank', 'noopener,noreferrer')}
                className={`Projects__article2__block__section2__button backHover-${FillColor} back-${color} textBtn-${color}`}
              >{`>`}</button>
            </article>
          </div>
        ))}
      </article>
      <Outlet />
    </div>
  );
}
