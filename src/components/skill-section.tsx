import { skills } from "@/utils/data/skills";

export function Skills() {
  return (
    <div className="text-center mx-5 mt-5" id="skills">
      <p className="text-red-500 text-5xl">
        <span className="text-white">{"<"}</span>SKILLS
        <span className="text-white">{">"}</span>
      </p>
      <div className="flex justify-center flex-wrap opacity-70 background-blur-lg w-full border mt-5 rounded-xl p-5">
        {skills.map((data, index) => {
          return (
            <div
              className="w-24 h-24 flex flex-col justify-center items-center"
              key={index}
            >
              <img src={data.path} alt={data.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
