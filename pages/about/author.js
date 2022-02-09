import React from "react";

const author = () => {
  return (
    <div>
      <h1>Hello</h1>
      <form action="/action_page.php">
        <label htmlFor="pswrd">Password:</label>
        <input
          type="password"
          id="pswrd"
          name="pswrd"
          pattern="[a-z]{0,9}"
          title="Password should be digits (0 to 9) or alphabets (a to z)."
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default author;
