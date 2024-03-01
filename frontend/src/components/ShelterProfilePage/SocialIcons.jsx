import React from 'react';

function SocialIcons() {
  const instagramInputId = "galleryInputInstagram";
  const linkedinInputId = "galleryInputLinkedin";
  const twitterInputId = "galleryInputTwitter";

   return (
    <main className="select-none bg-Primary p-0 font-poppins text-black">
      <div className=" mb-5 flex flex-col gap-2 px-4 py-4">
      <label className="mb-3 block text-lg font-semibold" htmlFor="description">
             Redes Sociales
            </label>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id={instagramInputId}
      />
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="../../../img/shelters/instagram.jpg" alt="Red Social" />
      </a>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id={linkedinInputId}
      />
       <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
       <img src="../../../img/shelters/Linkedin.jpg" alt="Red Social" />
       
      </a>

      <input
        type="file"
        accept="image/*"
        className="hidden"
        id={twitterInputId}
      />
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="../../../img/shelters/Twiter.jpg"alt="Red Social" />
      </a>
    </div>
    </main>

    
  );
}

export default SocialIcons;