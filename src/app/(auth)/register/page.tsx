import RegisterForm from "@/components/features/auth/RegisterForm";
import React from "react";

const RegisterPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <RegisterForm />
      </main>
    </React.Fragment>
  );
};

export default RegisterPage;
