import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    contact_information,
    educational_requirements,
    experiences,
    job_responsibility,
  } = job;
  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have successfully applied", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className=" my-20">
      <h2 className="text-3xl text-center font-bold my-5">JOB DETAILS</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 p-5 rounded-md shadow-md">
          <p className="my-6">
            <strong>Job Description :</strong>
            {job_description}
          </p>
          <p className="my-6">
            <strong>Educational Requirement : </strong>
            {educational_requirements}
          </p>
          <p className="my-6">
            <strong>Job Responsibility : </strong>
            {job_responsibility}
          </p>
          <p className="my-6">
            <strong>Experiences : </strong>
            {experiences}
          </p>
        </div>
        <div className="border bg-[#9873FF1A] p-2 rounded-md shadow-md">
          <h2 className="text-2xl font-bold">Job Details</h2>
          <hr className="my-4" />
          <h2 className="my-2">Salary : {salary}</h2>
          <h2 className="my-2">Job Title : {job_title}</h2>
          <h2 className="text-2xl font-bold">Contact Info</h2>
          <hr className="my-4" />
          <h2 className="my-2">Phone : {contact_information.phone}</h2>
          <h2 className="my-2">E-mail : {contact_information.email}</h2>
          <h2 className="my-2">Address : {contact_information.address}</h2>
          <button
            onClick={handleApplyJob}
            className="btn w-full bg-[#7E90FE] text-white mt-4"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
