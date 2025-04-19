import React, { useState } from "react";
import { Skeleton } from "../Skeleton/Skeleton";
import { Card, ImageContainer, MovieImage, MovieTitle } from "./styles";

const MovieCard = ({ name, imageUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Card>
      <ImageContainer>
        {!imageLoaded && (
          <Skeleton
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: 0,
            }}
          />
        )}
        <MovieImage
          src={imageUrl}
          alt={name}
          onLoad={handleImageLoad}
          isLoaded={imageLoaded}
          loading="lazy"
        />
      </ImageContainer>
      <MovieTitle>{name}</MovieTitle>
    </Card>
  );
};

export default MovieCard;
