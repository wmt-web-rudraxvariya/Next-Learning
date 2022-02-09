import React, { useState } from "react";
import Meta from "../../components/Meta";

const Contact = () => {
  const [first, setFirst] = useState('');
  const setData = async (e) => {
    e.preventDefault();
    const data = {
      first: e.target.first.value,
      last: e.target.last.value,
    };
    const finalData = JSON.stringify(data);
    console.log(finalData);
    const response = await fetch("/api/form", {
      body: finalData,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await response.json();
    setFirst(result.data)
  };
  return (
    <>
      <Meta
        title="Contact us"
        description="World's best customer contact system"
      />
      {/* <div className="mt-10">
        <p className="text-3xl">Contact us 24*7</p>
      </div> */}
      <form onSubmit={(e) => setData(e)}>
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>
      {!first ? null : <p>Welcome {(first)}</p>}
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
