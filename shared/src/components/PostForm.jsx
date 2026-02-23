import { useState } from "react";

const CATEGORIES = [
  "Technology",
  "Lifestyle",
  "Travel",
  "Food",
  "Health",
  "Business",
  "Other",
];

const PostForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    tags: "",
    content: "",
    image: null,
    published: false,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setForm((prev) => ({ ...prev, image: null }));
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
    if (onSubmit) onSubmit(form);
  };

  if (submitted) {
    return (
      <div className="card bg-base-100 shadow-xl p-10 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-success mb-2">Post Created!</h2>
        <p className="text-base-content/60 mb-6">
          Your post has been successfully{" "}
          {form.published ? "published" : "saved as draft"}.
        </p>
        <div className="flex justify-center gap-3">
          <button
            className="btn btn-primary"
            onClick={() => setSubmitted(false)}
          >
            Create Another
          </button>
          <a href="/" className="btn btn-ghost">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card bg-base-100 shadow-xl p-8 space-y-6"
    >
      {/* Title */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">
            Post Title <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter a catchy title..."
          className="input input-bordered w-full focus:input-primary"
          required
        />
      </div>

      {/* Category */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">
            Category <span className="text-error">*</span>
          </span>
        </label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="select select-bordered w-full focus:select-primary"
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Tags */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Tags</span>
          <span className="label-text-alt text-base-content/50">
            Comma separated
          </span>
        </label>
        <input
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="e.g. react, design, tips"
          className="input input-bordered w-full focus:input-primary"
        />
        {form.tags && (
          <div className="flex flex-wrap gap-2 mt-3">
            {form.tags
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean)
              .map((tag) => (
                <span key={tag} className="badge badge-primary badge-outline">
                  {tag}
                </span>
              ))}
          </div>
        )}
      </div>

      {/* Cover Image */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Cover Image</span>
        </label>
        {preview ? (
          <div className="relative rounded-xl overflow-hidden border border-base-300">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-52 object-cover"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="btn btn-sm btn-error absolute top-2 right-2"
            >
              ✕ Remove
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-base-300 rounded-xl cursor-pointer hover:border-primary hover:bg-base-200 transition-all">
            <div className="text-center">
              <div className="text-4xl mb-2">🖼️</div>
              <p className="text-sm text-base-content/60">
                Click to upload a cover image
              </p>
              <p className="text-xs text-base-content/40 mt-1">
                PNG, JPG up to 10MB
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        )}
      </div>

      {/* Content */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">
            Content <span className="text-error">*</span>
          </span>
          <span className="label-text-alt text-base-content/50">
            {form.content.length} chars
          </span>
        </label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Write your post content here..."
          rows={8}
          className="textarea textarea-bordered w-full focus:textarea-primary resize-none leading-relaxed"
          required
        />
      </div>

      {/* Divider */}
      <div className="divider">Options</div>

      {/* Publish Toggle */}
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-4">
          <input
            type="checkbox"
            name="published"
            checked={form.published}
            onChange={handleChange}
            className="toggle toggle-primary"
          />
          <span className="label-text font-semibold">
            {form.published ? "Publish immediately" : "Save as draft"}
          </span>
        </label>
        <p className="text-xs text-base-content/50 ml-16">
          {form.published
            ? "Your post will be visible to everyone right away."
            : "Your post will be saved privately and can be published later."}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-2">
        <a href="/" className="btn btn-ghost">
          Cancel
        </a>
        <button
          type="submit"
          className={`btn btn-primary min-w-[140px] ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : form.published
              ? "🚀 Publish"
              : "💾 Save Draft"}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
