import Image from "next/image";
import React from "react";

const BlogPreview = () => {
  return (
    <div className="py-10 mt-4 bg-background_2">
      <h3 className="mb-10 text-xl font-bold text-center font-secondary">
        Last Blog Posts
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Image
            height={400}
            width={200}
            src="/images/blog1.jpg"
            className="object-cover h-[400px]"
            alt="blog"
          />
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-semibold text-center uppercase">
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
          <Image
            height={400}
            width={200}
            src="/images/blog2.jpg"
            className="object-cover h-[400px]"
            alt="blog"
          />
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-semibold text-center uppercase">
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
