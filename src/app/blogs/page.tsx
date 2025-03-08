import Blog from "@/components/blogs/Blog";
import Banner from "@/components/common/Banner";
import { getPosts } from "@/lib/requests";
import { PostMetadata } from "@/lib/types";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (
      lastPage: { node: PostMetadata; cursor: string }[] | undefined
    ) => {
      // If lastPage is undefined or has fewer than 9 items, return undefined
      if (!lastPage || lastPage.length < 9) {
        return undefined;
      }
      // Otherwise, return the cursor of the last item
      return lastPage[lastPage.length - 1].cursor;
    },
    initialPageParam: "",
  });

  return (
    <div>
      <Banner
        pageName="blogs"
        title="Our Blogs: Insights, Trends, and Innovation"
        subtitle="Welcome to our blog, where we share insights, strategies, and the latest trends in digital innovation. From expert tips on design and development to deep dives into the technology that powers modern digital experiences, our blog is here to inform and inspire."
        optionalBg={
          <div className="relative ">
            <div className="absolute  inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-3 h-68"></div>
            <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl ">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4 h-40">
                <div className="h-8 pl-5 pt-1 bg-gray-700 rounded w-3/4 text-white ">
                 Insights, Trends, and Innovation
                </div>
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-6 text-[12px] pl-5 pt-1 bg-gray-700 rounded text-gray-300  ">
                  We help teams create great digital products ...
                </div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        }
      />
    <main className="max-w-7xl w-full px-3 xl:p-0 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Blog />
        </HydrationBoundary>
      </div>
    </main>
    </div>
  );
}
