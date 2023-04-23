/* eslint-disable @next/next/no-img-element */
import React from "react";

const BlogPreview = () => {
  return (
    <div className="mt-4 bg-background_2 py-10">
      <h3 className="text-center font-bold text-xl mb-10 font-secondary">
        Last Blog Posts
      </h3>
      <div className="grid gap-4 grid-cols-2">
        <div className="flex items-center">
          <img
            src="/images/blog1.jpg"
            className="object-cover h-[400px]"
            alt="blog"
          />
          <div className="flex items-center flex-col gap-4">
            <h4 className="text-center uppercase font-semibold">
              How to steep tea like a pro
            </h4>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              dictum non consectetur a erat nam at. Risus nec feugiat in
              fermentum posuere urna nec tincidunt praesent.
            </p>
            <p className="uppercase cursor-pointer">Read More</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="/images/blog2.jpg"
            className="object-cover h-[400px]"
            alt="blog"
          />
          <div className="flex items-center flex-col gap-4">
            <h4 className="text-center uppercase font-semibold">
              How to steep tea like a pro
            </h4>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              dictum non consectetur a erat nam at. Risus nec feugiat in
              fermentum posuere urna nec tincidunt praesent.
            </p>
            <p className="uppercase cursor-pointer">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
