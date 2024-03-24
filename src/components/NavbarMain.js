import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  const [popup, SetPopup] = useState(false);
  const [dropdown, SetDropdown] = useState(false);
  const [subdropdown, SetSubDropdown] = useState(false);
  return (
    <>
      <nav className="flex md:justify-between">
        <Link to="/contactus">
          <img
            className="ssp-logo m-3 p-4"
            src="https://sspassociates.in/_next/static/media/logo.094b3b1a.png"
            alt="loading"
          />
        </Link>
        <div className="hidden md:block my-auto p-0 ">
          <ul className="flex flex-row justify-around text-center">
            <Link to="/contactus">
              <li className="nav-item flex flex-col justify-center">
                About us
              </li>
            </Link>
            <Link to="/contactus">
              <li className="nav-item ">Registration Services</li>
            </Link>

            <li
              className="nav-item dropdown-main "
              onMouseLeave={() => SetDropdown(false)}
              onMouseEnter={() => {
                SetDropdown(true);
              }}
            >
              Filing Services
            </li>
            {dropdown && (
              <div
                onMouseEnter={() => SetDropdown(true)}
                onMouseLeave={() => SetDropdown(false)}
                class="dropdowns rounded-md shadow-lg bg-white overflow-hidden"
              >
                <div class="grid grid-cols-1 gap-1 p-2">
                  <a href="/filing-services/gst-filings">
                    <button class="block hover:bg-blue-100 p-2 rounded-md text-sm text-gray-700">
                      GST Filings
                    </button>
                  </a>
                  <a href="/filing-services/annual-returns-filings">
                    <button
                      class="block hover:bg-blue-100 p-2 rounded-md text-sm text-gray-700"
                      onMouseEnter={() => {
                        SetSubDropdown(true);
                      }}
                      onMouseLeave={() => {
                        SetSubDropdown(false);
                      }}
                    >
                      Annual Returns Filings
                    </button>
                  </a>
                  <a href="/filing-services/income-tax-filings">
                    <button class="block hover:bg-blue-100 p-2 rounded-md text-sm text-gray-700">
                      Income Tax Filings
                    </button>
                  </a>
                  <a href="/filing-services/esic-filings">
                    <button class="block hover:bg-blue-100 p-2 rounded-md text-sm text-gray-700">
                      ESIC Filings
                    </button>
                  </a>
                  <a href="/filing-services/pf-filings">
                    <button class="block hover:bg-blue-100 p-2 rounded-md text-sm text-gray-700">
                      PF Filings
                    </button>
                  </a>
                </div>
              </div>
            )}
            {subdropdown && (
              <div
                class="grid grid-cols-1 gap-1 p-2 dropdowns sub-drop"
                onMouseEnter={() => {
                  SetDropdown(true);
                  SetSubDropdown(true);
                }}
                onMouseLeave={() => {
                  SetDropdown(false);
                  SetSubDropdown(false);
                }}
              >
                <a href="/filing-services/gst-filings">
                  <button class="block hover:bg-blue-100 p-2 rounded-md text-sm text-gray-700">
                    GST Filings
                  </button>
                </a>
                <a href="/filing-services/annual-returns-filings">
                  <button class="block hover:bg-blue-100 p-2 rounded-md text-sm text-gray-700">
                    Annual Returns Filings
                  </button>
                </a>
                <a href="/filing-services/income-tax-filings">
                  <button class="block hover:bg-blue-100 p-2 rounded-md text-sm text-gray-700">
                    Income Tax Filings
                  </button>
                </a>
                <a href="/filing-services/esic-filings">
                  <button class="block hover:bg-blue-100 p-2 rounded-md text-sm text-gray-700">
                    ESIC Filings
                  </button>
                </a>
                <a href="/filing-services/pf-filings">
                  <button class="block hover:bg-blue-100 p-2 rounded-md text-sm text-gray-700">
                    PF Filings
                  </button>
                </a>
              </div>
            )}
            <Link to="/contactus">
              <li className="nav-item ">Recruitment Services</li>
            </Link>
            <Link to="/contactus">
              <li className="nav-item ">Website Services</li>
            </Link>
            <Link to="/contactus">
              <li className="nav-item ">Project Funding</li>
            </Link>
            <Link to="/contactus">
              <li className="nav-item ">Contact Us</li>
            </Link>
            <Link to="/contactus">
              <li className="nav-item  flex flex-row  ">Blog</li>
            </Link>
          </ul>
        </div>
        {/* <div className="md:hidden block"> */}
        <svg
          width="30px"
          className="md:hidden blockfill-current text-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        {/* </div> */}
        <span
          className="float-blog-icon mb-4 flex"
          onClick={() => SetPopup(true)}
        >
          <svg
            className="icons blog-icon fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM256 160c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32zm64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0zM192 352c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </span>
        {popup && (
          <div class="blog-popup block fixed right-0 top-0 mt-16 mr-4 p-4 w-64 bg-white shadow-lg rounded-lg z-50 flex flex-col items-center">
            <button
              aria-label="Close"
              class="absolute top-0 right-0 p-2"
              onClick={() => {
                console.log("hii");
                SetPopup(false);
              }}
            >
              <svg
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div class="flex flex-col items-center mt-5 mb-4">
              <a href="/">
                <span>
                  <img
                    src="https://sspassociates.in/_next/static/media/logo.094b3b1a.png"
                    alt="SSP Associates Logo"
                    class="logo h-14"
                  />
                </span>
              </a>
              <p class="text-center text-black mt-4">
                Services that guarantee precision, dependability, integrity, and
                trust, complemented by outstanding client support.
              </p>
              <h1 class="font-bold mt-9">Get In Touch</h1>
              <div class="flex items-center gap-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-6 w-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  ></path>
                </svg>
                <span>+91 9866800494</span>
              </div>
              <div class="flex items-center gap-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-6 w-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  ></path>
                </svg>
                <span>+91 8977000494 </span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-6 w-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  ></path>
                </svg>
                <span>info@sspassociates.in</span>
              </div>
              <div class="flex flex-col items-center gap-2 mt-4 text-center">
                <span>Monday - Saturday: 10:00AM - 6:00PM</span>
                <span>Sunday: Closed</span>
              </div>
              <br />
              <div class="flex">
                <a href="https://www.facebook.com">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 320 512"
                    class="text-black hover:text-gray-300 mr-4 cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a href="https://www.twitter.com">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="text-black hover:text-gray-300 mr-4 cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="text-black hover:text-gray-300 mr-4 cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a href="https://www.youtube.com">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    class="text-black hover:text-gray-300 mr-4 cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
                <a href="https://plus.google.com">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    class="text-black hover:text-gray-300 cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarMain;
