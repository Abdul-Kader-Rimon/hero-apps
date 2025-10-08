import React from "react";
import { Link,  } from "react-router";
import appNotFoundImg from "../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <>
      <div>
        <main className="grid h-screen  place-items-center bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <img className="mx-auto mt-2" src={appNotFoundImg} alt="" />
            <h1 className="mt-4 text-5xl  font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              No App Found
            </h1>
            <p className="mt-4 text-gray-400 text-xl font-semibold">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            {/* <Link to={"/allapp"}>
              <button className="btn mt-6 btn-primary">Go Back!</button>
            </Link> */}
          </div>
        </main>
      </div>
    </>
  );
};

export default AppNotFound;
