import HomeDashboard from "@/components/features/home/HomeDashboard";
import React from "react";
import { auth } from "./middleware";

const HomePage = async () => {
  const session = await auth();
  console.log({ session });

  return (
    <React.Fragment>
      <HomeDashboard />
    </React.Fragment>
  );
};

export default HomePage;
