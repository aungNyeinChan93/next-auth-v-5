import { CreateQuoteForm } from "@/components/features/quotes/CreateQuoteForm";
import React from "react";

const QuoteCreate = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <CreateQuoteForm />
      </main>
    </React.Fragment>
  );
};

export default QuoteCreate;
