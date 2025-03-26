"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Roles } from "./role";
import { profile } from "@/utils/data";
import { Resume } from "./resume";

export function Hero() {
  return (
    <div className="mt-12 md:mt-10 w-full p-3 md:p-12" id="profile">
      <div className="w-full md:p-5 hero-background">
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div className="w-36 h-36 md:w-64 md:h-64 border md:border-4 border-red-500 rounded-full overflow-hidden">
            <img
              src={profile.profilePic}
              alt="my profile picture"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="mt-5 md:mt-0">
            <div className="text-center">
              <CardTitle className="text-4xl md:text-6xl text-white ">
                <span className="text-red-500">{profile.firstName}</span>{" "}
                {profile.lastName}
              </CardTitle>
              <CardDescription className="text-lg md:text-2xl text-white">
                <span className="text-red-500">{profile.role} </span>Developer
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
            {profile.summary}
            <span className="text-red-500">{"<p>"}</span>
          </p>
        </CardContent>
        <Resume />
      </div>
    </div>
  );
}
