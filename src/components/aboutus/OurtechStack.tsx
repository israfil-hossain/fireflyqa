import React from "react";
import ContainerBox from "../layout/ContainerBox";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { Tabs } from "../ui/tabs";

const OurtechStack = () => {
  return (
    <ContainerBox>
      <div>
        <h2>Our Tech Stack</h2>
        <Tabs defaultValue="account" className="w-[400px]"></Tabs>
      </div>
    </ContainerBox>
  );
};

export default OurtechStack;
