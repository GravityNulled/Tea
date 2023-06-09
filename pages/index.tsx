import BlogPreview from "@/components/BlogPreview";
import Button from "@/components/button";
import Collection from "@/components/collection";
import CTA from "@/components/cta";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main className="container py-10 mx-auto font-primary md:w-5/6">
      <div className="flex items-center gap-32">
        <Image
          src="/images/spoon.jpg"
          alt="tea"
          width={500}
          height={400}
          className="object-cover h-[400px]"
        />
        <div className="flex flex-col gap-10 max-w-[400px]">
          <h1 className="text-4xl font-secondary">
            Every day is unique, just like our tea
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
            adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit
            amet consectetur. Orci nibh nullam risus adipiscing odio. Neque
            lacus nibh eros in.
          </p>
          <Button
            bg_color="bg-primary"
            f_color="text-white"
            onClick={() => router.push("/collections")}
            text="BROWSE TEAS"
          />
        </div>
      </div>
      <CTA />
      <Collection />
      <BlogPreview />
      <div className="flex items-center justify-between gap-16 mt-10">
        <div className="flex flex-col gap-10">
          <h3 className="text-2xl font-semibold font-secondary">
            FOR WHOLESALERS
          </h3>
          <p className="w-[600px]">
            We offer loose tea leaves of the best quality for your business.
            With a choice of more than 450 different kinds of loose tea, we can
            make a sophisticated selection that fits exactly in your kind of
            establishment.
          </p>
          <Button
            bg_color="bg-background_2"
            f_color="text-background"
            onClick={() => router.push("/")}
            text="GET A FREE CONSULTATION"
          />
        </div>
        <Image
          src="/images/tea.jpg"
          alt="tea"
          height={450}
          width={450}
          className="object-cover h-[450px]"
        />
      </div>
    </main>
  );
}
