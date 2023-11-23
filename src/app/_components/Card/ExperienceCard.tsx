interface ExperienceProps {
  time: string;
  jobTitle: string;
  jobDescription: string;
  tech: string[];
}

const ExperienceCard = ({ time, jobTitle, jobDescription, tech }: ExperienceProps) => {
  return (
    <div className="group flex gap-5 cursor-pointer hover:bg-slate-800/50 rounded-md transition motion-reduce:transition-none p-5 hover:shadow hover:!opacity-100 group-hover/list:opacity-50">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{time}</p>
      <div className="flex flex-col gap-3">
        <p className="font-medium leading-tight text-slate-200 group-hover:text-purple-300 group-focus-visible:text-purple-300">
          {jobTitle}
        </p>
        <p className="text-sm leading-normal">{jobDescription}</p>
        <div className="flex flex-wrap gap-2.5">
          {tech.map((t, i) => (
            <p key={i} className="bg-purple-400/10 text-purple-400 rounded-full px-3">
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
