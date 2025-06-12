import React from 'react'
import dp from "../../assets/Dp.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const navigate = useNavigate();
  const goPreviewPage = () => {
    navigate("/profile-preview");
  }
  return (
     <div className="profilePhotoComponent">
          <div className=" flex flex-col items-center space-y-1 bg-gray-200 h-48 rounded-t-xl rounded-b-xl">
            <img src={dp} alt="" className="w-40 h-40 rounded-t-xl" />
            <Link
              to="/add-edit-photo"
              className="text-blue-500 underline cursor-pointer"
            >
              Add/Edit Photos
            </Link>
          </div>

          <div className="space-y-3 ">
            <div>
              <p className="text-xl font-bold">Rudradeb Maji</p>
              <p className="text-gray-400">Profile created for myself</p>
            </div>

            <p className="font-semibold">22 Yrs, 5 Ft 8 In </p>
            <p className="font-semibold">Hindu,Mahisya</p>
            <p className="font-semibold">Kolkata, Westbengal, India</p>
            <p className="font-semibold">
              BCA - Bachelor of Computer Applications, Not <br />
              working
            </p>
            <p>
              {" "}
              <span>
                <i className="ri-smartphone-line font-normal text-xl text-green-300"></i>
              </span>{" "}
              +91-7044424200 ( <span className='text-green-300'><i className="ri-check-fill  text-xl"></i> Verified</span>  ) <Link to="/edit-mobile" className='text-blue-500 hover:underline'>Edit Mobile No</Link>
            </p>
          </div>

          <div className="text-center space-y-2">
            <p>
              How your profile looks <br /> to others{" "}
            </p>
            <div onClick={() => {goPreviewPage()}} className="cursor-pointer hover:bg-sky-100 border-1 border-gray-300 rounded-md text-blue-600 space-x-2 font-semibold">
              <i class="ri-eye-fill"></i>
              <span>Profile Preview</span>
            </div>
          </div>
        </div>
  )
}

export default Profile