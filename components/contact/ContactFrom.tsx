'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function ContactForm () {
  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  // Submit function
  const onSubmit = (values : any, { setSubmitting, resetForm }:{setSubmitting: any, resetForm: any}) => {
    // Form submission logic
    console.log('Form data:', values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-gray-700">Subject</label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Provide context"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Message Field */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Write your question here"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-1 ">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-tintblue text-white p-3 rounded-full shadow-md hover:bg-blue-900 transition duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

