import React from "react";
import { useDropzone } from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";

const CustomDropZone = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
  });
  return (
    <div>
      {" "}
      <div
        {...getRootProps()}
        className={`border-2 w-full mr-4 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-primary bg-primary/10"
            : "border-gray-300 hover:border-primary"
        }`}
      >
        <input {...getInputProps()} />
        <MdCloudUpload className="mx-auto text-4xl text-gray-400 mb-4" />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some Images here, or click to select Images</p>
        )}
      </div>
    </div>
  );
};

export default CustomDropZone;
