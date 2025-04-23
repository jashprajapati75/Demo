import React, { useMemo } from "react";
import { Button } from "reactstrap";
import { range } from "lodash";

import PageButton from "./PageButton";

import "./pagination.scss";

const Pagination = ({
  paginate,
  handlePaginationClickEvent = () => {},
  isHandlePagination = false,
}) => {
  const { previous, gotoPage, totalPages, page, next } = paginate;

  const startingNavigation = useMemo(
    () => [
      {
        description: "<",
        onClick: previous,
        isActive: +page === 1,
        isFirstOrLast: false,
        isArrowButton: true,
      },
      {
        description: 1,
        onClick: () => gotoPage(1),
        isActive: +page === 1,
        isFirstOrLast: false,
      },
    ],
    [page, previous, gotoPage, totalPages]
  );

  const endingNavigation = useMemo(
    () => [
      {
        description: totalPages,
        onClick: () => gotoPage(totalPages),
        isActive: +page === +totalPages,
        isFirstOrLast: false,
      },
      {
        description: ">",
        onClick: next,
        isActive: +page === +totalPages,
        isFirstOrLast: false,
        isArrowButton: true,
      },
    ],
    [totalPages, page, next, gotoPage]
  );

  const pages = useMemo(() => {
    if (totalPages < 6) {
      return range(2, totalPages).map((num) => ({
        description: num,
        onClick: () => gotoPage(num),
        isActive: +page === +num,
        isFirstOrLast: false,
      }));
    }

    if (page <= 3) {
      return [
        ...range(2, 6).map((num) => ({
          description: num === 5 ? "..." : num,
          onClick: () => gotoPage(num === 5 ? 6 : num),
          isActive: +page === +num,
          isFirstOrLast: num === 5,
        })),
      ];
    }

    if (page > totalPages - 3) {
      return [
        ...range(1, 5).map((num) => ({
          description: num === 1 ? "..." : totalPages - (5 - num),
          onClick: () =>
            gotoPage(num === 1 ? +totalPages - 5 : +totalPages - (5 - num)),
          isActive: +page === +totalPages - (5 - num),
          isFirstOrLast: num === 1,
        })),
      ];
    }

    return [
      {
        description: "...",
        onClick: () => gotoPage(page - 3),
        isActive: false,
        isFirstOrLast: true,
      },
      ...range(1, 4).map((i) => {
        const item = i % 2 === 0 ? page : i === 1 ? page - 1 : page + 1;

        return {
          description: item,
          onClick: () => gotoPage(item),
          isActive: item === page,
          isFirstOrLast: false,
        };
      }),
      {
        description: "...",
        onClick: () => gotoPage(page + 3),
        isActive: false,
        isFirstOrLast: true,
      },
    ];
  }, [page, totalPages, gotoPage]);

  const mobilePages = useMemo(
    () => [
      {
        description: "<<",
        onClick: () => gotoPage(1),
        isActive: page === 1,
        isFirstOrLast: false,
        isArrowButton: true,
      },
      {
        description: "<",
        onClick: previous,
        isActive: page === 1, 
        isFirstOrLast: false,
        isArrowButton: true,
      },
      {
        description: page,
        isFirstOrLast: true,
      },
      {
        description: ">",
        onClick: next,
        isActive: page === totalPages,
        isFirstOrLast: false,
        isArrowButton: true,
      },
      {
        description: ">>",
        onClick: () => gotoPage(totalPages),
        isActive: page === totalPages,
        isFirstOrLast: false,
        isArrowButton: true,
      },
    ],
    [page, totalPages, gotoPage]
  );

  return (
    <>
      {totalPages > 1 && (
        <div className="d-sm-flex d-none justify-content-end flex-wrap gap-2 align-content-center p-1">
          {[...startingNavigation, ...pages, ...endingNavigation].map(
            ({ description, ...rest }, index) => (
              <PageButton
                key={index}
                {...rest}
                handlePaginationClickEvent={handlePaginationClickEvent}
                isHandlePagination={isHandlePagination}
              >
                {description}
              </PageButton>
            )
          )}
        </div>
      )}

      <div className="justify-content-end flex-wrap gap-2 align-content-center mobile-pagination">
        {mobilePages.map(({ description, ...rest }, index) => (
          <PageButton
            key={index}
            {...rest}
            handlePaginationClickEvent={handlePaginationClickEvent}
          >
            {description}
          </PageButton>
        ))}
      </div>
    </>
  );
};

export default Pagination;
