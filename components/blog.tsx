import React from "react";
import Image from "next/image";

interface blogProps {
  title: string;
  description: string;
  author: string;
  image: string;
}
const Blog: React.FC<blogProps> = ({ title, author, description, image }) => {
  return (
    <article className="mt-4 bg-background_2 py-10">
      <h3 className="text-center font-bold text-xl font-secondary">
        {title} by {author}
      </h3>
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="object-cover"
      />
      <p className="py-10 mt-7">{description}</p>
    </article>
  );
};

export default Blog;
