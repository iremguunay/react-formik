import "./App.css";
import { useFormik } from "formik";

function App() {
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      firstName: "Irem",
      lastName: "Gunay",
      email: "iremg@gmail.com",
      gender: "female",
      hobbies: [],
      country: "Turkey",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              onChange={handleChange}
              placeholder={values.firstName}
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              onChange={handleChange}
              placeholder={values.lastName}
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              placeholder={values.email}
            />
            <br />
            <br />

            <p>Please select your gender:</p>

            <input
              id="gender"
              name="gender"
              value="female"
              type="radio"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <span>Female</span>

            <input
              id="gender"
              name="gender"
              value="male"
              type="radio"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Male</span>

            <br />
            <br />

            <p>What are your hobbies?</p>

            <input
              id="hobbies"
              name="hobbies"
              value="Tennis"
              type="checkbox"
              onChange={handleChange}
            />
            <span>Tennis</span>
            <br />

            <input
              id="hobbies"
              name="hobbies"
              value="Cinema"
              type="checkbox"
              onChange={handleChange}
            />
            <span>Cinema</span>
            <br />

            <input
              id="hobbies"
              name="hobbies"
              value="Music"
              type="checkbox"
              onChange={handleChange}
            />
            <span>Music</span>

            <br />
            <br />

            <select name="country" onChange={handleChange}>
              <option value="">Select your country</option>
              <option value="Turkey">Turkey</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
            </select>

            <br />
            <br />

            <button type="submit">Submit</button>

            <br />
            <br />

            <code>{JSON.stringify(values)}</code>
          </form>
    </div>
  );
}

export default App;
