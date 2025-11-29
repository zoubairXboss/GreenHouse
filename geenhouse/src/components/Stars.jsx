import React from "react";
import { Star, StarHalf, Star as StarEmpty } from "lucide-react";

const Stars = ({ rating }) => {
  const totalStars = 5;

  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      {Array.from({ length: totalStars }, (_, i) => {
        if (rating >= i + 1) {
          return <Star key={i} color="#FACC15" size={20} />;
        } else if (rating > i && rating < i + 1) {
          return <StarHalf key={i} color="#FACC15" size={20} />;
        } else {
          return <StarEmpty key={i} color="#D1D5DB" size={20} />;
        }
      })}
      <span style={{ marginLeft: "8px", color: "#6B7280" }}>{rating.toFixed(1)}</span>
    </div>
  );
};

export default Stars;