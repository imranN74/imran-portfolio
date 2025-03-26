import { exp } from "@/utils/data";

export function Experience() {
  return (
    <div className="text-center mx-5 mt-5" id="exp">
      <p className="text-red-500 text-3xl md:text-5xl">
        <span className="text-white">{"<"}</span>EXPERIENCE
        <span className="text-white">{">"}</span>
      </p>
      {exp.map((data, index) => {
        return (
          <div
            className="mt-5 lg:mx-60 text-white border-l p-2 md:p-5 border-red-500"
            key={index}
          >
            <div className="flex justify-between items-center">
              <div className="text-lg md:text-2xl text-red-500 font-bold">
                {data.companyName}
              </div>
              <div className="text-red-400">{data.duration}</div>
            </div>
            <div className="flex flex-initial">
              <div className="text-red-400 font-semibold">{data.role}</div>
            </div>
            <div className="flex flex-initial gap-2">
              <span className="text-red-400">TechStack</span> :
              <span className="font-semibold">{data.techStack}</span>
            </div>
            {data.workDone.map((data, index) => {
              return (
                <div key={index}>
                  <ul className="text-left list-disc pl-2 m-1">
                    <li className="mt-1">{data}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
