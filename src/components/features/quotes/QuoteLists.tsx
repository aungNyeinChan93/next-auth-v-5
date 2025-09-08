import { Quote } from "@/features/quotes/type";
import React from "react";

interface Props {
  quotes?: Quote[];
}

const QuoteLists = ({ quotes }: Props) => {
  return (
    <React.Fragment>
      <section className="container mx-auto px-10">
        {quotes &&
          (quotes as Array<Quote>).map((quote) => (
            <h1 key={quote.id} className="p-2 my-2 bg-green-50 rounded-2xl">
              {quote.title}
            </h1>
          ))}
      </section>
    </React.Fragment>
  );
};

export default QuoteLists;
