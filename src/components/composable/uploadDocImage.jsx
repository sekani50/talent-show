"use client";
import React, { useEffect, useState } from "react";
import { BsImage } from "react-icons/bs";

const UploadingDocImage = ({ setUploadedImage }) => {
  const [isEdit, setEdit] = useState(false);
  const [upload, setUpload] = useState("");

  const handleUpload = async (e) => {
    if (e.target.files[0]) {
      const files = e.target.files[0];
      console.log(e.target.files);
      const image = URL.createObjectURL(files);
      setUpload(image);
      setUploadedImage(files);

      //setEdit(true)
    }
  };
  useEffect(() => {
    if (upload) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  }, [upload]);

  const editImage = () => {
    setUpload("");
    setUploadedImage(null);
  };

  return (
    <div className="mb-4 ">
      <div className="flex justify-end mb-3 items-end w-full">
        {isEdit && (
          <button
            onClick={editImage}
            className="text-white font-medium px-3 py-1 bg-red-600 rounded-lg hover:bg-red-700"
          >
            Edit
          </button>
        )}
      </div>

      <label
        htmlFor={"idcard"}
        className="flex items-center overflow-hidden bg-gray-200 justify-center w-full h-[220px] rounded-sm border-dashed border border-gray-200"
      >
        {!upload && (
          <div className="flex flex-col space-y-2 items-center justify-center w-fit h-fit">
            <BsImage className="text-black text-[25px] sm:text-[30px] " />

            <div className="text-black uppercase font-light text-sm ">
              {"Upload your National ID card"}
            </div>
          </div>
        )}

        {upload && (
          <div className="w-full h-full">
            <img
              src={upload}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <input
          type="file"
          hidden
          id={"idcard"}
          accept={"image/png, image/jpg, image/jpeg"}
          onChange={(e) => {
            handleUpload(e);
          }}
        />
      </label>
    </div>
  );
};

export default UploadingDocImage;
