import React from "react";

const Footer = ({showRegister, setShowRegister}) => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-full bg-red-600 p-6 text-center text-white flex items-center justify-center gap-10">
        <p className="text-3xl">Your story is waiting to happen!</p>
        <button onClick={()=>setShowRegister(true)} className="cursor-pointer shadow-sm shadow-gray-600 border-2 border-white rounded-xs py-4 px-15 text-xl hover:bg-white hover:shadow-md hover:text-sky-500 hover:shadow-gray-800 transition-all delay-50 duration-400">
          Get Started
        </button>
      </div>

      <div className="w-6xl py-10 text-gray-500">
        <p className="mb-5">
          Shaadi.com, India’s No.1 Matchmaking and Matrimony Service*, was
          founded with a simple objective - to help people find happiness.
          Shaadi.com is a leader in what is sometimes known as the matrimony
          category, we have touched more than 50 million lives.
        </p>
        <p className="mb-5">
          Shaadi.com - a trusted matrimonial & matchmaking service, has always
          differentiated itself from other matrimonials through its
          innovation-led approach by redefining the way Indian brides and grooms
          meet for marriage.
        </p>
        <p className="mb-5">
          We have also created trusted and renowned community specific matrimony
          platforms such as TamilShaadi.com, TeluguShaadi.com,
          MalayaleeShaadi.com, KannadaShaadi.com, BengaliShaadi.com,
          GujaratiShaadi.com, MarathiShaadi.com, PunjabiShaadi.com and more that
          has changed the way of finding a life partner.
        </p>
        <p className="mb-5">
          Shaadi.com (sometimes mis-spelt as Shadi.com, Shadhi.com or Sadi.com)
          is a social networking site specialising in matchmaking and not just a
          matrimonial service.
        </p>
        <p className="mb-5 italic">
          * Based on the number of downloads in the last 12 months of the
          Shaadi.com App – as reported by AppTweak.
        </p>
      </div>

      <div className="w-3xl flex justify-center flex-col items-center mb-12">
        <div className="bg-sky-400 text-center  py-2 px-3 text-white text-3xl rounded-t-md">
          Trusted by Millions
        </div>
        <div className="border-y-1 border-gray-300 flex gap-4 p-3  text-xl ">
          <div className="p-3 flex items-center gap-5">
            <i class="ri-group-line border border-gray-300 text-2xl w-12 h-12 text-amber-500 rounded-full flex justify-center items-center"></i>
            <p>Best Matches </p>
          </div>
          <div className="p-3 flex items-center gap-5">
            <i class="ri-shield-check-line border border-gray-300 text-2xl w-12 h-12 text-amber-500 rounded-full flex justify-center items-center"></i>
            <p>Verified Profiles</p>
          </div>
          <div className="p-3 flex items-center gap-5 ">
            <i class="ri-lock-2-line border border-gray-300 text-2xl w-12 h-12 text-amber-500 rounded-full flex justify-center items-center"></i>
            <p>100% Privacy</p>
          </div>
        </div>
      </div>

      <div className=" w-7xl flex justify-between text-center">
        <div>
          <p className="border-b-1 border-b-gray-300 p-3 text-xl text-gray-600">
            Need Help?
          </p>
          <ul className="p-4 text-lg text-gray-400 cursor-pointer">
            <li className="hover:underline">Member </li>
            <li className="hover:underline">Login </li>
            <li className="hover:underline">Sign Up </li>
            <li className="hover:underline"> Partner Search</li>
            <li className="hover:underline">How to Use Shaadi.com </li>
            <li className="hover:underline"> Premium</li>
            <li className="hover:underline">Memberships</li>
            <li className="hover:underline">Customer Support </li>
            <li className="hover:underline"> Site Map</li>
          </ul>
        </div>
        <div>
          <p className="border-b-1 border-b-gray-300 p-3 text-xl text-gray-600">
            Company
          </p>
          <ul className="p-4 text-lg text-gray-400 cursor-pointer">
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Shaadi Blog</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Awards & Recognition</li>
            <li className="hover:underline">Cov-Aid</li>
            <li className="hover:underline">Contact Us</li>
          </ul>
        </div>
        <div>
          <p className="border-b-1 border-b-gray-300 p-3 text-xl text-gray-600">
            Privacy & You
          </p>
          <ul className="p-4 text-lg text-gray-400 cursor-pointer">
            <li className="hover:underline">Terms of Use</li>
            <li className="hover:underline">Privacy Policy</li>
            <li className="hover:underline">Be Safe Online</li>
            <li className="hover:underline">Report Misuse</li>
          </ul>
        </div>
        <div>
          <p className="border-b-1 border-b-gray-300 p-3 text-xl text-gray-600">
            More
          </p>
          <ul className="p-4 text-lg text-gray-400 cursor-pointer">
            <li className="hover:underline">VIP Shaadi</li>
            <li className="hover:underline">Sangam</li>
            <li className="hover:underline">Select Shaadi</li>
            <li className="hover:underline">Shaadi Centres</li>
            <li className="hover:underline">Success Stories</li>
            <li className="hover:underline">Shaadi Live</li>
            <li className="hover:underline">Elite Matrimony by Shaadi.com</li>
            <li className="hover:underline">Astrochat.com</li>
            <li className="hover:underline">Chat with Astrologers</li>
          </ul>
        </div>
      </div>

      <footer className="w-full bg-gray-200 flex justify-between p-8 text-sm">
        <p>© 1996-2025 Shaadi.com, The World's Leading Matchmaking Service™</p>
        <p>Passionately created by <span className="text-sky-400">SR Group</span> </p>
      </footer>
    </div>
  );
};

export default Footer;
