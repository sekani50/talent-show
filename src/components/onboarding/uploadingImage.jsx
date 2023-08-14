"use client";
import React, { useEffect, useState } from "react";
import { BsFillCloudFill } from "react-icons/bs";


const UploadingImage = ({ setUploadedImage }) => {
  const [upload, setUpload] = useState("");
  const [isEdit, setEdit] = useState(false);
  

  const handleUpload = async (e) => {
    if (e.target.files[0]) {
      const files = e.target.files[0];
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
    <div className="mb-4">
      <div className="flex justify-between mb-3 items-start w-full">
        <p className="font-semibold sm:text-lg ">Upload a short video of you in action</p>
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
        htmlFor="upload"
        className="flex items-center overflow-hidden justify-center w-full h-[220px] rounded-lg border-dashed border border-[#017297]"
      >
        {!upload && (
          <div className="flex flex-col space-y-2 items-center justify-center w-fit h-fit">
            <BsFillCloudFill className="text-[#017297] text-[25px] sm:text-[30px] "/>

            <div className="text-[#132D46] font-light text-sm ">
              Click to upload
            </div>
            
          </div>
        )}
     
        {upload &&  (
          <video controls src={upload} className="w-full h-full object-cover" />
        )}
        <input
          type="file"
          hidden
          id="upload"
          accept="video/*"
          onChange={(e) => {
            handleUpload(e);
          }}
        />
      </label>
    </div>
  );
};

export default UploadingImage;
