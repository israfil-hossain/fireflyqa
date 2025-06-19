"use client";

import { logo2 } from "@/assets";
import { getPostBySlug } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { notFound } from "next/navigation";
import Banner from "../common/Banner";

type Props = {
  slug: string;
};

export default function Post({ slug }: Props) {
  const { data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
  });

  if (!data) return notFound();

  return (
    <div className="pb-5 py-10">
      <Banner
        pageName="/ blogs"
        title={
          <>
            {data?.title || "Blogs"} <br />
            <span className="font-uncut text-primary text-4xl">
              {data?.subtitle || ""}
            </span>
          </>
        }
        subtitle=""
        banner={data?.coverImage.url || ""}
        isSchedule={false}
      />
        <div className=" flex items-center justify-center text-lg ">
          <Image
            src={logo2}
            alt={"flowentech"}
            className="rounded-full h-10 w-10 mr-1"
            width={200}
            height={200}
          />
          {"flowentech"}
        </div>
      
      <div
        className="blog-content text-xl leading-loose flex flex-col gap-5 mt-5 lg:px-16 "
        dangerouslySetInnerHTML={{ __html: data!.content.html }}
      />
    </div>
  );
}
