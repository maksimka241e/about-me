import { Header } from "../../components/Common/header/header";
import { Loading } from "../../components/Common/loading/loading";
import { Scales } from "../../components/Common/scale/scale";
import { AboutHome } from "../../components/Home/About/about";
import { Projects } from "../../components/Home/Projects/projects";
import { Skills } from "../../components/Home/Skills/skills";
export function Home() {
  return (
    <div className="AllHome">
      <AboutHome/>
      <Skills/>
      <Projects />
      <Header/>
      <Loading />
      <Scales />
    </div>
  );
}
