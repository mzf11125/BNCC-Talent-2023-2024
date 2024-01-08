"use client";

import * as React from "react";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function MuiSignup() {
  const [state, setState] = useState<string>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(event.currentTarget.elements)
      .filter((field) => isInputNamedElement(field as Element))
      .forEach((field) => {
        const inputField = field as HTMLInputElement & { name: string };
        if (!inputField.name) return;
        formData[inputField.name] = inputField.value;
      });

    setState("loading");

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
      }),
    });

    setState("ready");
  };

  const isInputNamedElement = (
    element: Element
  ): element is HTMLInputElement & { name: string } => {
    return "value" in element && "name" in element;
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Label htmlFor="firstName">First Name</Label>
      <Input id="firstName" name="firstName" />

      <Label htmlFor="email">Email</Label>
      <Input id="email" name="email" />

      <button className={buttonVariants()} disabled={state === "loading"}>
        Sign Up
      </button>
    </form>
  );
}
