import React, { useCallback, useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import PropTypes from "prop-types";
import { omit, orderBy } from "lodash";
import { useLocation } from "react-router-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import { useLazyCachedGetQuery } from "../../../slices/api";
// import {
//   useHealthrayLazyCachedGetQuery,
//   useHealthrayLazyNoCachedQuery,
//   useHealthrayPostMutation,
// } from "../../../slices/healthrayApi";

// import Loader from "../Loader";
import Row from "./ScrolledRows";
import FixedRow from "./FixedRow";
import Pagination from "./Pagination";
import PerPage from "./PerPage";

const valuesToFilterForQuery = [null, "", undefined];

const usePagination = (defaultDataLength) => {
  const { pathname } = useLocation();

  const currentPage = JSON.parse(
    localStorage.getItem(`ROUTE_${pathname}/page`)
  ) ?? { page: 1, pageSize: defaultDataLength };

  const [page, setPage] = useState(currentPage.page);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState({
    label: currentPage.pageSize,
    value: currentPage.pageSize,
  });

  const next = useCallback(() => setPage((prev) => prev + 1), []);
  const previous = useCallback(() => setPage((prev) => prev - 1), []);
  const first = useCallback(() => setPage(1), []);
  const last = useCallback(() => setPage(totalPages), [totalPages]);
  const gotoPage = useCallback((page) => setPage(page), []);
  const changePageSize = useCallback((value) => setPageSize(value), []);

  return {
    page,
    totalPages,
    pageSize,
    changePageSize,
    setTotalPages,
    next,
    previous,
    first,
    last,
    gotoPage,
  };
};

const reorderItems = (items, sourceSequence, destinationSequence) => {
  if (sourceSequence === destinationSequence) return items;

  // down direction drag
  if (sourceSequence < destinationSequence) {
    return items.map((item) => {
      if (
        item.sequence > sourceSequence &&
        item.sequence <= destinationSequence
      ) {
        return { ...item, sequence: item.sequence - 1 };
      }

      if (item.sequence === sourceSequence) {
        return { ...item, sequence: destinationSequence };
      }

      return item;
    });
  }

  // up direction drag
  return items.map((item) => {
    if (
      item.sequence < sourceSequence &&
      item.sequence >= destinationSequence
    ) {
      return { ...item, sequence: item.sequence + 1 };
    }

    if (item.sequence === sourceSequence) {
      return { ...item, sequence: destinationSequence };
    }

    return item;
  });
};

const BaseTable = ({
  columns,
  data = [],
  id = "",
  reorderable = false,
  rowsToEdit = [],
  apiResponse = () => {},
  reorderApi,
  isResponsive = true,
  striped = false,
  bordered = false,
  className = "",
  style = {},
  headerClassName = "",
  bodyClassName = "",
  rowClassName = "bg-dark",
  rowDataClassName="",
  pagination = true,
  defaultDataLength = 25,
  paginationType = "clientSide",
  serverSidePaginationConfig = {
    endpoint: "",
    tags: [],
    query: null,
    isToastify: false,
    cached: true,
  },
  registerResetPage = () => {},
  onLoadTable = () => {},
  isExpandable = false,
  isDefaultExpanded = false,
  renderSubRow = null,
  isHealthray = false,
  renderExtraRow = null,
  isExtraRow = false,
  handlePaginationClickEvent = () => {},
  isHandlePagination = false,
  onScroll = () => {},
  tableRef = null,
}) => {
  const [rowData, setRowData] = useState([]);
  const [isAllExpanded, setIsAllExpanded] = useState(isDefaultExpanded);
  const [isLoadingPagination, setIsLoadingPagination] = useState(false);
  const paginate = usePagination(defaultDataLength);
  const { page, setTotalPages, first, pageSize, changePageSize } = paginate;

  const [isPending, setIsPending] = useState(false);

  const [isDragDisabled, setIsDragDisabled] = useState(false);
  useEffect(() => {
    if (!pagination) {
      setRowData(data);
    }
  }, [pagination, data]);

  useEffect(() => {
    if (pagination && paginationType === "clientSide") {
      setTotalPages(Math.ceil(data.length / pageSize.value));
      const rowData = data.slice(
        pageSize.value * (page - 1),
        pageSize.value * page
      );
      setRowData(rowData);
    }
  }, [page, pageSize, paginationType, data, pagination]);

  useEffect(() => {
    registerResetPage(first);
  }, []);

  useEffect(() => {
    onLoadTable(omit(paginate, "setTotalPages"));
  }, [paginate]);

  useEffect(() => {
    if (reorderable && reorderApi) {
      const isDragDisabled =
        rowData.some(({ id }) => `${id}`.startsWith("NEW_CAT")) ||
        !!rowsToEdit.length;

      setIsDragDisabled(isDragDisabled);
    }
  }, [rowData, rowsToEdit]);

  useEffect(() => {
    if (tableRef?.current) {
      tableRef.current.scrollTop = +localStorage.getItem("tableScroll") || 0;
    }
  }, [rowData, tableRef]);

  const onDragEnd = async (result) => {
    if (!result.destination) {
      return;
    }

    const srcSequence = rowData[result.source.index].sequence;
    const destSequence = rowData[result.destination.index].sequence;

    const orderedData = reorderItems(rowData, srcSequence, destSequence);
    const updatedData = orderBy(orderedData, "sequence", "asc");

    setRowData(updatedData);

    if (reorderable && reorderApi) {
      setIsPending(true);
      await reorderApi(
        +result.draggableId,
        {
          sequence: destSequence,
        },
        updatedData
      );
      setIsPending(false);
    }
  };

  return (
    <div
      className={isResponsive ? "table-responsive border rounded-3" : ""}
      onScroll={onScroll}
      ref={tableRef}
    >
      <Table
        id={id} 
        striped={striped}
        bordered={bordered}
        className={className}
        style={style}
      >
        <thead className={headerClassName}>
          <tr>
            {isExpandable && !!rowData.length && (
              <th className="py-1" style={{ width: "40px" }}>
                <Button
                  className="p-0 bg-transparent border-0 text-dark"
                  onClick={() => setIsAllExpanded((prev) => !prev)}
                  tabIndex="-1"
                >
                  <i
                    className={`${
                      isAllExpanded
                        ? "mdi mdi-chevron-double-down"
                        : "mdi mdi-chevron-double-right"
                    } ri-xl`}
                  />
                </Button>
              </th>
            )}
            {columns.map((column, index) => (
              <th
                key={column.field || index}
                {...(column.columnProps ?? {})}
                className={!column.title ? "p-0" : "py-2"}
              >
                <p className="mb-2" style={{fontSize:'12.1px'}}>
                {column.title}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        {reorderable && reorderApi ? (
                <tbody
                  className={bodyClassName}
                >
                  {rowData.length ? (
                    rowData.map((item, index) => (
                            <Row
                              rowClassName={rowClassName}
                              item={item}
                              columns={columns}
                              rowIndex={index}
                              page={page}
                            />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={columns.length} className="text-center">
                        No Data Available!
                      </td>
                    </tr>
                  )}
                </tbody>
        ) : (
          <tbody className={bodyClassName}>
            {rowData.length ? (
              rowData.map((item, rowIndex) => (
                <FixedRow
                  key={item.id}
                  rowClassName={rowClassName}
                  rowIndex={rowIndex}
                  columns={columns}
                  page={page}
                  item={item}
                  isExpandable={isExpandable}
                  isAllExpanded={isAllExpanded}
                  renderSubRow={renderSubRow}
                  isExtraRow={isExtraRow}
                  renderExtraRow={renderExtraRow}
                  perPage={pageSize.value}
                />
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  No Data Available!
                </td>
              </tr>
            )}
      {pagination && (
        <div className="d-flex justify-content-between align-items-center bg-white ">
          <PerPage
            setPageSize={changePageSize}
            pageSize={pageSize}
            resetPage={first} // Pass the resetPage function as a prop
          />

          <Pagination
            paginate={paginate}
            handlePaginationClickEvent={handlePaginationClickEvent}
            isHandlePagination={isHandlePagination}
          />
        </div>
      )}
          </tbody>
        )}
      </Table>
    </div>
  );
};

BaseTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  paginationType: PropTypes.oneOf(["serverSide", "clientSide"]),
  reorderable: PropTypes.bool,
};

BaseTable.defaultProps = {
  columns: [
   
  ],
  data: [],
  striped: false,
  bordered: false,
  id: "",
  className: "",
  style: {},
  headerClassName: "",
  bodyClassName: "",
  rowDataClassName:"",
};

export default BaseTable;
