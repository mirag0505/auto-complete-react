type Props = { text: string; highlight: string };

export const Highlighted = ({ text = "", highlight = "" }: Props) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  function escapeRegex(text: string) {
    return text.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  const regex = new RegExp(`(${escapeRegex(highlight)})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </span>
  );
};
