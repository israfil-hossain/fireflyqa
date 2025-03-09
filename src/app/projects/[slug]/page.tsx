import ContainerBox from "@/components/layout/ContainerBox";
import { SingleProduct } from "@/components/projects/single-project/Product";

import { getSingleProject } from "@/lib/query";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

// Page component
export default async function SingleProjectPage({ params }: { params: any }) {
  // Fetch the product using the slug
  const product = await getSingleProject(params.slug);

  // Redirect if the product doesn't exist
  if (!product) {
    redirect("/projects");
  }

  return (
    <ContainerBox>
      <Link
        type="button"
        href="/projects"
        aria-label="Go back to articles"
        className="mt-8 group mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  "
      >
        <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d" />
      </Link>
      <SingleProduct project={product} />
    </ContainerBox>
  );
}
