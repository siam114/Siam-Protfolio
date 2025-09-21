import PropTypes from "prop-types";

const ProjectsCard = ({ project }) => {
  const { imgSrc, title, tags, projectLink, clientLink, classes, description } =
    project;

  return (
    <div
      className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/50 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}
    >
      {/* Project Image with Hover Description */}
      <figure className="relative img-box aspect-square rounded-lg mb-4 overflow-hidden group">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Description - Only Visible on Image Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/90 text-white px-4 text-center rounded-2xl opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-sm">{description}</p>
        </div>
      </figure>

      {/* Title & Tags */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Project Link Button */}
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 hover:bg-sky-500 transition"
        >
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </a>
      </div>

      {/* Client Site Button */}
      <a
        href={clientLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-sky-400 text-zinc-950 shrink-0 hover:bg-sky-500 transition cursor-pointer"
      >
        <span className="material-symbols-rounded" aria-hidden="true">
          web
        </span>
        View Client Site
      </a>
    </div>
  );
};

ProjectsCard.propTypes = {
  project: PropTypes.object.isRequired,
  classes: PropTypes.string,
};

export default ProjectsCard;
