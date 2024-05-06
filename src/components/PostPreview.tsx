import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { Meteors } from "./ui/meteors";

const PostPreview = (props: PostMetadata) => {
  const fullDate = `${props.date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
  return (
    <div className="z-20 sm:flex sm:justify-center">
      <div className="w-full relative sm:max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-500 to-violet-600 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-blue-black border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {fullDate}
          </h1>
          <Link href={`/posts/${props.slug}`} className="border bg-black px-4 py-1 rounded-lg border-gray-500 text-gray-300 hover:text-light-orange hover:border-light-orange duration-300">
            Discover
          </Link>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;