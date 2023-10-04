import { json } from "react-router-dom";

const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('jobApplications');
    if (storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const isExists = storedJobApplications.find(jobId => jobId === id);
    if (!isExists) {
        storedJobApplications.push(id)
        localStorage.setItem('jobApplications', JSON.stringify(storedJobApplications))
    }
}

export { saveJobApplication, getStoredJobApplication }