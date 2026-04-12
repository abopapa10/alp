const STAR_D =
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

type StarIconProps = {
  filled: boolean;
  className?: string;
};

export function StarIcon({ filled, className = "size-4 shrink-0" }: StarIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill={filled ? "#FBBF24" : "#E5E7EB"} d={STAR_D} />
    </svg>
  );
}

type StarRatingProps = {
  value: number;
  maxStars?: number;
  starClassName?: string;
  className?: string;
};

export function StarRating({ value, maxStars = 5, starClassName, className = "flex gap-0.5" }: StarRatingProps) {
  return (
    <div className={className} role="img" aria-label={`${value} üzerinden ${maxStars} yıldız`}>
      {Array.from({ length: maxStars }, (_, i) => (
        <StarIcon key={i} filled={i < value} className={starClassName ?? "size-4 shrink-0"} />
      ))}
    </div>
  );
}
