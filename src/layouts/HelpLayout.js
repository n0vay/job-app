import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus harum
        est aliquid voluptatibus esse architecto aut in exercitationem, eum
        quaerat. Eligendi porro ipsa, aspernatur fuga repellat esse enim
        temporibus sint!
      </p>

      <nav>
        <NavLink to="faq"> View the FAQ </NavLink>
        <NavLink to="contact"> Contact </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
