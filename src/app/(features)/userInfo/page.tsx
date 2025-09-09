import { getSession } from "@/features/public/helper";
import { getUserDatiel } from "@/features/userInfo/helper";
import React from "react";

const UserInfoPage = async () => {
  const session = await getSession();
  const userInfo = await getUserDatiel(session?.user?.id);
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <pre>{JSON.stringify(userInfo, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default UserInfoPage;
