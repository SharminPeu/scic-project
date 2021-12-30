import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Menubar from "../Shared/Menubar/Menubar";
const Register = () => {
  const {
    errorRegister,
    handleName,
    handleEmail,
    handlePassword,
    handleRegister,
  } = useAuth();

  const history = useHistory();

  const register = (e) => {
    handleRegister(history);
    e.preventDefault();
  };

  return (
    <div className="container">
     <Menubar></Menubar>
      <div className="col-12 col-md-12">
        <div className="d-flex justify-content-center my-5">
          <div className="shadow p-5 mb-5 bg-body rounded">
            <h2 className="text-center mb-5">Please Register</h2>
            <form onSubmit={register}>
              <div className="mb-3 text-start">
                <label htmlFor="inputAddress2" className="form-label">
                  Name
                </label>
                <input
                  onBlur={handleName}
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Enter Your Name"
                  required
                />
                <br />
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  onBlur={handleEmail}
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter Your Email"

                  required
                />

              </div>
              <div className="text-start">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <div className="mb-3 text-danger">{errorRegister}</div>
                <input
                  onBlur={handlePassword}
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Enter Your Password"

                  required
                />
                <br />
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Your Address"
                />
              </div>
              <br />
              <button
                type="submit"
                className="d-block px-5 btn btn-success text-white"
              >
                Register
              </button>
            </form>
            <p className="fw-bold my-2 ">
              Already Have an Account?<Link to="/login">Login Here</Link>
            </p>

          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Register;
