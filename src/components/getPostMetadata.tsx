import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const parseDate = (dateString: string): Date => {
  const months: { [key: string]: number } = {
    "Jan.": 0,
    "Feb.": 1,
    "Mar.": 2,
    "Apr.": 3,
    "May": 4,
    "Jun.": 5,
    "Jul.": 6,
    "Aug.": 7,
    "Sep.": 8,
    "Oct.": 9,
    "Nov.": 10,
    "Dec.": 11,
  };

  const [month, day, year] = dateString.split(" ");
  return new Date(parseInt(year), months[month], parseInt(day.slice(0, -1)));
};

const getPostMetadata = (): PostMetadata[] => {
  const folder = "./src/posts"
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`./src/posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      date: parseDate(matterResult.data.date),
      slug: fileName.replace(".md", ""),
    };
  });
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
};

export default getPostMetadata;