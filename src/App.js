import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar';
import ShowDt from './Component/ShowDt';

function App() {
  const [fetchedData, setFetchedData] = useState(null);

  const updateFetchedData = (data) => {
    setFetchedData(data);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<NavBar updateFetchedData={updateFetchedData} />}
          > 
          </Route>
          {/* <Route
            path="/ShowDt"  element={<ShowDt fetchedData={fetchedData} />}
          /> */}
          
        </Routes>
      </BrowserRouter>
     
          
    </>
  );
}

export default App;
