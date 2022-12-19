import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundText,
  LinkToMain,
} from "./not-found.styled";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>OOPS! Page not found =( </NotFoundHeading>
      <NotFoundText>
        You can go to <LinkToMain to="/">Main</LinkToMain> page.
      </NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;
