import { Button } from "reactstrap";

const PageButton = ({
  children,
  onClick = () => {},
  isActive,
  isFirstOrLast,
  isArrowButton = false,
  handlePaginationClickEvent = () => {},
  isHandlePagination = false,
}) => (
  <Button
    className={`page-item pagination-prev text-black ${
      isActive ? "disabled text-white" : ""
    } ${isFirstOrLast ? "border-0" : "border-1"} ${
      isArrowButton ? "bg-primary text-white" : ""
    }`}
    color={`${isActive ? "primary" : "light"}`}
    onClick={() => {
      if (isHandlePagination) {
        handlePaginationClickEvent(onClick);
      } else {
        onClick();
      }
    }}
  >
    {children}
  </Button>
);

export default PageButton;
