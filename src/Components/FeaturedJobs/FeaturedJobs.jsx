import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // This is not the best way to load data
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs : {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      
      <div className={dataLength === jobs.length ? 'hidden' : ''}>
        <div className="flex justify-center">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-[#7E90FE] text-white px-5 py-2 m-2"
          >
            See All
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
