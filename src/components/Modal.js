import React from "react";

export default function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-offWhite">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-[#333333] rounded-t bg-[#e0e0e0]">
                  <h3 className="text-3xl font-semibold text-[#333333]">
                    Thank You!
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto bg-[#e0e0e0]">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed text-[#333333]">
                    Your message has been successfully sent.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-[#333333] rounded-b bg-[#e0e0e0]">
                  <button
                    className="font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all 
                               duration-150 text-[#e0e0e0] bg-[#0f0f61] hover:!bg-[#050570] hover:text-[#e0e0e0] hover:border-[#e0e0e0] border-blueText hover:!scale-0.001"
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
