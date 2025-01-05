import ProjectsCard from "./ProjectsCard";

const works = [
  {
    imgSrc: "/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://sportaxis-project.web.app/",
  },
  {
    imgSrc: "/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://querymate-project.web.app/",
  },
  {
    imgSrc: "/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "https://job-portal-462b3.web.app/",
  },
  {
    imgSrc: "/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://careerguide-project.web.app/",
  },
  {
    imgSrc: "/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://dragon-news-7104a.web.app/category/01",
  },
  {
    imgSrc: "/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://bpl-player-drafted.netlify.app/",
  },
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