import React, { useMemo, useState } from "react";
import {
  Container,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col,
  Input,
} from "reactstrap";
import Navbar1 from "./AssistantsHeader";
// import { Outlet } from "react-router-dom";
import BaseTable from "../../BaseTable1";
// import BaseTable from "../../Components/Common/BaseTable/index";
// import BaseTable from "../../Components/Common/BaseTable";
import { Outlet,useLocation } from 'react-router-dom'

const data = [
  {
    name: "Mark",
    engine: "Otto",
    phone1: "@mdo",
    edited: "Otto",
    type: "@mdo",
  },
  {
    name: "Jacob",
    engine: "Thornton",
    phone1: "@fat",
    edited: "Otto",
    type: "@mdo",
  },
  {
    name: "Larry",
    engine: "the Bird",
    phone1: "@twitter",
    edited: "Otto",
    type: "@mdo",
  },
  {
    name: "Anna",
    engine: "Vega",
    phone1: "@anna",
    edited: "2024-02-01",
    type: "AI",
  },
  {
    name: "Tom",
    engine: "Cruise",
    phone1: "@tc",
    edited: "2024-03-10",
    type: "Human",
  },
  {
    name: "Lucy",
    engine: "Sky",
    phone1: "@lucy",
    edited: "2024-01-15",
    type: "Bot",
  },
  {
    name: "Jane",
    engine: "VoiceX",
    phone1: "@jane",
    edited: "2024-04-01",
    type: "AI",
  },
  {
    name: "Bob",
    engine: "Boom",
    phone1: "@bob",
    edited: "2024-03-12",
    type: "Bot",
  },
  {
    name: "Alice",
    engine: "Echo",
    phone1: "@alice",
    edited: "2024-04-10",
    type: "Human",
  },
  {
    name: "Eve",
    engine: "Evo",
    phone1: "@eve",
    edited: "2024-04-11",
    type: "AI",
  },
];

function Assistants() {
  const [currentPage, setCurrentPage] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [searchQuery, setSearchQuery] = useState("");
  // const totalPages = Math.ceil(data.length / rowsPerPage);
  // const indexOfLastItem = currentPage * rowsPerPage;
  // const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
const pathname=useLocation();
console.log(pathname);

  // const handleRowsPerPageChange = (e) => {
  //   setRowsPerPage(Number(e.target.value));
  //   setCurrentPage(1); 
  // };

  // const handlePrev = () => {
  //   if (currentPage > 1) setCurrentPage(currentPage - 1);
  // };

  // const handleNext = () => {
  //   if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  // };
  // console.log([...Array(totalPages)]);

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  const column = useMemo(() => {
    return [
      {
        title: "NAME",
        field: "name",
        columnProps:{
          style:{
            width:"50%"
          }
        }
      },
      {
        title: "VOICE ENGINE",
        field: "engine",
        cellProps: {
          className: "text-center",
        }
        
      },
      {
        title: "PHONE NUMBER",
        field: "phone1",
      },
      {
        title: "LAST EDITED",
        field: "edited",
      },
      {
        title: "TYPE",
        field: "type",
      }
    ];
  }, []);
  
  return (
    <React.Fragment>
      {/* <div className="page-content"> */}
        {/* <Navbar1 /> */}
    <Container fluid>
      <BaseTable
      columns={column}
      data={data}
      // striped
      paginationType={"clientSide"}
      headerClassName="table-light"
      rowClassName=""
      className="bg-white mb-0"
      rowDataClassName=""
      />
     
      {/* <div className="table-responsive">
        <Table hover className="border border-black bg-white mb-0">
          <thead>
            <tr>
              <th>ASSISTANT NAME</th>
              <th>VOICE ENGINE</th>
              <th>PHONE NUMBER</th>
              <th>PHONE NUMBER</th>
              <th>LAST EDITED</th>
              <th>TYPE</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.engine}</td>
                <td>{item.phone1}</td>
                <td>{item.phone2}</td>
                <td>{item.edited}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Row className="align-items-center mt-3">
        <Col xs="12" md="6" className="text-md-end text-center mb-2 mb-md-0">
          <Pagination className="justify-content-center justify-content-md-end">
            <PaginationItem disabled={currentPage === 1}>
              <PaginationLink previous onClick={handlePrev} />
            </PaginationItem>

            <PaginationItem disabled>
              <PaginationLink>
                Page {currentPage} of {totalPages}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem disabled={currentPage === totalPages}>
              <PaginationLink next onClick={handleNext} />
            </PaginationItem>
          </Pagination>
        </Col>

        <Col xs="12" md="6" className="text-md-start text-center">
          <div className="d-flex justify-content-center justify-content-md-start align-items-center">
            <span className="me-2">Rows per page:</span>
            <Input
              type="select"
              style={{ width: "100px" }}
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </Input>
          </div>
        </Col>
      </Row> */}
    </Container>
      {/* </div> */}
    </React.Fragment>
  );
}
export default Assistants;