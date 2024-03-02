import React from 'react';
import { useForm } from "react-hook-form";

function SocialIcons() {
  const instagramInputId = "galleryInputInstagram";
  const linkedinInputId = "galleryInputLinkedin";
  const twitterInputId = "galleryInputTwitter";

  const {
     reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = (data) => {
       reset({
          userName:"",
    });
    
  }

   return (
    <main className="select-none bg-Primary p-0 font-poppins text-black">
      <div className=" flex flex-col md:flex-row mb-6 gap-2 px-4 py-4">
      <h1 className="mb-3 block text-lg font-semibold" htmlFor="description">
             Redes Sociales
            </h1>

         <div className="mb-5 flex flex-row items-center gap-2 px-0 py-0 font-poppins">
           <input
             type="file"
             accept="image/*"
             className="hidden"
             id={instagramInputId}
           />
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
             <img src="../../../img/shelters/instagram.jpg" alt="Red Social" className="mx-6 md:mx-6 mb-3 md:mb-0" />
           </a>
           <div className="mb-5">
             
             <input
               className="mt-1 block w-full rounded-2xl bg-White px-2 py-2 shadow-xl outline-none"
               {...reset("userName", {
                 required: true,
                 minLength: 8,
                 maxLength: 20,
               })}
               type="text"
               id="name"
               placeholder="Username"
             />
           </div>
         </div>
      <div className="mb-5 flex flex-row items-center gap-2 px-0 py-0 font-poppins">
        <input
        type="file"
        accept="image/*"
        className="hidden"
        id={linkedinInputId}
      />
       <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
       <img src="../../../img/shelters/Linkedin.jpg" alt="Red Social" className="mx-6 md:mx-6 mb-3 md:mb-0"/>
       </a>
       <div className="mb-5">
             <input
               className="mt-1 block w-full rounded-2xl bg-White px-2 py-2 shadow-xl outline-none"
               {...reset("userName", {
                 required: true,
                 minLength: 8,
                 maxLength: 20,
               })}
               type="text"
               id="name"
               placeholder="Username"
             />
           </div>
       
      </div> 

      <div className="mb-5 h-0 flex flex-col md:flex-row gap-2 px-0 py-0 font-poppins">
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