'use client'; 
import React, { useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import ColourfulText from "../ui/colourful-text";
import { useMutation } from "@tanstack/react-query";
import { ClientError } from "graphql-request";

import { toast } from "sonner";
import { subscribeToNewsletter } from "@/lib/requests";


export function Newsletter() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["newsletter"],
    mutationFn: subscribeToNewsletter,
    onError: onError,
    onSuccess: onSuccess,
  });

  function onSuccess() {
    toast.success(
      "Subscribed to newsletter! Check your email to confirm your subscription."
    );
    setEmail(""); 
  }


  function onError(err: ClientError) {
    if (!err.response?.errors) return toast.error("Something went wrong");
    toast.error(err.response.errors[0]!.message);
  }

  function handleSubscribe() {
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError(null); // Clear any previous errors
    mutateAsync(email);
  }

  function validateEmail(email: string) {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="relative z-10 h-[50vh] lg:h-[60vh] flex items-center justify-center bg-center mb-10 mt-10">
      <BackgroundLines className="bg-white/10 backdrop-blur-4xl border border-primary/20 rounded-2xl shadow-2xl relative z-10 flex flex-col items-center w-full">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-10 md:py-10 font-bold tracking-tight">
          Stay Updated with <br /> <ColourfulText text="FlowenTech" />
        </h2>
        <p className="max-w-xl mx-2 text-wrap text-sm md:text-lg text-neutral-400 dark:text-neutral-400 text-center">
          Subscribe to our newsletter for the latest insights on AI, automation,
          and cutting-edge technology. Get exclusive updates straight to your inbox!
        </p>

        {/* Glass Effect Form */}
        <div className="relative z-10 mt-8 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 w-72 md:w-96 border border-gray-300 rounded-md bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              disabled={isPending}
              className="px-6 py-3 bg-tintblue text-white font-medium rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {emailError && (
            <p className="text-red-500 text-sm mt-2">{emailError}</p>
          )}
        </div>
      </BackgroundLines>
    </div>
  );
}