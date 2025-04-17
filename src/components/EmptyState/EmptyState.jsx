import { FaFilm } from "react-icons/fa";
import { EmptyStateContainer, Icon, Title, Description } from "./styles";

/**
 * Component to display when there are no items to show
 * @param {Object} props
 * @param {string} props.title - The title to display
 * @param {string} props.description - The description text to display
 */
export const EmptyState = ({ title, description }) => {
  return (
    <EmptyStateContainer>
      <Icon>
        <FaFilm />
      </Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </EmptyStateContainer>
  );
};
