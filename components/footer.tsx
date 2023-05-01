import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="py-10 mx-auto w-5/6 mt-16 bg-background_2">
      <div className="flex justify-between gap-16 mx-24">
        <div className="flex flex-col gap-8">
          <h1 className="font-semibold uppercase">Collections</h1>
          <div className="flex flex-col">
            <Link href="collections/Black tea">
              <p>Black tea</p>
            </Link>
            <Link href="collections/Green tea">
              <p>Green tea</p>
            </Link>
            <Link href="collections/White tea">
              <p>White tea</p>
            </Link>
            <Link href="collections/>Herbal">
              <p>Herbal tea</p>
            </Link>
            <Link href="collections/Matcha">
              <p>Matcha</p>
            </Link>
            <Link href="collections/Chai">
              <p>Chai</p>
            </Link>
            <Link href="collections/Oolong">
              <p>Oolong</p>
            </Link>
            <Link href="collections/Rooibos teas">
              <p>Rooibos teas</p>
            </Link>
            <Link href="collections/Teawhare">
              <p>Teawhare</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-semibold uppercase">About us</h1>
          <div className="flex flex-col">
            <p>About us</p>
            <p>About our tea</p>
            <p>Tea academy</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-semibold uppercase">Customer Service</h1>
          <div className="flex flex-col">
            <p>Ordering and payment</p>
            <p>Delivery</p>
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-semibold uppercase">Contact Us</h1>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <IoLocationOutline /> Mombasa, Kenya
            </div>
            <div className="flex items-center gap-4">
              <AiOutlineMail /> Email: annexomar@gmail.com
            </div>
            <div className="flex items-center gap-4">
              <BsTelephone /> Tel: +254720179897
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
