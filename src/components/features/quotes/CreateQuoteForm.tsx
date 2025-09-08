"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createQuoteAction } from "@/features/quotes/action";
import { useActionState } from "react";

export function CreateQuoteForm() {
  const [state, formAction] = useActionState(createQuoteAction, undefined);
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-indigo-500 text-xl text-center">
          Let Create Quote
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <span>
            {!state?.success && (
              <>
                <p className="text-red-600">{state?.error}</p>
              </>
            )}
          </span>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="quote"> Quote</Label>
              <Input
                id="quote"
                type="text"
                placeholder="Enter quote"
                // required
                name="quote"
              />
            </div>
          </div>
          <Button type="submit" className="w-full mt-6">
            Create Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
