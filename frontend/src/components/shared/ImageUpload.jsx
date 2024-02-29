import { useRef, useState } from "react";
import profile from "/img/profile/profile.svg";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

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

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageHover = (hover) => {
    setIsHovered(hover);
  };

  return (
    <section className="relative flex h-200 flex-col items-center justify-center">
      <figure
        className="flex h-166 w-166 items-center justify-center"
        onClick={handleImageClick}
        onMouseEnter={() => handleImageHover(true)}
        onMouseLeave={() => handleImageHover(false)}
        style={{ cursor: "pointer" }}
      >
        {selectedImage ? (
          <>
            <img
              src={selectedImage}
              alt="Selected"
              className={`w-160 h-160 rounded-full border-4 border-black bg-Gray transition-opacity duration-300 ${
                isHovered ? "brightness-50" : "brightness-100"
              }`}
            />
            {isHovered && (
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-Tertiary"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.7569 18.9704L44.0454 25.2589M40.4249 16.3024C42.1614 14.5659 44.9768 14.5659 46.7134 16.3024C48.4499 18.0389 48.4499 20.8544 46.7134 22.5909L22.2253 47.079H16V40.7273L40.4249 16.3024Z"
                  stroke="#FFFAF3"
                  strokeWidth="2.66799"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </>
        ) : (
          <img src={profile} alt="Profile" className="absolute" />
        )}
      </figure>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </section>
  );
}

export default ImageUpload;
