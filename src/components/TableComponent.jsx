import React from "react";
import { useLocation } from 'react-router-dom';

const Table = ({ data }) => {
 debugger
  if(!data || data.length ===0) return <p>No Data Available!</p>

  //extract headers from object for the table head
  const headers = Object.keys(data[0]);
  //helpers to safely display nested cells

  const formCell = (value) =>{
    //typeof value === 'object' && 
    // if(value !== null){
    //   return JSON.stringify(value);
    // }
    return value;
  }
   
  const Location = useLocation();
  return (


    <>
      <span>{Location.pathname}</span>
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              {headers.map((header, idx)=>(
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

      </div>
    </>
  );
};

export default Table;
