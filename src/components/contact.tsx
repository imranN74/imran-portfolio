import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { AnimatedButton } from "./animated-button";

export function Contact() {
  return (
    <div className="text-center mx-5 lg:mx-28 mt-5 text-white" id="projects">
      <p className="text-red-500 text-3xl md:text-5xl">
        <span className="text-white">{"<"}</span>CONTACT ME
        <span className="text-white">{">"}</span>
      </p>
      <div className="mt-5">
        <div className="p-5 lg:p-8 border flex flex-col justify-center items-center rounded-xl border-red-500">
          <Input type="text" placeholder="Your Name" className="m-5 h-16" />
          <Input
            type="email"
            placeholder="your@email.com"
            className="m-5 h-16"
          />
          <Textarea placeholder="Your Message" className="m-5 h-28" />
          <AnimatedButton value="Send" className="bg-white text-black" />
        </div>
      </div>
    </div>
  );
}
