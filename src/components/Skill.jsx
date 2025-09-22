import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/Figma.png",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/CSS.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/TailwindCSS.png",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/js.png",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/node.webp",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/ES.png",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/mongodb.png",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/React.png",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/Nextjs.webp",
    label: "Next.js",
    desc: "React Framework",
  },
  {
    imgSrc: "/Typescript.png",
    label: "TypeScript",
    desc: "Typed JavaScript",
  },
  {
    imgSrc: "/Firebase.png",
    label: "Firebase",
    desc: "Auth & Hosting",
  },
  {
    imgSrc: "/Git.svg",
    label: "Git & GitHub",
    desc: "Version Control",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal -up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal -up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
