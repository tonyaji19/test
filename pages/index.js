import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit} className="grid w-1/4 justify-center ">
          <h1 className="text-center p-2">Test login</h1>
          <input
            className="shadow-md border mb-1 p-1"
            placeholder="username"
            name="username"
            type="username"
            onChange={handleChange}
          />
          <input
            className="shadow-md border p-1"
            placeholder="password"
            name="password"
            type="password"
            onChange={handleChange}
          />

          <Link
            href={"/profile"}
            type="submit"
            className="bg-gray-200 mt-2 p-1"
          >
            submit
          </Link>
        </form>
      </main>
    </>
  );
}
