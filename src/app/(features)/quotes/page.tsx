import QuoteLists from "@/components/features/quotes/QuoteLists";
import { getAllQuotes } from "@/features/quotes/helper";
import Link from "next/link";
import React from "react";

const QuotesPage = async () => {
  const quotes = await getAllQuotes();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen px-10 my-4">
        <div className="flex justify-between px-10 py-4 container mx-auto my-2">
          <span>Quotes</span>
          <Link href={"/quotes/create-quote"}>Create Quote</Link>
        </div>
        <QuoteLists quotes={quotes} />
      </main>
    </React.Fragment>
  );
};

export default QuotesPage;
