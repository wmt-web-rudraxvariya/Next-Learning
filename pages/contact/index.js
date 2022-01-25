import React from "react";
import Meta from "../../components/Meta";

const Contact = () => {
  return (
    <>
      <Meta
        title="Contact us"
        description="World's best customer contact system"
      />
      <div className="mt-10">
        <p className="text-3xl">Contact us 24*7</p>
      </div>
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
