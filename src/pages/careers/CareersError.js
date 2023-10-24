import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CareersError() {
  const error = useRouteError();
  return (
    <div className="career-error">
      <h2>Sorry, there was a problem displaying this page.</h2>
      <p>{error.message}</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}
