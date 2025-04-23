import React, { useState } from "react";
import { Skeleton } from "../Skeleton/Skeleton";
import {
  Card,
  ImageContainer,
  MovieImage,
  MovieTitle,
  LoaderContainer,
} from "./styles";
import { FadeLoader } from "react-spinners";

const MovieCard = ({ name, imageUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setIsLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
    setImageLoaded(true);
  };

  return (
    <Card>
      <ImageContainer>
        {isLoading && !imageError && (
          <Skeleton
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: 0,
            }}
          />
        )}
        {imageError && (
          <LoaderContainer>
            <FadeLoader
              color="#ffffff"
              loading={true}
              size={50}
              aria-label="Loading Spinner"
            />
          </LoaderContainer>
        )}
        {!imageError && (
          <MovieImage
            src={imageUrl}
            alt={name}
            onLoad={handleImageLoad}
            onError={handleImageError}
            isLoaded={imageLoaded}
            loading="lazy"
          />
        )}
      </ImageContainer>
      <MovieTitle>{name}</MovieTitle>
    </Card>
  );
};

export default MovieCard;
