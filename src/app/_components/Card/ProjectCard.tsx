interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard = ({ image, title, description }: ProjectCardProps) => {
  return (
    <div className="group flex gap-5 cursor-pointer hover:bg-slate-800/50 rounded-md transition motion-reduce:transition-none p-5 hover:shadow hover:!opacity-100 group-hover/list:opacity-50">
      <picture>
        <img src={image} alt="Image" className="rounded border-2 border-slate-200/10 group-hover:border-slate-200/30" />
      </picture>
      <div className="flex flex-col gap-5">
        <p className="font-medium leading-tight text-slate-200 group-hover:text-purple-300 group-focus-visible:text-purple-300">
          {title}
        </p>
        <p className="text-sm leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
