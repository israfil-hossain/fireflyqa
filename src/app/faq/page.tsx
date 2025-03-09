import ContainerBox from "@/components/layout/ContainerBox";

export default function Page() {
  return (
    <ContainerBox className="lg:py-24 py-16">
      <div className="mb-10 flex flex-col justify-center items-center ">
        <h2 className="text-4xl font-medium text-tintblue text-center">
          Privacy Policy
        </h2>
        <h4 className="text-lg font-normal text-center py-2 max-w-4xl">
          At Flowentech, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard your data when you
          interact with our services, website, or software solutions.
        </h4>
      </div>
      <div className="items-start mb-8">
        <h2 className="text-3xl font-medium ">Information We Collect</h2>
        <p className="text-md font-normal pt-5">
          We may collect the following types of information:
          <br />
          <br />- <strong>Personal Information</strong>: Name, email address,
          phone number, and other contact details when you inquire about our
          services or sign up for an account.
          <br />- <strong>Usage Data</strong>: Information about how you
          interact with our website or software, including IP address, browser
          type, device information, and pages visited.
          <br />- <strong>Project Data</strong>: Details related to your
          projects, such as design files, technical specifications, and other
          materials shared with us for development purposes.
          <br />- <strong>Payment Information</strong>: Billing details for
          processing payments, though we do not store credit card information on
          our servers.
        </p>
      </div>
      <div className="items-start">
        <h2 className="text-3xl font-medium ">How We Use Your Information</h2>
        <p className="text-md font-normal pt-5">
          We use the information we collect for the following purposes:
          <br />
          <br />
          - To provide and improve our software development and design services.
          <br />
          - To communicate with you about your projects, updates, and support
          requests.
          <br />
          - To process payments and manage billing.
          <br />
          - To analyze website usage and improve user experience.
          <br />- To comply with legal obligations and protect our rights.
        </p>
      </div>
    </ContainerBox>
  );
}
