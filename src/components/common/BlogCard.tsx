import { PostMetadata } from "@/lib/types";
import Link from "next/link";
import { Card,CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

type Props = {
  post: PostMetadata;
};

export default function BlogCard({ post }: Props) {
  console.log("post",post)
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <Image
          className="rounded-lg h-full"
          src={post.coverImage.url}
          alt={post.title}
          width={500} 
          height={500}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">
          <Link href={`/blogs/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <div className="mt-3 flex gap-3 items-center">
          {post?.author.profilePicture && (
            <Image
              src={post.author.profilePicture}
              alt="profile"
              className="h-7 w-7 rounded-full"
              width={100} 
              height={100}
            />
          )}{" "}
          {post.author.name}
        </div>
        <p className="text-gray-500 line-clamp-4 mt-3">
          {post.subtitle || post.content.text}
        </p>
        <Link href={`/blogs/${post.slug}`} className="hover:underline">
        read more ... </Link>
      </CardContent>
    </Card>
  );
}