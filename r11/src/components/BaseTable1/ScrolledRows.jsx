import React, { useRef } from "react";
import { get } from "lodash";

const Row = ({
  rowClassName,
  columns,
  item,
  rowIndex,
  page,
  provided,
  snapshot,
}) => {
  const ref = useRef();

  return (
    <tr
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={rowClassName}
      style={{
        ...provided.draggableProps.style,
        backgroundColor: "#FFFFFF",
        boxShadow: snapshot.isDragging ? "0px 0px 3px #0275d8" : "",
      }}
    >
      {columns.map((column, index) => (
        <td
          key={column.field || index}
          className="py-1"
          style={{
            width:
              snapshot?.isDragging && provided.draggableProps?.style?.width,
          }}
        >
          <p className="float-right">

          {column.field
            ? get(item, column.field) || "--"
            : column.renderCell && column.renderCell(item, rowIndex, page, ref)}
          </p>
        </td>
      ))}
    </tr>
  );
};

export default Row;
