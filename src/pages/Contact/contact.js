import { Header } from "../../components/Common/header/header";
import { Loading } from "../../components/Common/loading/loading";
import { Scales } from "../../components/Common/scale/scale";
import { AllBlock } from "../../components/Resume/allBlock";

export function Contact() {
  return (
    <div>
      <Header />
      <Loading />
      <Scales />
      <AllBlock />
    </div>
  );
}
