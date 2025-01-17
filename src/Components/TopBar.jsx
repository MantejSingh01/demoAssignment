import React from "react";
import myImage from '../assets/person.png'
import { useLocation, useNavigate } from "react-router-dom";

export const TopBar = () => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/addResource')
  }
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <div className="h-16 bg-white border-b-2 border-l-2 mt-4" >
        <div className="flex justify-between">
          <div className="ml-9 p-2">
            <svg
              width="82"
              height="40"
              viewBox="0 0 82 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g >
                <path
                  d="M64.6163 22.6642H56.7898C55.0233 22.6642 53.5945 24.1127 53.5945 25.9103V36.5948C53.5945 38.3851 55.0233 39.8409 56.7898 39.8409H64.6163C66.3827 39.8409 67.8117 38.3926 67.8117 36.5948V25.903C67.8189 24.1127 66.3827 22.6642 64.6163 22.6642ZM64.3865 27.9846H59.4896V29.8989H64.1496V32.2133H59.4896V34.5132H64.3865V36.8059H57.0267V25.692H64.3937V27.9846H64.3865Z"
                  fill="#002A4B"
                />
                <path
                  d="M31.285 22.6642H28.4917L21.4478 39.8336H25.6053L26.6968 36.9295H33.0658L34.1571 39.8336H38.3146L31.285 22.6642ZM28.025 33.3778L29.8992 28.4286L31.7446 33.3778H28.025Z"
                  fill="#002A4B"
                />
                <path
                  d="M52.0364 22.6646L45.2293 39.8338H42.436L35.6075 22.6646H39.8153L43.8435 33.4071L47.807 22.6646H52.0364Z"
                  fill="#002A4B"
                />
                <path
                  d="M22.0582 25.8377L18.3675 38.0358C18.0443 39.1058 17.0678 39.8336 15.962 39.8336H15.9405C14.8562 39.8336 13.8941 39.1276 13.5566 38.0869L11.4599 31.6893C11.266 31.0925 10.4331 31.0925 10.2393 31.6893L8.12103 38.0942C7.77637 39.1349 6.82138 39.8336 5.73715 39.8336C4.63136 39.8336 3.65483 39.0985 3.33171 38.0286L0 29.0473H2.56341C3.40351 29.0473 4.15028 29.6078 4.38722 30.4301L4.92576 32.5555C5.28478 33.7927 6.9578 33.9311 7.50351 32.7666L8.71701 28.0502C9.01858 27.1186 9.87306 26.4926 10.8424 26.4926C11.8046 26.4926 12.659 27.1186 12.9606 28.0429L14.21 32.7957C14.7701 33.9456 16.4359 33.8073 16.7878 32.57L18.4392 24.8623L16.6298 24.3747L21.6704 20.2261L24.0113 26.3617L22.0582 25.8377Z"
                  fill="#002A4B"
                />
                <path
                  d="M14.0952 0V17.1693H10.1819L3.81285 6.65228V17.1693H6.10352e-05V0H3.89184L10.2824 10.466V0H14.0952Z"
                  fill="#006EC6"
                />
                <path
                  d="M27.4792 0L24.3055 5.22575L24.3415 5.28397L24.3559 5.3058L24.7507 5.96085L25.835 7.63484L26.4884 8.63195L32.0244 0H27.4792Z"
                  fill="#006EC6"
                />
                <path
                  d="M26.4884 8.65387L24.7291 11.4341V11.4269L24.4635 11.8563L24.2839 12.1401L27.4577 17.1693H32.0246L26.4884 8.65387Z"
                  fill="#006EC6"
                />
                <path
                  d="M37.7617 3.54449H32.8072V0H46.5577V3.54449H41.6248V17.1693H37.7617V3.54449Z"
                  fill="#006EC6"
                />
                <path
                  d="M26.4886 8.63223V8.64669V8.65393L26.4959 8.63945L26.4886 8.63223Z"
                  fill="#006EC6"
                />
                <path
                  d="M24.4206 7.63484L23.3292 5.96085L22.9342 5.3058L22.9199 5.28397L19.7103 0H15.1436L19.7031 7.11808L20.6796 8.64649L19.5524 10.386L15.1651 17.1693H19.739L20.7802 15.4953L20.9382 15.2406L23.042 11.8562L23.3077 11.4268L23.3148 11.434L25.0741 8.63922L24.4206 7.63484Z"
                  fill="#002A4B"
                />
                <path
                  opacity="0.25"
                  d="M27.4794 0.000183105L24.3057 5.22594L24.3415 5.28415L24.3559 5.30599L24.7509 5.96104L25.8351 7.63501L26.4886 8.63214L32.0246 0.000183105H27.4794Z"
                  fill="url(#paint0_linear_2_135)"
                />
                <path
                  opacity="0.25"
                  d="M26.4886 8.65405L24.7293 11.4343V11.427L24.4637 11.8565L24.2841 12.1403L27.4579 17.1695H32.0246L26.4886 8.65405Z"
                  fill="url(#paint1_linear_2_135)"
                />
                <path
                  opacity="0.25"
                  d="M18.4392 24.8625L22.0582 25.8378L20.7082 30.3067L17.4699 29.3896L18.4392 24.8625Z"
                  fill="url(#paint2_linear_2_135)"
                />
                <path
                  opacity="0.25"
                  d="M41.6247 3.54462H37.7617V8.28273H41.6247V3.54462Z"
                  fill="url(#paint3_linear_2_135)"
                />
                <path
                  opacity="0.25"
                  d="M10.2823 10.4663L14.0951 16.7692V4.5928L10.2823 5.98295V10.3644V10.4663Z"
                  fill="url(#paint4_linear_2_135)"
                />
                <path
                  opacity="0.25"
                  d="M3.81279 6.73251L0 0.429596V12.6133L3.81279 11.2232V6.84169V6.73251Z"
                  fill="url(#paint5_linear_2_135)"
                />
                <path
                  opacity="0.25"
                  d="M26.6896 36.9224L28.0252 33.378H31.7446L33.0586 36.9224H26.6896Z"
                  fill="url(#paint6_linear_2_135)"
                />
                <path
                  opacity="0.25"
                  d="M43.8435 33.4069L45.7606 38.5016L49.2073 29.797L46.2418 26.9148L43.8435 33.4069Z"
                  fill="url(#paint7_linear_2_135)"
                />
                <path
                  d="M71.75 35.6861V34.8052H75.8444V35.6861H74.3181V39.8584H73.2762V35.6861H71.75Z"
                  fill="#002A4B"
                />
                <path
                  d="M76.5187 34.8052H77.8185L79.1914 38.2004H79.2498L80.6228 34.8052H81.9226V39.8584H80.9002V36.5694H80.8589L79.5687 39.8338H78.8726L77.5825 36.5571H77.5409V39.8584H76.5187V34.8052Z"
                  fill="#002A4B"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_2_135"
                  x1="24.6125"
                  y1="6.19814"
                  x2="32.2605"
                  y2="0.303116"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.0702074"  />
                  <stop offset="1" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_135"
                  x1="32.0078"
                  y1="17.1916"
                  x2="24.5386"
                  y2="11.0084"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-opacity="0" />
                  <stop offset="0.9298" stop-opacity="0.9298" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2_135"
                  x1="19.0585"
                  y1="29.8591"
                  x2="20.2821"
                  y2="25.3541"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-opacity="0" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2_135"
                  x1="39.6931"
                  y1="8.28463"
                  x2="39.6931"
                  y2="3.54711"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-opacity="0" />
                  <stop offset="0.9298" stop-opacity="0.9298" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_2_135"
                  x1="12.1866"
                  y1="16.7719"
                  x2="12.1866"
                  y2="4.59208"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.0702074" stop-opacity="0.9298" />
                  <stop offset="1" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_2_135"
                  x1="1.90778"
                  y1="0.430462"
                  x2="1.90778"
                  y2="12.6103"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.0702074" stop-opacity="0.9298" />
                  <stop offset="1" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_2_135"
                  x1="26.691"
                  y1="35.1524"
                  x2="33.0575"
                  y2="35.1524"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.0702074" stop-opacity="0.9298" />
                  <stop offset="1" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_2_135"
                  x1="43.7398"
                  y1="33.6784"
                  x2="49.7769"
                  y2="31.1503"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.0702074" stop-opacity="0.9298" />
                  <stop offset="1" stop-opacity="0" />
                </linearGradient>
                <clipPath id="clip0_2_135">
                  <rect width="82" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex">
            {isHomePage &&  <button className="h-10 mr-7 py-2 px-5 text-white bg-green-500 rounded font-medium" onClick={handleClick} style={{ fontFamily: "'HK Grotesk', sans-serif" }} >ADD ITEM</button>}
           
            <div className="mr-11">
           <img src={myImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
