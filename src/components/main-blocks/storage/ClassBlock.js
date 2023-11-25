export default function ClassBlock({ icon, title, productsCount, selected }) {
  return (
    <div className="class-block" data-css={selected ? "selected" : ""}>
      <div className="class-icon">{icon}</div>
      <div className="class-title">{title}</div>
      <div className="class-subtitle">
        {productsCount +
          (productsCount > 1 ? " products " : " product ") +
          "available"}
      </div>
    </div>
  );
}
