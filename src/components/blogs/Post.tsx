"use client";
import { motion } from "framer-motion";
import { singleBlogPosts } from "@/constants/blog";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from "lucide-react";


type Props = {
  slug: string;
};

export default function Post({ slug }: Props) {
 
  const post = singleBlogPosts.find(p => p.id === parseInt(slug || "1"));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/blogs">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }


  return (
   <div className="min-h-screen bg-background pt-28">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blogs" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
              {post.category}
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div 
            className="text-foreground leading-relaxed"
            style={{ 
              fontSize: '1.125rem',
              lineHeight: '1.75',
              whiteSpace: 'pre-line'
            }}
          >
            {post.content}
          </div>
        </motion.article>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Share and Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Button variant="outline" size="sm" className="group">
              <Share2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Share Article
            </Button>
            
            <Link href="/blogs">
              <Button className="group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                More Articles
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
