// Import the necessary dependencies
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
    <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
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
  );
};

export default SignupForm;
