"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";

export default function ContactForm() {
  // Initial form values
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
  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: { setSubmitting: any; resetForm: any }
  ) => {
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbxCZAiMVEPhFH7x05S-HBOYqGSNMcjh8d0d2QFwTRAhO9zVWw5ECor079HLUQEiHFsL/exec";

    const formData = new URLSearchParams();
    formData.append("entry.463545241", values.name);
    formData.append("entry.212771309", values.email);
    formData.append("entry.532917720", values.subject);
    formData.append("entry.1689604989", values.message);
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      if (response.ok) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Error Submitting Form");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Error Submitting Form");
    }
    // Form submission logic
    setSubmitting(false);
    resetForm();
  };

  return (
    <ContainerBox className="lg:flex md:flex md:justify-between justify-center bg-tintblue w-full lg:justify-between  py-10 px-4 my-12">
      <div className="relative lg:w-1/2 md:w-1/2 w-full shadow-lg">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dpc1nydxn/image/upload/v1741544386/burst-kUqqaRjJuw0-unsplash_msokd1.jpg"
            }
            alt={"showcase"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full w-full p-8 z-10 bg-gradient-to-b from-[#1c1e53a5] to-[#1c1e535b] flex flex-col justify-center  ">
          <h3 className="text-5xl font-medium text-grey text-center mb-4">
            {"We'd love to hear from you"}
          </h3>
          <p className="mb-4 text-white text-center font-normal ">
            {
              "Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions"
            }
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-4">We are Happy To Help!</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                  className="w-full bg-tintblue text-white p-3 rounded-full shadow-md hover:bg-blue-900 transition duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </ContainerBox>
  );
}
