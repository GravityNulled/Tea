import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  street: string;
  zip: number;
  city: string;
}

const Delivery = (props: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <section className="py-10 md:w-5/6 container mx-auto bg-background_2">
      <div className="flex items-center justify-between px-5">
        <p className="uppercase">1. My Bag</p>
        <p className="border-b-[2px] w-[200px] border-black"></p>
        <p className="uppercase font-bold">2. Delivery </p>
        <p className="border-b-[2px] w-[200px] border-black"></p>
        <p className="uppercase">3. Review & Payment </p>
        <p className="border-b-[2px] w-[200px] border-black"></p>
      </div>
      <form className="grid grid-cols-2 px-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-7 mt-10">
          <h1>Shipping Address</h1>
          <div className="flex flex-col">
            <input
              {...register("firstName", {
                required: "Enter your Name",
                pattern: {
                  value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                  message: "Enter a valid Name",
                },
              })}
              type="text"
              placeholder="First Name"
              className="px-3 py-1 max-w-[250px] border-black border outline-none"
            />
            <p className="text-xs text-red-600 mt-1">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="flex flex-col">
            <input
              {...register("lastName", {
                required: "Enter your Name",
                pattern: {
                  value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                  message: "Enter a valid Name",
                },
              })}
              type="text"
              placeholder="Last Name"
              className="px-3 py-1 max-w-[250px] border-black border outline-none"
            />
            <p className="text-xs text-red-600 mt-1">
              {errors.lastName?.message}
            </p>
          </div>
          <div className="flex flex-col">
            <input
              {...register("street", { required: "Enter the street" })}
              type="text"
              placeholder="Street"
              className="px-3 py-1 max-w-[250px] border-black border outline-none"
            />
            <p className="text-xs text-red-600 mt-1">
              {errors.street?.message}
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <input
                {...register("zip", {
                  required: "Enter the zip",
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Postal Code"
                className="px-3 py-1 max-w-[250px] border-black border outline-none"
              />
              <p className="text-xs text-red-600 mt-1">{errors.zip?.message}</p>
            </div>
            <div className="flex flex-col">
              <input
                {...register("city", { required: "Enter the City" })}
                type="text"
                placeholder="City"
                className="px-3 py-1 max-w-[250px] border-black border outline-none"
              />
              <p className="text-xs text-red-600 mt-1">
                {errors.city?.message}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-background_2">
          <p className="mx-8 py-8">Order summary</p>
          <div className="flex gap-4 flex-col mx-8">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>€3.90</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p>€3.95</p>
            </div>
            <p className="border-b-[2px] border-black"></p>
            <div className="flex justify-between">
              <p>Total</p>
              <p>€7.85</p>
            </div>
            <p className="text-sm">Estimated shipping time: 2 days</p>
            <button className="bg-black text-white uppercase px-8 py-2 w-fit">
              Go to payment
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Delivery;
