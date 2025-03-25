"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Roles } from "./role";

export function Hero() {
  return (
    <div className="w-full p-3 md:p-12" id="profile">
      <div className="w-full md:p-5 hero-background">
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div className="w-36 h-36 md:w-64 md:h-64 border-4 border-red-500 rounded-full overflow-hidden">
            <img
              src="/my-pic.jpg"
              alt="my profile picture"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="mt-5 md:mt-0">
            <div className="text-center">
              <CardTitle className="text-4xl md:text-6xl text-white ">
                Imran <span className="text-red-500">Nazir</span> Ansari
              </CardTitle>
              <CardDescription className="text-lg md:text-2xl text-white">
                Fullstack Developer @
                <span className="text-red-500 font-bold">iCloudEMS</span>
              </CardDescription>
            </div>
            <div className="flex justify-center mt-8">
              <Roles />
            </div>
          </div>
        </div>
        <CardContent className="pt-10">
          <p className="text-center text-md md:text-lg text-white">
            <span className="text-red-500">{"<p>"}</span>
            I’m a full-stack developer with expertise in both front-end and
            back-end technologies. I specialize in building dynamic web
            applications using React, Next.js, Node.js, and databases like
            PostgreSQL and MongoDB. Passionate about clean, scalable code, I’m
            always eager to learn and stay updated with the latest in tech.
            <span className="text-red-500">{"<p>"}</span>
          </p>
        </CardContent>
      </div>
    </div>
  );
}
