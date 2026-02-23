const PageHeader = ({ title, subtitle, backLabel, backHref }) => {
  return (
    <div className="mb-8">
      {backHref && (
        <a
          href={backHref}
          className="btn btn-ghost btn-sm mb-4 text-base-content/70 hover:text-base-content"
        >
          {backLabel || "← Back"}
        </a>
      )}
      <h1 className="text-4xl font-extrabold tracking-tight text-base-content">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-base-content/60 text-lg">{subtitle}</p>
      )}
      <div className="divider mt-4" />
    </div>
  );
};

export default PageHeader;
