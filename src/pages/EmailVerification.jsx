import React from "react";
import logo from "../assets/home0.png";
const EmailVerification = () => {
  return (
    <section className="flex flex-col gap-4 items-center mb-24 mt-10 ">
      <div>
        <img src={logo} alt="" className="w-48" />
      </div>
      <div>
        <h3 className="text-3xl font-medium tracking-normal ">STEP 2</h3>
      </div>
      <div className="flex flex-col gap-1 items-center mb-5">
        <h3 className="text-base font-medium tracking-normal">
          Your Ultimate renting partner
        </h3>
        <h1 className="text-2xl font-semibold tracking-normal">
          We have sent a confirmation link to{" "}
          <span className="text-[#FFB200]">[user-email]</span>. Please check
          your inbox and click on the link to verify your account.
        </h1>
      </div>

      <div>
        <ul className="text-[#FFB200] font-medium flex  gap-9 list-disc text-base">
          <li>FAQ+</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </section>
  );
};

export default EmailVerification;
