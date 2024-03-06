// NavBar.js
import React, { useState, useEffect } from 'react';
import ShowDt from './ShowDt';

const NavBar = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [level, setLevel] = useState('');
  const [region, setRegion] = useState('');
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
    setLevel('');
    setRegion('');
  }; 
  
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
    setRegion('');
  };
  
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  // Inside the fetchData function in NavBar.js
// Inside the fetchData function in NavBar.js
const fetchData = async () => {
  try {
    console.log('Fetching data...');
    if (jobTitle && level && region) {
      const response = await fetch(`http://localhost:8080/api/companies?jobTitle=${jobTitle}&skillLevel=${level}&region=${region}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data from API:', data);
      setFetchedData(data);
    } else {
      setFetchedData(null);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    setFetchedData(null);
  }
};



  useEffect(() => {
    fetchData();
  }, [region, level, jobTitle]);
  
  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetchData();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleHomeClick = () => {
    setJobTitle('');
    setLevel('');
    setRegion('');
    setFetchedData(null);
  };

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={handleHomeClick}>
            HOME/CLEAR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <form className="d-flex align-items-center">
              {/* Job Title Dropdown */}
              <div className="form-group mr-3 mx-5">
                <label htmlFor="jobTitleSelect" className="text-light">
                  JOB TITLE
                </label>
                <select
                  className="form-control"
                  id="jobTitleSelect"
                  onChange={handleJobTitleChange}
                  value={jobTitle}
                >
                  <option value="">Select Job Title</option>
            
                  <option value="Business Analyst">Business Analyst</option>
                  <option value="Cloud Engineer">Cloud Engineer</option>
                  <option value="Database Architect">Database Architect</option>
                  <option value="Database Administrator">Database Administrator</option>
                  <option value="Database Manager"> Database Manager</option>
            

                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Help Desk Manager">Help Desk Manager</option>
                  <option value="IT Manager">IT Manager</option>
                  <option value="IT Specialist">IT Specialist</option>
                  <option value="Network Administrator">Network Administrator</option>
                  <option value="Network Architect">Network Architect</option>
                  <option value="Operations Manager">Operations Manager</option>
                  
                 
                  <option value="Programmer">Programmer</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Security Analyst">Security Analyst</option>
                  <option value="Security Manager">Security Manager</option>
                  <option value="Software Analyst">Software Analyst</option>
                  <option value="Software Architect">Software Architect</option>



                  <option value="Software Developer">Software Developer</option>
                  <option value="Software Manager">Software Manager</option>
                  <option value="Systems Administrator">Systems Administrator</option>
                  <option value="Systems Analyst">Systems Analyst</option>
                  <option value="Systems Architect">Systems Architect</option>
                  <option value="Systems Developer">Systems Developer</option>


                  <option value="Technical Writer">Technical Writer</option>
                  <option value="Tester">Tester</option>
                  <option value="Training Developer">Training Developer</option>
                  <option value="Web Administrator">Web Administrator</option>
                  <option value="Web Designer">Web Designer</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="Web Manager">Web Manager</option>
                  
            
         </select>
              </div>

               {/* Level Dropdown */}
            <div className="form-group mr-3 mx-4">
              <label htmlFor="levelSelect" className="text-light">
                LEVEL
              </label>
              <select
                className="form-control"
                id="levelSelect"
                onChange={handleLevelChange}
                value={level}
              >
                  <option value="">Select Level</option>
                  <option value="Junior">JUNIOR</option>
                  <option value="Mid-Level">MID LEVEL</option>
                  <option value="Senior">Senior</option>
                  <option value="Expert">Expert</option>
                 
                </select>
              </div>
             
             
             
             
              {/* Region Dropdown */}
            <div className="form-group mr-3 mx-4">
              <label htmlFor="regionSelect" className="text-light">
                REGION
              </label>
              <select
                className="form-control"
                id="regionSelect"
                onChange={handleRegionChange}
                value={region}
              > 
                  <option value="">Select Region</option>
                  <option value="Region 1">REGION 1</option>
                  <option value="Region 2">REGION 2</option>
                  <option value="Region 3">REGION 3</option>
                  {/* Add more regions here */}
                </select>
              </div>

         
          </form>
        </div>
       
        
      </div>
    </div>
     <ShowDt fetchedData={fetchedData} />
     </>
  );
};

export default NavBar;