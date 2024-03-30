import { Modal, Tooltip } from "antd";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";

const demoyData = [
  {
    title: "alihamzapvt445@gmail.com",
    icon: <MdEmail />,
    copy: <FaRegCopy />,
  },
  {
    title: "03081473996",
    icon: <FaPhoneAlt />,
    copy: <FaRegCopy />,
  },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCopy = (item: string) => {
    navigator.clipboard.writeText(item);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <>
      <div className="h-screen bg-[#1D1A18]">
        <div className="flex justify-between items-center ml-6 mr-6 pt-6">
          <div className="text-3xl text-white italic font-serif">
            Portfolio <span className="text-red-900">.</span>
          </div>
          <div className="flex justify-between items-center w-52 text-white">
            <div className="cursor-pointer hover:text-red-900">Home</div>
            <div className="cursor-pointer hover:text-red-900">About</div>
            <div className="cursor-pointer hover:text-red-900">Resume</div>
          </div>
          <button
            className="bg-red-900 text-white py-2 px-4 rounded-[10px]"
            onClick={showModal}
          >
            Hire me!
          </button>
        </div>
        <div className="text-3xl text-red-900 font-serif ml-6 mr-6">
          ............
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[50%] mt-20 flex justify-center ml-20 flex-col h-[100%] gap-[1rem]">
            <div className="text-4xl text-white font-serif">
              <div className="mb-2"> I'm Ali Hamza, a </div>
              <div> Frontend Developer</div>
            </div>
            <div className="text-xl text-white font-serif">
              I design web apps to turn your ideas into reality.
            </div>
            <button className="bg-red-900 text-white py-2 px-4 w-32 rounded-[10px]">
              Get in touch
            </button>
          </div>
          <div className="flex justify-center mt-20 h-[100%] w-[50%]">
            <div className="rounded-full h-96	 w-96 overflow-hidden">
              <img
                className=""
                height={"100%"}
                width={"100%"}
                src="https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18655.jpg?t=st=1709400323~exp=1709403923~hmac=0bf8841a805c6b1b41ba57998c79e6fc32314fba32983bd8fcf241767fd7d219&w=360"
                alt="please wait"
              />
            </div>
          </div>
        </div>

        <Modal
          title={<div className="text-xl text-red-900">Contact me</div>}
          footer={false}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            {demoyData?.map((item) => (
              <div className="flex items-center gap-2 mb-4 mt-4">
                <div>{item?.icon}</div>
                <div>{item?.title}</div>
                <Tooltip title={!copied ? "Copy" : "Copied"}>
                  <div
                    className="ml-6 cursor-pointer"
                    onClick={() => handleCopy(item?.title)}
                  >
                    {item?.copy}
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </Modal>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4">1</div>
        <div className="bg-gray-200 p-4">2</div>
        <div className="bg-gray-200 p-4">3</div>
        <div className="bg-gray-200 p-4">4</div>
        <div className="bg-gray-200 p-4">5</div>
        <div className="bg-gray-200 p-4">6</div>
      </div>
    </>
  );
};

export default Home;
