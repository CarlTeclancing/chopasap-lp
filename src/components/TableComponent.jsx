import React from "react";

const Table = ({ data }) => {

  if(!data || data.length ===0) return <p>No Data Available!</p>

  //extract headers from object for the table head
  const headers = object.keys(data[0]);
  //helpers to safely display nested cells

  const formCell = (value) =>{
    if(typeof value === 'object' && value !==null){
      return JSON.stringify(value);
    }
    return value;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            {headers.map((header, idx)(
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {data.map((row, i)=>{
              {headers.map((key, j)=>(
                <td key={j}>{formCell(row[key])}</td>
              ))}
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
