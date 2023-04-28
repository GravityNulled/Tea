import Collection from "@/components/collection";
import Image from "next/image";
const index = () => {
  return (
    <div className="py-10">
      <Image
        src="/images/banner.jpg"
        height={100}
        width={1024}
        alt="banner"
        className="object-cover h-[250px] w-full"
      />
      <Collection />
    </div>
  );
};

export default index;
