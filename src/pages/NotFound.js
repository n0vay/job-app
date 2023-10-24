import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Page not Found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam in
        doloribus repellendus. Provident voluptatibus fugit quos sequi est
        ipsam, illo blanditiis voluptatum, magnam assumenda iusto dolore iure
        modi! Sequi.
      </p>
      <p>
        Go to the <Link to="/"> Homepage </Link>.
      </p>
    </div>
  );
};

export default NotFound;
