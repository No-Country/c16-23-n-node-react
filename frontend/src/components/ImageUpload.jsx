import { useRef, useState } from "react";
import profile from "/img/profile/user.png";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="h-200 relative flex flex-col items-center justify-center">
      <figure className="w-166 h-166 flex items-center justify-center rounded-full border-4 border-black bg-Gray">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="w-160 h-160 rounded-full"
          />
        ) : (
          <img
            src={profile}
            alt="Profile"
            className="absolute right-40 top-11"
            style={{ transform: "rotate(4deg)" }}
          />
        )}
      </figure>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        className="absolute right-28 top-32 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-black bg-Tertiary"
        onClick={handleUploadButtonClick}
      >
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.354 13.566L19.356 2.99203C19.356 1.52203 18.17 0.327026 16.701 0.327026C15.231 0.327026 14.026 1.52204 14.036 2.98204L14.034 13.567L3.44901 13.569C1.97901 13.569 0.794006 14.764 0.794006 16.234C0.794006 17.704 1.98901 18.889 3.45901 18.889L14.033 18.887L14.031 29.461C14.031 30.931 15.217 32.126 16.686 32.126C17.421 32.126 18.092 31.827 18.572 31.347C19.052 30.867 19.356 30.201 19.351 29.471L19.353 18.886L29.938 18.884C30.673 18.884 31.334 18.585 31.814 18.105C32.294 17.625 32.593 16.954 32.593 16.219C32.593 14.749 31.398 13.564 29.928 13.564L19.354 13.566Z"
            fill="#FFFAF3"
          />
        </svg>
      </button>
    </section>
  );
}

export default ImageUpload;
