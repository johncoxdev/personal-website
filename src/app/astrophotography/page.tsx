import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

const Astrophotography: React.FC = () => {

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));


  return (
    <main id="astrophotography_page" className="bg-gradient-to-r from-blue-black from-5% to-off-black p-6">
      <div className="text-center text-3xl font-julius text-white py-6 pb-20">
        Astrophotography Entries
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{postPreviews}</div>
    </main>
  )
}

export default Astrophotography;