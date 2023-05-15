import Button from "@/components/button";
import { ChangeEvent, useState } from "react";
import { AiOutlineMail, AiOutlineGift } from "react-icons/ai";
const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <section className="w-full mt-10 flex justify-center items-center">
      <form className="flex flex-col bg-background_2 py-10 px-10">
        <h1>Already a customer?</h1>
        <p className="text-xs my-3">
          Welcome back! Sign in for faster checkout.
        </p>
        <div className="flex flex-col gap-7">
          <div className="relative">
            <input
              type="text"
              placeholder="Email Address"
              className="h-10 px-10 py-2 w-full"
              onChange={(e) => handleEmail(e)}
              value={email}
            />
            <div className="absolute top-[11px] left-[5px]">
              <AiOutlineMail size={20} />
            </div>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Email Address"
              onChange={(e) => handlePassword(e)}
              className="h-10 px-10 py-2 w-full"
              value={password}
            />
            <div className="absolute top-[11px] left-[5px]">
              <AiOutlineGift size={20} />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input type="checkbox" name="remember" id="remember" />
              <p className="text-xs">Please remember me</p>
            </div>
            <p className="text-[#C3B212] text-xs">Forget password?</p>
          </div>
          <button className="bg-black text-white px-4 py-2"> Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
