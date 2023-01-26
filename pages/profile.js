import React from "react";

const profile = () => {
  fetch("https://reqres.in/api/login")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return <div>{data && data.map && data.map((datas) => <h1>asd</h1>)}</div>;
};

export default profile;
