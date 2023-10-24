import { useLoaderData, useParams } from "react-router-dom";
export default function CareersDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2> Career Details for {career.title} </h2>
      <p> Starting salary: {career.salary}</p>
      <p> Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
          vel molestias tempore iste error suscipit iure consequatur rem, quidem
          in corrupti dignissimos reiciendis temporibus, qui quisquam non animi
          id!
        </p>
      </div>
    </div>
  );
}

//Loader Function

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch("http://localhost:4000/careers/" + id);
  if (!response.ok) {
    throw Error("Could not find the career you are looking for.");
  }
  return response.json();
};
