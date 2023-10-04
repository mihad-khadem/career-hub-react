import { FaMapLocationDot, FaMoneyBill1Wave } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Company Logo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-5">
            <h2 className="px-4 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</h2>
            <h2 className="px-4 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</h2>
        </div>
        <div className="flex">
            <p className="flex gap-2"><FaMapLocationDot/>{location}</p>
            <p className="flex gap-1"><FaMoneyBill1Wave/> {salary}</p>
        </div>

        <div className="card-actions justify-center">
          <Link to={`/job/${id}`}>
          <button className="btn bg-[#7E90FE] text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
