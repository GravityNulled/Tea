import Image from "next/image";
import { FC } from "react";

const Ingridient: FC<IIngridient> = ({
  image,
  discount,
  name,
  price,
  weight,
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Image
        src={image}
        width={200}
        height={200}
        alt="ingridient"
        className="h-[200px] w-[200px] object-cover"
      />
      <p className="w-3/4 text-sm text-center">{name}</p>
      <p className="text-sm text-center">
        €{price} / {weight}
      </p>
    </div>
  );
};

export default Ingridient;
