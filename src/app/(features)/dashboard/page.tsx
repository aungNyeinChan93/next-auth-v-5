import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DashboardPage = async () => {
  return (
    <React.Fragment>
      <main>
        Dashboard
        <Button size={"sm"} variant={"outline"} asChild>
          <Link href={"/dashboard/setting"}>Setting</Link>
        </Button>
      </main>
    </React.Fragment>
  );
};

export default DashboardPage;
