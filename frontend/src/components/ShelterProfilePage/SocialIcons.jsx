import React from 'react';

function SocialIcons() {
  const instagramInputId = "galleryInputInstagram";
  const linkedinInputId = "galleryInputLinkedin";
  const twitterInputId = "galleryInputTwitter";

   return (
    <main className="select-none bg-Primary p-0 font-poppins text-black">
      <div className=" flex flex-col md:flex-row mb-8 gap-2 px-4 py-4">
      <label className="mb-3 block text-lg font-semibold" htmlFor="description">
             Redes Sociales
            </label>
      <div className="mb-5 h-0 flex flex-col md:flex-row gap-3 px-8 py-4 font-poppins">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id={instagramInputId}
      />
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
      <img src="../../../img/shelters/instagram.jpg" alt="Red Social" className="mx-6 md:mx-6 mb-3 md:mb-0"/>
      <button className="w-full md:w-200 h-10 rounded-2xl bg-Tertiary text-White mx-auto md:mx-5">
           Vinculo
      </button>
      </a>
      </div>

      <div className="mb-5 h-0 flex flex-col md:flex-row gap-3 px-8 py-4 font-poppins">
        <input
        type="file"
        accept="image/*"
        className="hidden"
        id={linkedinInputId}
      />
       <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
       <img src="../../../img/shelters/Linkedin.jpg" alt="Red Social" className="mx-6 md:mx-6 mb-3 md:mb-0"/>
       <button className="w-full md:w-200 h-10 rounded-2xl bg-Tertiary text-White mx-auto md:mx-5">
           Vinculo
      </button>
       </a>
      </div> 

      <div className="mb-5 h-0 flex flex-col md:flex-row gap-3 px-8 py-4 font-poppins">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id={twitterInputId}
      />
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <img src="../../../img/shelters/Twiter.jpg"alt="Red Social" className="mx-6 md:mx-6 mb-3 md:mb-0"/>
       <button className="w-full md:w-200 h-10 rounded-2xl bg-Tertiary text-White mx-auto md:mx-5">
           Vinculo
      </button>
      </a>
      </div>
    </div>
    </main>

    
  );
}

export default SocialIcons;