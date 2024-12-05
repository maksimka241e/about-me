import { Header } from "../../components/Common/header/header";
import { Loading } from "../../components/Common/loading/loading";
import { Scales } from "../../components/Common/scale/scale";
import { AboutPortfolio } from "../../components/Portfolio/About/about";
import { ProjectsPortfolio } from "../../components/Portfolio/Projects/projects";

export function Portfolio() {
  return (
    <div className="AllHome">
      <AboutPortfolio/>
      <ProjectsPortfolio />
      <Header/>
      <Loading />
      <Scales />
    </div>
  );
}
