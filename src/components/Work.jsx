import works from "../utils/ProjectsData";
import ProjectsCard from "./ProjectsCard";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal -up">My Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map((work, key) => (
            <ProjectsCard key={key} project={work} classes="reveal -up" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
