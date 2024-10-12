import ContainerBox from "@/components/layout/ContainerBox";

export default function Page(){
    return(
        <ContainerBox className="lg:py-24 py-16">
            <div className="mb-10 flex flex-col justify-center items-center ">
                <h2 className="text-4xl font-medium text-tintblue text-center">
                    Privacy Policy
                </h2>
                <h4 className="text-lg font-normal text-center py-2 max-w-4xl">When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your </h4>
            </div>
            <div className="items-start mb-8">
                <h2 className="text-3xl font-medium ">Lorem ipsum dolor.</h2>
                <p className="text-md font-normal pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div className="items-start">
                <h2 className="text-3xl font-medium ">Lorem ipsum dolor.</h2>
                <p className="text-md font-normal pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
        </ContainerBox>
    )
}