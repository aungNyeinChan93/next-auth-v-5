import DialogBox from "@/components/tests/DialogBox";
import React from "react";

const DialogDemo = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <DialogBox post={undefined} />
      </main>
    </React.Fragment>
  );
};

export default DialogDemo;
