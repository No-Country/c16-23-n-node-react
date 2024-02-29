import { useRef, useState } from "react";

function ImageShelterProf() {
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
    <section className="relative flex h-max flex-col items-center justify-center">
      <figure className="flex h-166 w-166 items-center justify-center rounded-full border-4 border-black bg-Gray">
        <img src="shelter.jpg" alt="" className="w-33 h-33" />
      </figure>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {/* <button
        className="absolute right-28 top-32 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-black bg-Tertiary"
        onClick={handleUploadButtonClick}
      >
      </button> */}
    </section>
  );
}

export default ImageShelterProf;
