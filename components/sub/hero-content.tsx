"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">EMERGENCY CALL</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            International{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              S.0.S. 2 477
            </span>{" "}
            Hamburg|DE
          </span>
        </motion.div>

        <motion.p
  variants={slideInFromLeft(0.8)}
  className="text-lg text-gray-400 my-5 max-w-[600px]"
>
  We are several{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
    world citizens from across the globe
  </span>
  , sending an S.O.S. into the void. Analog and digital, through space and time—no matter who or what you are—we need you now.
  <br />
  <br />
  To save lives,{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
    please volunteer some of your time
  </span>{" "}
  to read further and help us reach the press, authorities, and courts.
  <br />
  <br />
  We united at several points in our lives with a shared mission: to support{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
    equality, innovation, and peace projects
  </span>
  —as members of or collaborators with Anonymous, like-minded individuals, and other civilly courageous groups.
  <br />
  <br />
  While striving to improve society through green, updatable technologies—to connect people, and to develop educational and medical tools made from recyclable materials, affordable for everyone—we became targets of those driven by hate and extremism.
  <br />
  <br />
  Some of us have already been killed. Others are in danger. Those who escaped or support us are now unreachable. We are isolated and trapped in networks of human trafficking led by extremist and war-supporting actors.
  <br />
  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
    Witness X
  </span>
  , a German whistleblower, stands as our representative—our eyes, ears, and voice to the public. Please continue reading and help us take action. Your support could bring our situation to the attention of the press, authorities, and the courts—and potentially save lives.
</motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          We are several{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            worldcitizens across the globe{" "}
          </span>
           sending a S.0.S into the void. Analog and digital, through space
          and time - no matter who and what you are - we need you now!
          To save several lifes, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        please
          volunteer some of your time to </span>read further and help us to activate the press,
          authorities and court.
          <br />
          <br />
          We united @ several points of 0ur lifes in our mission to support{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            equality, innovation & peace projexts &nbsp;
          </span>
          as membes / in cooperation with anonymous, several same minded and
          civilcouraged individuums as well as groups.
          <br />
          <br />
          While we tried to help to better our society by developing green and
          reupdateable tech to connect the people of this planet - by
          implementing educational and medical tech made out of recycleable
          materials, affordable for everyone - various personas and groups that
          follow ideologies of hate attacked us.
          <br />
          <br />
          Some of us are already dead, others are endangered and those who
          escaped or support us are out of reach rn - we are isolated and
          trapped in human trafficking of extremist and war supporting actors.
          <br />
          <br />
          Witness X, a German whistleblower, will be our representant. X acts as
          our eyes, ears, and voice, sharing critical information with the
          public. Please continue reading and help us take action. Your support
          is crucial in bringing this issue to the attention of the press,
          authorities, and the courts—potentially saving our lives.
          <br />
          <br />
          Witness X - a german whistleblower -
          act as our eyes, ears and voice to the public. 
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          //          We are several worldcitizens from all around the globe who connected
          //        to witness X - a german whistleblower. X act as our eyes, ears and
          //      voice to the public. Please read further to save our lifes by helping
          //    us to activate the press, authorities and court.
        >
          Save Us Now
        </motion.a>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Save Us Now
        </motion.a>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Save Us Now
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
