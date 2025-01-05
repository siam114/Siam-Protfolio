import ProjectsCard from "./ProjectsCard";

const works = [
  {
    imgSrc: "/project-1.png",
    title: "SportAxis Project",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://sportaxis-project.web.app/",
  },
  {
    imgSrc: "/project-2.png",
    title: "QueryMate Project",
    tags: ["API", "SPA"],
    projectLink: "https://querymate-project.web.app/",
  },
  {
    imgSrc: "/project-3.png",
    title: "Job Portal",
    tags: ["Development", "API"],
    projectLink: "https://job-portal-462b3.web.app/",
  },
  {
    imgSrc: "/project-4.png",
    title: "CareerGuide Project",
    tags: ["Web-design", "Development"],
    projectLink: "https://careerguide-project.web.app/",
  },
  {
    imgSrc: "/project-5.png",
    title: "Dragon News Category",
    tags: ["eCommerce", "Development"],
    projectLink: "https://dragon-news-7104a.web.app/category/01",
  }
];


const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal -up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectsCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal -up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
