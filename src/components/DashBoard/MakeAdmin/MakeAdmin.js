import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://sheltered-bayou-06748.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          alert("Made Admin Successfully!");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make this user Admin</h2>
      <div className="d-flex justify-content-center my-3">
        <div className="w-75 shadow p-5 mb-5 bg-body rounded">
          <form onSubmit={handleAdminSubmit}>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                onBlur={handleEmail}
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <button
              type="submit"
              className="d-block px-5 btn btn-info text-white"
            >
              MAKE ADMIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
