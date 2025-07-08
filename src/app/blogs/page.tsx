import Blog from "@/components/blogs/Blog";
import Banner from "@/components/common/Banner";
import { Newsletter } from "@/components/common/Newsletter";

export default async function Page() {
  return (
    <div className="min-h-screen">
      <Banner
        pageName="/ blogs"
        title={
          <>
            Industry 
            <span className="font-uncut text-primary text-5xl pl-2">Insights</span>
          </>
        }
        isSchedule={false}
        subtitle="Stay updated with the latest trends, best practices, and insights from Qatar's leading contracting and hospitality service provider."
      />
      <Blog />

      <div className="mb-24">
        <Newsletter />
      </div>
    </div>
  );
}
