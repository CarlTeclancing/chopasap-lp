import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const TableWithNoLink = ({ data }) => {

  //locaiton id state 
  const [id, setId ] = useState();

  //getting page location
  const location = useLocation();

  //setting current page for the pagination and setting items per page for the table
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  //this line retuns no data available if no data is found
  if (!data || data.length === 0) return <p>No Data Available!</p>;

  //setting the header for the table
  const headers = Object.keys(data[0]);

  //getting form cell data
  const formCell = (value) => {
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }
    return value;
  };

  //getting values to display per page for the form for pagination

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              {headers.map((header, idx) => (
                <th key={idx}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentData.map((row, i) => (
              <tr key={i} style={{ cursor: "pointer" }}>
                {headers.map((key, j) => (
                  <td key={j}>
                      {formCell(row[key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="pagination-controls" style={{ marginTop: "1rem" }}>
          <button onClick={goToPrevPage} disabled={currentPage === 1} className="btn-sec">
            Prev
          </button>
          <span style={{ margin: "0 10px" }}>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages} className="btn-sec">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TableWithNoLink;
