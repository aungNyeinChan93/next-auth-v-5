import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Post } from "@/features/posts/type";

interface Props {
  post?: Post;
}

const DialogBox = ({ post }: Props) => {
  return (
    <React.Fragment>
      <div className="bg-slate-100 rounded-lg  px-2 py-1 !cursor-pointer">
        <Dialog>
          <DialogTrigger>Detail ➕</DialogTrigger>
          <DialogContent className="bg-green-50 w-sm sm:w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl tracking-widest font-bold">
                {post?.title || "lorem 23"}
              </DialogTitle>
              <DialogDescription className="text-base tracking-wider">
                {post?.body ||
                  `This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.`}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="button" variant={"destructive"} asChild>
                <DialogClose>Close</DialogClose>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </React.Fragment>
  );
};

export default DialogBox;
