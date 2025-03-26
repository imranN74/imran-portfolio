import { skills } from "@/utils/data";

export function Skills() {
  return (
    <div className="text-center mx-5 mt-5" id="skills">
      <p className="text-red-500 text-3xl md:text-5xl">
        <span className="text-white">{"<"}</span>SKILLS
        <span className="text-white">{">"}</span>
      </p>
      <div className="text-white text-xl ">Tools & Technologies</div>
      <div className="flex justify-center gap-2 flex-wrap mt-3">
        {skills.map((data, index) => {
          return (
            <div
              className="border px-2 rounded-xl border-red-400  flex justify-center items-center text-white"
              key={index}
            >
              {data.skillName}
            </div>
          );
        })}
      </div>
    </div>
  );
}
