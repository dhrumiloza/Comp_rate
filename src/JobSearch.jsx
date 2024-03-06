import React, { useState } from 'react';

const JobSearch = ({ jobsData }) => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setSelectedJobTitle(event.target.value);
  };

  const handleSearch = () => {
    // Filter the jobsData based on selected values
    const result = jobsData.jobs.find(
      (job) =>
        job.region === selectedRegion &&
        job.level === selectedLevel &&
        job.jobTitle === selectedJobTitle
    );

    // Update the searchResult state
    setSearchResult(result);
  };

  return (
    <div>
      <h3>Job Search</h3>
      <div>
        <label>
          Select Region:
          <select value={selectedRegion} onChange={handleRegionChange}>
            <option value="">Select Region</option>
            {/* Add options based on your available regions */}
            <option value="region1">Region 1</option>
            {/* Add more regions here */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Select Level:
          <select value={selectedLevel} onChange={handleLevelChange}>
            <option value="">Select Level</option>
            {/* Add options based on your available levels */}
            <option value="junior">Junior</option>
            {/* Add more levels here */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Select Job Title:
          <select value={selectedJobTitle} onChange={handleJobTitleChange}>
            <option value="">Select Job Title</option>
            {/* Add options based on your available job titles */}
            <option value="businessAnalyst">Business Analyst</option>
            {/* Add more job titles here */}
          </select>
        </label>
      </div>
      <button onClick={handleSearch}>Search</button>
      {searchResult && (
        <div>
          <h4>Search Result:</h4>
          <pre>{JSON.stringify(searchResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default JobSearch;
