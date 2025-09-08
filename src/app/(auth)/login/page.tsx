import { LoginForm } from "@/components/features/auth/LoignForm";
import React from "react";

const LoginPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full p-4 min-h-screen flex flex-col justify-center items-center bg-gradient-to-l from-sky-300 via-green-300 to-indigo-500 ">
        <LoginForm />
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
