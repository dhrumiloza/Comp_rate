// // ShowDt.js
// import React, { useState } from 'react';

// const ShowDt = ({ fetchedData }) => {
//   const sortedData = fetchedData && [...fetchedData].sort((a, b) => a.rate - b.rate);
//   const [selectedRow, setSelectedRow] = useState(null);

//   const handleRowClick = (index) => {
//     setSelectedRow(index);
//   };

//   return (
//     <div className="mt-3">
//       {sortedData && sortedData.length > 0 ? (
//         <>
//           <p>Total Records: {sortedData.length}</p>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>No</th>
//                 <th>Name</th>
//                 <th>Rate</th>
//                 <th>Status</th> {/* New column for "Active" or "Inactive" status */}
//               </tr>
//             </thead>
//             <tbody>
//               {sortedData.map((item, index) => (
//                 <tr
//                   key={index}
//                   onClick={() => handleRowClick(index)}
//                   className={selectedRow === index ? 'selected-row' : ''}
//                 >
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>$ {item.rate}</td>
//                   <td>{item.status}</td> {/* Display the "Active" or "Inactive" status */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       ) : (
//         <p></p>
//       )}
//     </div>
//   );
// };

// export default ShowDt;

import React, { useState } from 'react';

const ShowDt = ({ fetchedData }) => {
  // Filter out "Inactive" data
  const activeData = fetchedData && fetchedData.filter(item => item.status === 'Active');

  // Sort the active data based on the "rate" field in ascending order
  const sortedData = activeData && [...activeData].sort((a, b) => a.rate - b.rate);

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  return (
    <div className="mt-3">
      {sortedData && sortedData.length > 0 ? (
        <>
          <p>Total Records: {sortedData.length}</p>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Rate</th>
                {/* <th>Status</th> */}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(index)}
                  className={selectedRow === index ? 'selected-row' : ''}
                >
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>$ {item.rate}</td>
                  {/* <td>{item.status}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No active data available.</p>
      )}
    </div>
  );
};

export default ShowDt;

