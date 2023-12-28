import React, { useEffect } from "react";
import "./Register.css";
function Register() {
  function validateForm(event) {
    event.preventDefault();
    var isValid = true;

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var genderElements = document.getElementsByName("gender");
    var hobbiesElements = document.getElementsByName("hobbies");
    var quoctich = document.getElementById("nationality").value;
    var note = document.getElementById("note").value;

    if (fullName === "" || email === "") {
      isValid = false;
      alert("Please fill in all required fields.");
    } else {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        isValid = false;
        alert("Invalid email format.");
      }

      var genderSelected = false;
      for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
          genderSelected = true;
          break;
        }
      }
      if (!genderSelected) {
        isValid = false;
        alert("Please select gender.");
      }

      var hobbiesSelected = false;
      for (var i = 0; i < hobbiesElements.length; i++) {
        if (hobbiesElements[i].checked) {
          hobbiesSelected = true;
          break;
        }
      }
      if (!hobbiesSelected) {
        isValid = false;
        alert("Please select at least one hobby.");
      }

      var defaultOption =
        document.getElementById("nationality").options[0].value;
      if (quoctich === defaultOption) {
        isValid = false;
        alert("Please select nationality.");
      }

      if (note.length > 200) {
        isValid = false;
        alert("Note should not exceed 200 characters.");
      }
    }

    if (isValid) {
      alert("Registration successful!");
      window.location.href = "/Login";
    }

    return isValid;
  }
  useEffect(() => {
    function validateForm() {
      var isValid = true;

      // Validate Mã Sinh Viên
      var stuid = document.getElementById("stuid").value;
      if (stuid === "") {
        isValid = false;
        document.getElementById("stuid").style.backgroundColor = "yellow";
      }

      // Validate Họ và Tên
      var fullName = document.getElementById("fullName").value;
      if (fullName === "") {
        isValid = false;
        document.getElementById("fullName").style.backgroundColor = "yellow";
      }

      // Validate Email
      var email = document.getElementById("email").value;
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "" || !emailRegex.test(email)) {
        isValid = false;
        document.getElementById("email").style.backgroundColor = "yellow";
      }

      // Validate Giới Tính
      var genderElements = document.getElementsByName("gender");
      var genderSelected = false;
      for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
          genderSelected = true;
          break;
        }
      }
      if (!genderSelected) {
        isValid = false;
        document.querySelector(".sex").style.backgroundColor = "yellow";
      }

      // Validate Sở Thích
      var hobbiesElements = document.getElementsByName("hobbies");
      var hobbiesSelected = false;
      for (var i = 0; i < hobbiesElements.length; i++) {
        if (hobbiesElements[i].checked) {
          hobbiesSelected = true;
          break;
        }
      }
      if (!hobbiesSelected) {
        isValid = false;
        document.querySelector(".sothich").style.backgroundColor = "yellow";
      }

      // Validate Quốc Tịch
      var quoctich = document.getElementById("quoctich").value;
      if (quoctich === "") {
        isValid = false;
        document.getElementById("quoctich").style.backgroundColor = "yellow";
      }

      // Validate Ghi chú
      var note = document.getElementById("note").value;
      if (note.length > 200) {
        isValid = false;
        document.getElementById("note").style.backgroundColor = "yellow";
      }

      return isValid;
    }
  }, []);
  return (
    <div>
      <section>
        <div className="RegisterForm">
          <h1>Register Member</h1>
          <form onSubmit={validateForm}>
            <div className="FullName">
              <p>Full Name</p>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="Email">
              <p>Email</p>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="sex">
              <p>Gender</p>
              <div className="ctn-1">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  defaultValue="Male"
                  required
                />
                <label htmlFor="male">Male</label>
                <br />
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  defaultValue="Female"
                  required
                />
                <label htmlFor="female">Female</label>
                <br />
              </div>
            </div>
            <div className="sothich">
              <p>Hobbies</p>
              <div className="ctn-1">
                <input
                  type="checkbox"
                  id="reading"
                  name="hobbies"
                  defaultValue="Reading"
                />
                <label htmlFor="reading">Reading</label>
                <br />
                <input
                  type="checkbox"
                  id="traveling"
                  name="hobbies"
                  defaultValue="Traveling"
                />
                <label htmlFor="traveling">Traveling</label>
                <br />
                <input
                  type="checkbox"
                  id="music"
                  name="hobbies"
                  defaultValue="Music"
                />
                <label htmlFor="music">Music</label>
                <br />
                <input
                  type="checkbox"
                  id="cuisine"
                  name="hobbies"
                  defaultValue="Cuisine"
                />
                <label htmlFor="cuisine">Cuisine</label>
                <br />
                <input
                  type="checkbox"
                  id="other"
                  name="hobbies"
                  defaultValue="Others"
                />
                <label htmlFor="other">Others</label>
                <br />
              </div>
            </div>
            <div className="quoctich">
              <p>Nationality</p>
              <select name="nationality" id="nationality" required>
                <option value>Select Nationality</option>
                <option value="Vietnam">Vietnam</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="note">
              <p>Notes</p>
              <textarea
                id="note"
                className="note"
                maxLength={200}
                defaultValue={""}
              />
            </div>
            <div className="btn-resgiter">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
