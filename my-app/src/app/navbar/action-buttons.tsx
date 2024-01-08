// important imports
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";

import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="bg-gray-800" style={{ outline: "none" }}>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-white mt-10">
                  <Link href="/">Home</Link>
                  <Link href="/">About Us</Link>
                  <Link href="/">Our Community</Link>
                  <Link href="/">Hackathon</Link>
                  <Button className="text-md button">
                    <a href="/#signup-section">Join the newsletter</a>
                  </Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md button bg-green-500">
          <a href="/#signup-section">Join the newsletter</a>
        </Button>
        {/* <Button className="text-md" variant="ghost">
          
        </Button> */}
      </div>
    </div>
  );
};

export default ActionButtons;
