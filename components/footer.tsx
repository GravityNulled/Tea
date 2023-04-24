import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-background_2 py-10 mt-16">
      <div className="flex mx-24 gap-16 justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="uppercase font-semibold">Collections</h1>
          <div className="flex flex-col">
            <p>Black teas</p>
            <p>Green teas</p>
            <p>White teas</p>
            <p>Herbal teas</p>
            <p>Matcha</p>
            <p>Chai</p>
            <p>Oolong</p>
            <p>Rooibos teas</p>
            <p>Teawhare</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="uppercase font-semibold">About us</h1>
          <div className="flex flex-col">
            <p>About us</p>
            <p>About our tea</p>
            <p>Tea academy</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="uppercase font-semibold">Customer Service</h1>
          <div className="flex flex-col">
            <p>Ordering and payment</p>
            <p>Delivery</p>
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="uppercase font-semibold">Contact Us</h1>
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
