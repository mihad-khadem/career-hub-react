import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="mt-20">
                <h2 className="text-center text-5xl font-bold">Opps!!!</h2>
                <Link className="text-3xl font-bold "  to='/'>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;