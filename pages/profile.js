import React from "react";

const profile = ({ data }) => {
  return (
    <div>
      {data.data.map((data) => (
        <tr key={data.id}>
          <td>{data.name}</td>
        </tr>
      ))}
    </div>
  );
};

export default profile;

export async function getServerSideProps() {
  const res = await fetch("https://reqres.in/api/login");
  const data = await res.json();
  return {
    props: { data },
  };
}
