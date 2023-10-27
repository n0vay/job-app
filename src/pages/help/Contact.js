import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </Form>
      {data && data.error && <p className="error">{data.error}</p>}
    </div>
  );
}

export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();
  const submsission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submsission);

  // send post request to server
  if (submsission.message.length < 10) {
    return { error: "Message too short" };
  }

  // redirect user
  return redirect("/");
};
