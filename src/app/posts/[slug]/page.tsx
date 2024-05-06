import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "./src/posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="bg-gradient-to-r from-blue-black from-5% to-off-black min-h-screen">
      <a href="/#astrophotography_page" className='hidden z-20 sm:inline-flex absolute top-10 left-10 hover:scale-105 duration-300'>
        <div className='rounded-full items-center justify-center flex outline outline-stone-800 outline-1 bg-blue-black w-32 h-12'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr-1">
            <path  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className='font-julius font-medium text-md text-white'>Back</p> 
        </div>
      </a>
      <div className="my-12 text-center ">
        <p className="text-light-orange font-julius text-3xl mt-2">{post.data.date}</p>
      </div>

      <article className="prose bg-gradient-to-r from-blue-black from-5% to-off-black">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;