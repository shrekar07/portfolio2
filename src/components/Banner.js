import React from 'react';

const Banner = () => {
  return (
    <div className="py-6 border-t border-gray-800 mt-4">
      <div className="container relative max-w-[90%] ml-20">
        <p className="text-sm font-medium text-gray-400">
          Designed and Developed by
          <a 
            className="underline underline-offset-2 hover:text-foreground transition" 
            href="https://github.com/Shrekar7" 
            target="_blank" 
            rel="noopener noreferrer"
            data-state="closed"
            >
            Srikar Reddy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
