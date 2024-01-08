// Import the necessary dependencies
"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Define a type guard to check if an element is an input element with a name property
function isInputNamedElement(
  e: Element
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

// Define the SignupForm component
const SignupForm = () => {
  const [state, setState] = useState<string>();

  // Handle form submission
  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    // Collect form data from input fields
    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    setState("loading");

    // Send form data to the server
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
      }),
    });

    setState("ready");
  }

  return (
    <div className="bg-gray-700 text-white text-2xl flex-col items-center justify-center bg-gray-700">
      <div
        className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-r
                from-purple-400
                to-blue-800
                bg-clip-text
                text-transparent
                
                "
      >
        Join Us
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <form
          className="flex flex-col gap-4 text-lg"
          onSubmit={handleOnSubmit}
          style={{ width: "50%" }}
        >
          {/* Render the First Name label and input field */}
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" />

          {/* Render the Email label and input field */}
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" />

          {/* Render the Sign Up button */}
          <button className={buttonVariants()} disabled={state === "loading"}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
