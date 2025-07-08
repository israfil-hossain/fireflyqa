
import HomeComponent from "@/components/home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Top Service Provider Agency | Custom  Solutions
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Leading software development agency offering custom web, mobile, and cloud solutions. We provide cutting-edge digital transformation services to boost your business."
        />
        <meta
          name="keywords"
          content="software development, custom web solutions, mobile app development, cloud solutions, software agency, digital transformation,web development, mobile development, app development, wordpress,Bubble.io, no-code platform "
        />
        <link rel="canonical" href="https://fireflyqa.com" />

        <meta
          property="og:title"
          content="Top Software Development Agency | Custom Web & Mobile Solutions"
        />
        <meta
          property="og:description"
          content="Get premium software development services, from web and mobile apps to cloud solutions. Our experts deliver tailored digital transformation for businesses."
        />
        <meta
          property="og:image"
          content="https://www.fireflyqa.com/images/og-image.jpg"
        />
        <meta property="og:url" content="https://www.fireflyqa.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:Fireflyqa" content="Fireflyqa" />
      </Head>
      <div className="min-h-screen ">
        <HomeComponent />
      </div>
    </>
  );
}
