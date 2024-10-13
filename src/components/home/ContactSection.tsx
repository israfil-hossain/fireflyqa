"use client";
import React from "react";
import ContainerBox from "../layout/ContainerBox";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { women } from "@/assets";

export default function ContactSection() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  // Submit function
  const onSubmit = (
    values: any,
    { setSubmitting, resetForm }: { setSubmitting: any; resetForm: any }
  ) => {
    // Form submission logic
    console.log("Form data:", values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <div className="mb-10">
      <ContainerBox className="flex bg-tintblue w-full justify-between px-0">
        <div className="relative w-1/2 shadow-lg">
          <div className="absolute inset-0 z-0 opacity-60">
            <Image
              width={500}
              height={500}
              src={women}
              alt={"showcase"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-full w-full p-8 z-10 bg-gradient-to-b from-[#1c1e53a5] to-[#1c1e535b] flex flex-col justify-center  ">
            <h3 className="text-5xl font-medium text-grey text-center mb-4">
              {"Building stellar websites for early startups"}
            </h3>
            <p className="mb-4 text-white text-center font-normal ">
              {"LOrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."}
            </p>
          </div>
        </div>
        <div className="pt-10  pb-8 px-10 w-1/2 flex flex-col justify-center ">
          <h2 className="text-2xl  font-semibold text-grey text-start">Send inquiry</h2>
          <p className="text-[15px] text-gray-300 font-normal text-start">
            Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 gap-5 sm:grid-cols-2 pt-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-gray-700">
                    Subject
                  </label>
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Provide context"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Message Field */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Write your question here"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-1 ">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-black p-3 rounded-full shadow-md hover:bg-blue-900 transition duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </ContainerBox>
    </div>
  );
}
