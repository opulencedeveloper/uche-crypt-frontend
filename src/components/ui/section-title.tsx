export default function SectionTitle({
  title,
  color,
  background,
}: {
  title: string;
  color?: string;
  background?: string;
}) {
  return (
    <div
      style={{ backgroundColor: background ? background : "#0066330d" }}
      className="px-6 h-35 rounded-full flex justify-center items-center"
    >
      <p
        style={{ color: color ? color : "#006633" }}
        className=" text-lg font-normal"
      >
        {title}
      </p>
    </div>
  );
}
