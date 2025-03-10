import React from 'react';

const TrustPilotReview = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-gray-200 mr-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-xl">John Doe</h3>
            <div className="flex items-center text-yellow-500">
              {/* Star Ratings */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${index < 4 ? 'fill-current' : 'text-gray-300'}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.27l-6.18 3.73 1.64-7.03L1 6.82l7.19-.61L10 0l2.81 6.21 7.19.61-4.46 4.15 1.64 7.03L10 15.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
            fermentum odio. Duis vulputate enim nulla, vitae tincidunt dui
            scelerisque nec.
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-500 text-sm">
            <span>March 10, 2025</span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
              Helpful
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300">
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustPilotReview;
