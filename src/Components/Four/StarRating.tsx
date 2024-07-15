import { useState } from "react";

const StarRating = (): React.ReactElement => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="mt-4 flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hover ?? rating ?? 0);
        return (
          <div
            key={star}
            className={`cursor-pointer rounded-md border-2 p-1 ${isFilled ? "border-yellow-500" : "border-indigo-50"}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`h-8 w-8 ${isFilled ? "text-yellow-500" : "text-gray-400"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
