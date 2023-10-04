import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import AppliedJobDetails from "./AppliedJobDetails";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJob] = useState([]);
  const [displayJobs, setDisplayJob] = useState([]);

  const handleJobsFilter = (filter) => {
    if(filter === 'all') {
       setDisplayJob(appliedJobs) 
    }
    else if(filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
        displayJobs(remoteJobs)
    }
    else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJob(onsiteJobs)
    }
  }

  console.log(appliedJobs);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJob(jobsApplied);
      setDisplayJob(jobsApplied)
    }
  }, [jobs]);
  return (
    <div>
      <h2>Applied Jobs : {appliedJobs.length}</h2>
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Click
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleJobsFilter('all')}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter('onsite')}>
              <a>On Site</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {displayJobs.map((job) => (
          <AppliedJobDetails key={job.id} job={job}></AppliedJobDetails>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
