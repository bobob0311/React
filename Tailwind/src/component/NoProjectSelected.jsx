import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty tack list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500  my-4">
        프로젝트가 선택되지 않았습니다.
      </h2>
      <p className="text-stone-400 mb-4">
        프로젝트를 선택하거나 새로운 프로젝트를 만드세요
      </p>
      <p>
        <Button
          onClick={onStartAddProject}
          content={"새로운 프로젝트 생성하기"}
        />
      </p>
    </div>
  );
}
