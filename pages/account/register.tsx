import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMail, AiOutlineGift, AiOutlineUser } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormInput {
  email: string;
  password: string;
  name: string;
}

const Register = () => {
  const [regErrors, setRegErrors] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await axios.post("/api/register", data);
    setRegErrors(res.data);
  };

  return (
    <section className="w-full mt-10 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-background_2 py-10 px-10"
      >
        <h1>Already a customer?</h1>
        <p className="text-xs my-3">
          Welcome back! Sign in for faster checkout.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                className="h-10 px-10 py-2 w-full"
                {...register("name", {
                  required: "Don't forget your name",
                })}
              />
              <div className="absolute top-[11px] left-[5px]">
                <AiOutlineUser size={20} />
              </div>
            </div>
            <p className="text-pink-600 text-xs mt-1">
              {errors?.name?.message}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="h-10 px-10 py-2 w-full"
                {...register("email", {
                  required: "Email required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Incorrect Email",
                  },
                })}
              />
              <div className="absolute top-[11px] left-[5px]">
                <AiOutlineMail size={20} />
              </div>
            </div>
            <p className="text-pink-600 text-xs mt-1">
              {errors?.email?.message}
            </p>
          </div>

          <div className="flex flex-col">
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="h-10 px-10 py-2 w-full"
                {...register("password", { required: "Password is required" })}
              />
              <div className="absolute top-[11px] left-[5px]">
                <AiOutlineGift size={20} />
              </div>
            </div>
            <p className="text-pink-600 text-xs mt-1">
              {errors?.password?.message}
            </p>
          </div>
          {/* Confirm Password */}
          <div className="flex flex-col">
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="h-10 px-10 py-2 w-full"
                {...register("password", { required: "Password is required" })}
              />
              <div className="absolute top-[11px] left-[5px]">
                <AiOutlineGift size={20} />
              </div>
            </div>
            <p className="text-pink-600 text-xs mt-1">
              {errors?.password?.message}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input type="checkbox" name="remember" id="remember" />
              <p className="text-xs">Please remember me</p>
            </div>
            <Link href={"/account/login"} className="text-[#C3B212] text-xs">
              Sign in
            </Link>
          </div>
          <button className="bg-black text-white px-4 py-2"> Register</button>
          <p className="text-pink-600 text-xs mt-1">{regErrors}</p>
        </div>
      </form>
    </section>
  );
};

export default Register;
