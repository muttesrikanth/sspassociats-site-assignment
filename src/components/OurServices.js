import React from "react";

const OurServices = () => {
  return (
    <div class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4 tracking-tight shadow-lg p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text animate-pulse">
            Our Services
          </h2>
          <p class="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our range of services designed to support your business.
          </p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
          <a
            class="rotating-card flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer transform hover:scale-105"
            href="/"
          >
            <div class="counter-rotating-content p-2 rounded-full bg-red-100 mb-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-red-500"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
              </svg>
            </div>
            <div class="counter-rotating-content">
              <h3 class="text-lg font-semibold text-gray-800">
                Private Limited Company
              </h3>
            </div>
          </a>
          <a
            class="rotating-card flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer transform hover:scale-105"
            href="/"
          >
            <div class="counter-rotating-content p-2 rounded-full bg-red-100 mb-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-red-500"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M1 21h12v2H1v-2zM5.24 8.07l2.83-2.83 14.14 14.14-2.83 2.83L5.24 8.07zM12.32 1l5.66 5.66-2.83 2.83-5.66-5.66L12.32 1zM3.83 9.48l5.66 5.66-2.83 2.83L1 12.31l2.83-2.83z"></path>
              </svg>
            </div>
            <div class="counter-rotating-content">
              <h3 class="text-lg font-semibold text-gray-800">
                GST Registration
              </h3>
            </div>
          </a>
          <a
            class="rotating-card flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer transform hover:scale-105"
            href="/"
          >
            <div class="counter-rotating-content p-2 rounded-full bg-red-100 mb-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-red-500"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM9.5 8a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0zm6.5 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
              </svg>
            </div>
            <div class="counter-rotating-content">
              <h3 class="text-lg font-semibold text-gray-800">
                Partnership Firm
              </h3>
            </div>
          </a>
          <a
            class="rotating-card flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer transform hover:scale-105"
            href="/"
          >
            <div class="counter-rotating-content p-2 rounded-full bg-red-100 mb-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-red-500"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
              </svg>
            </div>
            <div class="counter-rotating-content">
              <h3 class="text-lg font-semibold text-gray-800">
                Public Limited Company
              </h3>
            </div>
          </a>
          <a
            class="rotating-card flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer transform hover:scale-105"
            href="/"
          >
            <div class="counter-rotating-content p-2 rounded-full bg-red-100 mb-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-red-500"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1 2 6v2h20V6z"></path>
              </svg>
            </div>
            <div class="counter-rotating-content">
              <h3 class="text-lg font-semibold text-gray-800">
                LLP Registration
              </h3>
            </div>
          </a>
          <a
            class="rotating-card flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer transform hover:scale-105"
            href="/"
          >
            <div class="counter-rotating-content p-2 rounded-full bg-red-100 mb-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-red-500"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
            </div>
            <div class="counter-rotating-content">
              <h3 class="text-lg font-semibold text-gray-800">
                OPC Registration
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
