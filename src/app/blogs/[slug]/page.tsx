
import Post from "@/components/blogs/Post";
import { getPostBySlug } from "@/lib/requests";


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {

  return (
    <div className="max-w-7xl w-full px-3 xl:p-0 mx-auto pt-20">
      
        <Post slug={params.slug} />
     
    </div>
  );
}