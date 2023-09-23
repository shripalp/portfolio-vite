//import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://lh3.googleusercontent.com/pw/AIL4fc_onnAeFLUFytEIQx0VIqEqhNKZYYjfKBTUkkxeBk4szC1aTwyINbAX7LlTW_g0I9AwszeVSk6mfh6Aw0cM5WSehhUsXSmwUFkCTHMxAXpYsFes20zyGAQ1kBDrKQY2j_qlKErmaYiS9HmKTUhwC2F-PefuFqrb07Dgm5yaoBGt_cj1OGyccwtF1kOI3ntzozF-WtKzsMqccFcN0NwfMAWJ6vyKw5cvyOEOI3hCKGqCKFEjs7qoCwpqCkH5QoLwNDQ5L31OcjVNST7PX-Md_ELfJVMFP4oEGpPYmw1iFmckWYTOXriCC7vQWnvpKKuuJZZZZdnlOc5yDdl_c6ioD-EwZ2cWZp4ECaiqT6OfTmr42XMOUK-l3i4CebW54_Vxk7UokLBJ_mskXokgyDxn4DtA0wWNPn-jEje3NO_sqK-y7uKGoseNYIP3EPCA5ljIvA-0_WCt4ptNCMhAyL2z0teaDlZgRRaxqyxr1u94ExeLRqUXYgD5uSVRANRAFTZQhmUX7vWBm_vJ3yBdvNdPPH3L-SN21rzCD4m2YUKVigSVJT4jBfKAI8dPaRk9AUuoCGGSUs6C6pa-Z2krP8WF6QD3sRcaoJFCnediXJvWDoQVy4cEgIFfiPM-FgSR8LLdaFamW3pqnSRHCyUjEsLoUZrUfPpzA7lxTzimmjEgfuz5qgpOBM4fssCQMn8HV2B_iFYv3DfpCpYrNoXrrv3Jy_YOI9AMbGc1Q0rq9ELPqRT6GT3EomUiT7MBK2XdFryLk-qKOQl9c7gCVz3xynTTR2dyF3SYg00XOjOUPxB5q039aY-sF4s1rABdmqO6uBMoYRow7S4PFZUHn9uqLO_k16ZyHNWZkvBYOU6T_AVOoTkUaBD924ra3S9GF9QkuIsHHEjV1m7Y6kCpXJAvIku7XfF9g-U=w1201-h901-s-no?authuser=0"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Shripal Parikh
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I am a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "QA analyst",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Developer",
                1000,
                "Yoga Teacher",
                1000,
                "Biomedical Technologist",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
