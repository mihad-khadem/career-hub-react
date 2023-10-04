const AppliedJobDetails = ({ job }) => {
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
  return (
    <div className="p-4">
      <div className="card card-side bg-base-100 shadow-xl p-4">
        <figure>
          <img src={logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>
            <strong>{company_name}</strong>
          </p>
          <p>Salary : {salary}</p>
          <div className="flex gap-5">
            <h2 className="px-4 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
              {remote_or_onsite}
            </h2>
            <h2 className="px-4 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
              {job_type}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobDetails;
