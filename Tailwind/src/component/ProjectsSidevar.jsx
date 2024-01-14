import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  oncSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Projects
      </h2>
      <div>
        <Button
          content={"+ 새프로젝트 추가하기!!"}
          onClick={onStartAddProject}
        />
      </div>
      <ul className="mt-8">
        {projects.map((projects) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-500";

          if (projects.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={projects.id}>
              <button
                onClick={() => oncSelectProject(projects.id)}
                className={cssClasses}
              >
                {projects.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
