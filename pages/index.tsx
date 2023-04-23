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
          className="object-cover"
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
            onClick={() => router.push("/")}
            text="BROWSE TEAS"
          />
        </div>
      </div>
      <CTA />
      <Collection />
    </main>
  );
}
