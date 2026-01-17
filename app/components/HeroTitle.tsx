type HeroTitleProps = {
  text: string;
  highlights: string[];
  underlineHighlights?: string[];
  strikeHighlights?: string[];
};

export default function HeroTitle({
  text,
  highlights,
  underlineHighlights = [],
  strikeHighlights = [],
}: HeroTitleProps) {
  const parts: {
    value: string;
    highlighted: boolean;
    underlined?: boolean;
    striked?: boolean;
  }[] = [];
  let remaining = text;

  while (remaining.length) {
    const matches = highlights
      .map((highlight) => ({
        highlight,
        index: remaining.toLowerCase().indexOf(highlight.toLowerCase()),
      }))
      .filter((match) => match.index >= 0)
      .sort((a, b) => a.index - b.index);

    if (!matches.length) {
      parts.push({ value: remaining, highlighted: false });
      break;
    }

    const { highlight, index } = matches[0];
    if (index > 0) {
      parts.push({ value: remaining.slice(0, index), highlighted: false });
    }
    const value = remaining.slice(index, index + highlight.length);
    const normalized = highlight.toLowerCase();
    parts.push({
      value,
      highlighted: true,
      underlined: underlineHighlights.some(
        (word) => word.toLowerCase() === normalized
      ),
      striked: strikeHighlights.some(
        (word) => word.toLowerCase() === normalized
      ),
    });
    remaining = remaining.slice(index + highlight.length);
  }

  return (
    <h1 className="text-balance text-center text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
      {parts.map((part, index) => (
        <span
          key={`${part.value}-${index}`}
          className={
            part.highlighted
              ? `text-[#66d1a7] ${
                  part.underlined
                    ? "underline decoration-[#66d1a7] decoration-2 underline-offset-8"
                    : ""
                } ${
                  part.striked
                    ? "line-through decoration-black decoration-2"
                    : ""
                }`
              : undefined
          }
        >
          {part.value}
        </span>
      ))}
    </h1>
  );
}
