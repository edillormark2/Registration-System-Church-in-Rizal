import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useStateContext } from "../../context/ContextProvider";
import SuccessPopup from "../../components/SuccessPopup";

const BibleReading = () => {
  const { currentMode } = useStateContext();
  const [openPopup, setOpenPopup] = useState(false);

  const initialFormData = {
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
  };

  const [formData, setFormData] = useState(initialFormData);

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
    navigate(-1);
  };

  const handleChange = e => {
    const { id, value, name, checked, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id || name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/server/registration/biblereading",
        formData
      );
      setOpenPopup(true);
      console.log(response.data);
    } catch (error) {
      toast.error("Error submitting form:", error);
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
      <form onSubmit={handleSubmit}>
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
            onChange={handleChange}
            value={formData.email}
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
              <input
                type="radio"
                name="qualification"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Agree"
                checked={formData.qualification === "Agree"}
                required
              />
              Agree
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="qualification"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Disagree"
                checked={formData.qualification === "Disagree"}
                required
              />
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
            id="surname"
            className="form-control  p-3 text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 w-full sm:w-1/2 dark:border-gray-500"
            required
            onChange={handleChange}
            value={formData.surname}
          />
          <h1 className="mb-4 font-semibold mt-4">
            First Name<span className="text-red-500"> *</span>
          </h1>
          <input
            type="text"
            placeholder="Your answer"
            id="firstname"
            className="form-control  p-3 text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 w-full sm:w-1/2 dark:border-gray-500"
            required
            onChange={handleChange}
            value={formData.firstname}
          />
        </div>

        <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg mb-4 mt-4">
          <h1 className="mb-4 font-semibold">
            Locality<span className="text-red-500"> *</span>
          </h1>
          <div className="flex flex-col items-left mt-8">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Rodriguez"
                checked={formData.locality === "Rodriguez"}
                required
              />
              Rodriguez
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="San Mateo"
                checked={formData.locality === "San Mateo"}
                required
              />
              San Mateo
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Cainta"
                checked={formData.locality === "Cainta"}
                required
              />
              Cainta
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Taytay"
                checked={formData.locality === "Taytay"}
                required
              />
              Taytay
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Angono"
                checked={formData.locality === "Angono"}
                required
              />
              Angono
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Binangonan"
                checked={formData.locality === "Binangonan"}
                required
              />
              Binangonan
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Antipolo"
                checked={formData.locality === "Antipolo"}
                required
              />
              Antipolo
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Teresa"
                checked={formData.locality === "Teresa"}
                required
              />
              Teresa
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Morong"
                checked={formData.locality === "Morong"}
                required
              />
              Morong
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Baras"
                checked={formData.locality === "Baras"}
                required
              />
              Baras
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Tanay"
                checked={formData.locality === "Tanay"}
                required
              />
              Tanay
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="locality"
                className="mr-2 h-5 w-5"
                onChange={handleChange}
                value="Pililia"
                checked={formData.locality === "Pililia"}
                required
              />
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
            coordinating brothers. Please wait for their confirmation about
            this. Amen!
          </p>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="status"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Junior Young People"
              checked={formData.status === "Junior Young People"}
              required
            />
            Junior Young People
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="status"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Senior Young People"
              checked={formData.status === "Senior Young People"}
              required
            />
            Senior Young People
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="status"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Serving One"
              checked={formData.status === "Serving One"}
              required
            />
            Serving One
          </label>
        </div>

        <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg mb-4 mt-4">
          <h1 className="mb-4 font-semibold">
            Grade / Year Level<span className="text-red-500"> *</span>
          </h1>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Grade 5"
              checked={formData.grade === "Grade 5"}
              required
            />
            Grade 5
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Grade 6"
              checked={formData.grade === "Grade 6"}
              required
            />
            Grade 6
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Grade 7"
              checked={formData.grade === "Grade 7"}
              required
            />
            Grade 7
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Grade 8"
              checked={formData.grade === "Grade 8"}
              required
            />
            Grade 8
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Grade 9"
              checked={formData.grade === "Grade 9"}
              required
            />
            Grade 9
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Grade 10"
              checked={formData.grade === "Grade 10"}
              required
            />
            Grade 10
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Grade 11"
              checked={formData.grade === "Grade 11"}
              required
            />
            Grade 11
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Grade 12"
              checked={formData.grade === "Grade 12"}
              required
            />
            Grade 12
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="First Year College"
              checked={formData.grade === "First Year College"}
              required
            />
            First Year College
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Second Year College"
              checked={formData.grade === "Second Year College"}
              required
            />
            Second Year College
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Third Year College"
              checked={formData.grade === "Third Year College"}
              required
            />
            Third Year College
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Fourth Year College"
              checked={formData.grade === "Fourth Year College"}
              required
            />
            Fourth Year College
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="grade"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Fifth Year College"
              checked={formData.grade === "Fifth Year College"}
              required
            />
            Fifth Year College
          </label>
        </div>

        <div className="bg-white p-8 rounded-md shadow-md border border-gray-300 dark:border-gray-500 dark:bg-secondary-dark-bg dark:text-gray-200 text-sm sm:text-lg mb-4 mt-4">
          <h1 className="mb-4 font-semibold">
            Times Attended<span className="text-red-500"> *</span>
          </h1>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="attended"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="1"
              checked={formData.attended === "1"}
              required
            />
            1
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="attended"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="2"
              checked={formData.attended === "2"}
              required
            />
            2
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="attended"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="3"
              checked={formData.attended === "3"}
              required
            />
            3
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="attended"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="4"
              checked={formData.attended === "4"}
              required
            />
            4
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="attended"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="5"
              checked={formData.attended === "5"}
              required
            />
            5
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="attended"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="More Than 5 Times"
              checked={formData.attended === "More Than 5 Times"}
              required
            />
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
            id="school"
            className="form-control  p-3 text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 w-full sm:w-1/2 dark:border-gray-500"
            required
            onChange={handleChange}
            value={formData.school}
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
            id="contact"
            className="form-control  p-3 text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 w-full sm:w-1/2 dark:border-gray-500"
            required
            onChange={handleChange}
            value={formData.contact}
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
            <input
              type="radio"
              name="amen"
              className="mr-2 h-5 w-5"
              onChange={handleChange}
              value="Amen"
              checked={formData.amen === "Amen"}
              required
            />
            Amen
          </label>
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="bg-primary text-white text-center p-2 rounded-md hover:opacity-70 disabled:opacity-50 text-sm sm:text-base cursor-pointer w-28"
          >
            Submit
          </button>
          {openPopup &&
            <SuccessPopup openPopup={openPopup} setOpenPopup={setOpenPopup} title="Bible Reading"/>}

          <div
            className="font-semibold text-primary p-2 text-sm sm:text-base cursor-pointer hover:opacity-50"
            onClick={() => setFormData(initialFormData)}
          >
            Clear form
          </div>
        </div>
      </form>
    </div>
  );
};

export default BibleReading;
