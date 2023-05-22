import Link from "next/link";
import { AiOutlineMail, AiOutlineGift } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { data: session } = useSession();
  if (session) {
    router.push("/");
  }
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const signInResponse = await signIn("credentials", {
      callbackUrl: "/",
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (!signInResponse?.error && signInResponse?.ok) {
      router.push("/");
    }
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
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input type="checkbox" name="remember" id="remember" />
              <p className="text-xs">Please remember me</p>
            </div>
            <Link href={"/account/register"} className="text-[#C3B212] text-xs">
              Create an account
            </Link>
          </div>
          <button className="bg-black text-white px-4 py-2"> Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
