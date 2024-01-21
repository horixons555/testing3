import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

export default function ImageInput({
    label,
    imageUrl = "",
    setImageUrl,
    className = "col-span-full",
    endpoint = "",
}) {
    return (
        <div className={className}>
            <div className="flex justify-between items-center mb-4">
                <label
                    htmlFor="course-image"
                    className="block text-lg mt-3 font-medium text-white mb-2 "
                >
                    {label}
                </label>
                {imageUrl && (
                    <button
                        onClick={() => setImageUrl("")}
                        type="button"
                        className="flex mt-5 items-center bg-emerald-200 text-emerald-600 px-4 py-3 rounded-lg"
                    >
                        <Pencil className="w-5 h-5 mr-2" />
                        <span>Change Image</span>
                    </button>
                )}
            </div>
            {imageUrl ? (
                <div className="w-full flex items-center justify-center">
                    <Image
                        src={imageUrl}
                        alt="Item image"
                        width={1000}
                        height={667}
                        className="h-24 w-24 rounded-full object-cover"
                    />
                </div>
            ) : (
                <UploadDropzone
                    endpoint={endpoint}
                    onClientUploadComplete={(res) => {
                        setImageUrl(res[0].url);
                        // Do something with the response
                        toast.success("Image Upload Complete")
                        console.log("Files: ", res);
                        console.log("Upload Completed");
                    }}
                    onUploadError={(error) => {
                        // Do something with the error.
                        toast.error("Image Upload Failed")
                        console.log(`ERROR! ${error.message}`);
                    }}
                />
            )}
        </div>
    );
}