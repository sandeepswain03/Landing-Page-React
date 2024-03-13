/* eslint-disable react-refresh/only-export-components */

// import { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/sandeepswain03")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center text-white bg-gray-600 p-4 text-3xl flex justify-center items-center flex-col">
      Github followers: {data.followers}
      <img className="rounded-lg w-1/4 m-2" src={data.avatar_url} alt="picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/sandeepswain03")
  return res.json()
};
