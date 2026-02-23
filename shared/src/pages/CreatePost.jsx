import PostForm from "../components/PostForm";
import PageHeader from "../components/PageHeader";

const CreatePost = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <PageHeader
          title="Create a Post"
          subtitle="Share your thoughts with the world"
          backLabel="← Back"
          backHref="/"
        />
        <PostForm />
      </div>
    </div>
  );
};

export default CreatePost;
