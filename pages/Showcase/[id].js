import React from "react";

const UserDetail = ({ articals }) => {
  return (
    <div className="flex flex-col text-center mt-10">
      <h1 className="text-4xl ">{articals.name}</h1>
      <a className="text-blue-600 mt-5" href={`mailto:${articals.email}`}>
        {articals.email}
      </a>
      <text className="text-gray-400 mt-5">{articals.phone}</text>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const articals = await res.json();

  return {
    props: {
      articals,
    },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const articals = await res.json();
//   const ids = articals.map((articals) => {
//     articals.id;
//   });
//   const paths = ids.map((id) => ({
//     params: { id: id.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

export default UserDetail;
