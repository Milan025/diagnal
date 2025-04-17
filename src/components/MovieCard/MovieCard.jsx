import { useState } from "react";
import { Card, Image, Title, Fallback, FallbackIcon } from "./styles";

export const MovieCard = ({ name, imageUrl }) => {
  const [imageError, setImageError] = useState(false);

  if (!name || !imageUrl) {
    return null;
  }

  return (
    <Card>
      {imageError ? (
        <Fallback>
          <FallbackIcon>🎬</FallbackIcon>
        </Fallback>
      ) : (
        <Image
          src={imageUrl}
          alt={name}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      )}
      <Title>{name}</Title>
    </Card>
  );
};
