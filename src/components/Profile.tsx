import React from "react";
import "./profile.css";
type PropsDataType = {
  name?: string;
  age: number;
  status: "single" | "commited" | "coder";
  children?: React.ReactNode;
};

const Profile = ({ name, age, status, children }: PropsDataType) => {
  return (
    <div className="myCol">
      <h1>Name - {name || "user"}</h1>
      <h1>Age - {age}</h1>
      <h1>status - {status}</h1>
      <h1>{children}</h1>
    </div>
  );
};

export default Profile;
