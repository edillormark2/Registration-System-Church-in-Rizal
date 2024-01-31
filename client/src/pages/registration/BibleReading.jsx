import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import axios from "axios";

const BibleReading = () => {
  const [formData, setFormData] = useState({
    email: "",
    qualification: "",
    surname: "",
    firstname: "",
    locality: "",
    status: "",
    grade: "",
    attended: "",
    school: "",
    contact: "",
    amen: ""
  });

  const registrationData = [
    {
      title: "RYP Bible Reading Pre-Reg Form",
      description:
        "Bible Reading old testament will be on December 19-22, 2023 In the province of Rizal, it will be held at the church in Antipolo Meeting Hall."
    }
  ];

  const { title, description } = registrationData[0];

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back in the history
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/server/registration",
        formData
      );
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="px-4 py-4 md:py-10 max-w-4xl mx-auto">
      <Tooltip
        arrow
        title="Go back"
        placement="right"
        TransitionComponent={Fade}
      >
        <button
          className="bg-primary text-white text-center p-2 rounded-full hover:opacity-85 disabled:opacity-70 text-sm sm:text-base mb-4 cursor-pointer w-8"
          onClick={goBack}
        >
          <FaArrowLeft />
        </button>
      </Tooltip>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg mb-4">
        <p className="dark:text-gray-200 text-xl sm:text-3xl font-semibold mb-4">
          {title}
        </p>
        <p className="dark:text-gray-200 text-sm sm:text-md mb-2">
          {description}
        </p>
      </div>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg  text-sm sm:text-lg mb-4">
        <h1 className="mb-4 font-semibold dark:text-gray-200">
          Email<span className="text-red-500"> *</span>
        </h1>
        <input
          type="email"
          placeholder="Your answer"
          id="email"
          className="form-control  p-3 text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-100 w-full sm:w-1/2 dark:border-gray-400"
          required
        />
      </div>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg font-normal">
        <p className="mb-4 font-semibold">
          Below are the Rizal Young People Bible Reading Basic Qualifications.
          Thus, these Young People must be:
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li>A Grade 7 to a 5th-year college student</li>
          <li>Willing to be trained and adjusted</li>
          <li>Willing to participate and function in all the sessions</li>
          <li>Willing to exercise his spirit at all times</li>
          <li>Willing to coordinate with the saints</li>
        </ol>
        <div className="flex flex-col items-left mt-8">
          <label className="flex items-center mb-2">
            <input type="radio" name="agreement" className="mr-2 h-5 w-5 " />
            Agree
          </label>
          <label className="flex items-center">
            <input type="radio" name="agreement" className="mr-2 h-5 w-5" />
            Disagree
          </label>
        </div>
      </div>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg mb-4 mt-4">
        <h1 className="mb-4 font-semibold">
          Surname<span className="text-red-500"> *</span>
        </h1>
        <input
          type="text"
          placeholder="Your answer"
          id="sname"
          className="form-control  p-3 text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 w-full sm:w-1/2 dark:border-gray-500"
          required
        />
        <h1 className="mb-4 font-semibold mt-4">
          First Name<span className="text-red-500"> *</span>
        </h1>
        <input
          type="text"
          placeholder="Your answer"
          id="fname"
          className="form-control  p-3 text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 w-full sm:w-1/2 dark:border-gray-500"
          required
        />
      </div>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg mb-4 mt-4">
        <h1 className="mb-4 font-semibold">
          Locality<span className="text-red-500"> *</span>
        </h1>
        <div className="flex flex-col items-left mt-8">
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5 " />
            Rodriguez
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            San Mateo
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            Cainta
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            Taytay
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            Angono
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            Binangonan
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            Antipolo
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            Teresa
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            Morong
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            Baras
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            Tanay
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="locality" className="mr-2 h-5 w-5" />
            Pililia
          </label>
        </div>
      </div>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg font-normal">
        <p className="mb-4 font-semibold">
          ARE YOU A JUNIOR, A SENIOR YOUNG PEOPLE, OR A SERVING ONE?
        </p>
        <p className="italic">JYP - Grades 5 and 6</p>
        <p className="mb-4 italic">SYP - Grades 7 to 5th Year College</p>
        <p className="font-semibold">Note:</p>
        <p className="mb-4 italic">
          For those Grade 5 and 6 students who want to attend this Bible
          Reading, you can answer the pre-registration form.
        </p>
        <p className="mb-4 italic">
          Also, kindly fellowship to the serving ones in your locality about
          your willingness to attend.
        </p>
        <p className="mb-8 italic">
          However, we will still fellowship your desire to join through the
          coordinating brothers. Please wait for their confirmation about this.
          Amen!
        </p>
        <label className="flex items-center mb-2">
          <input type="radio" name="status" className="mr-2 h-5 w-5" />
          Junior Young People
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="status" className="mr-2 h-5 w-5" />
          Senior Young People
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="status" className="mr-2 h-5 w-5" />
          Serving One
        </label>
      </div>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg mb-4 mt-4">
        <h1 className="mb-4 font-semibold">
          Grade / Year Level<span className="text-red-500"> *</span>
        </h1>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Grade 5
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Grade 6
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Grade 7
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Grade 8
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Grade 9
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Grade 10
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Grade 11
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Grade 12
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          First Year College
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Second Year College
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Third Year College
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Fourth Year College
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="gradelevel" className="mr-2 h-5 w-5" />
          Fifth Year College
        </label>
      </div>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg mb-4 mt-4">
        <h1 className="mb-4 font-semibold">
          Times Attended<span className="text-red-500"> *</span>
        </h1>
        <label className="flex items-center mb-2">
          <input type="radio" name="attended" className="mr-2 h-5 w-5" />
          1
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="attended" className="mr-2 h-5 w-5" />
          2
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="attended" className="mr-2 h-5 w-5" />
          3
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="attended" className="mr-2 h-5 w-5" />
          4
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="attended" className="mr-2 h-5 w-5" />
          5
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="attended" className="mr-2 h-5 w-5" />
          More Than 5 Times
        </label>
      </div>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg mb-4 mt-4">
        <h1 className="mb-4 font-semibold">
          School [Kindly Write It Completely]<span className="text-red-500"> *</span>
        </h1>
        <input
          type="text"
          placeholder="Your answer"
          id="sname"
          className="form-control  p-3 text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 w-full sm:w-1/2 dark:border-gray-500"
          required
        />
      </div>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg mb-4 mt-4">
        <h1 className="mb-4 font-semibold">
          Contact Number
          <span className="text-red-500"> *</span>
        </h1>
        <input
          type="text"
          placeholder="Your answer"
          id="sname"
          className="form-control  p-3 text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 w-full sm:w-1/2 dark:border-gray-500"
          required
        />
      </div>

      <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg font-normal">
        <p className="mb-4 font-semibold">
          [After filling out this form, take a screenshot and send it to your
          respective serving ones or YP coordinators.]
        </p>
        <p className="mb-4 font-semibold">John 14:23</p>
        <p className="mb-4 font-semibold">
          "Jesus answered and said to him, if anyone loves me, he will keep My
          word..."
        </p>
        <p className="mb-4 font-semibold">
          Thank you for registering, saints! See you!
        </p>
        <label className="flex items-center mb-2">
          <input type="radio" name="amen" className="mr-2 h-5 w-5" />
          Amen
        </label>
      </div>
      <div className="flex justify-between mt-4">
        <div
          onClick={handleSubmit}
          className="bg-primary text-white text-center p-2 rounded-md hover:opacity-85 disabled:opacity-80 text-sm sm:text-base cursor-pointer w-28"
        >
          Submit
        </div>
        <div className="font-semibold text-primary p-2 text-sm sm:text-base cursor-pointer">
          Clear form
        </div>
      </div>
    </div>
  );
};

export default BibleReading;
