const PetDeleteModal = () => {
    return (
        <div className="sm:bg-PrimaryDark sm:w-296 sm:h-328 sm:rounded-2xl sm:py-4 sm:pl-4 sm:pr-4 sm:flex sm:flex-col sm:align-center sm:gap-4"> 
            
                <div className="sm:h-7 sm:gap-2.5 sm:flex sm:flex-col sm:items-end"> 
                    <div className="sm:w-full sm:h-full sm:flex sm:justify-end">
                        {/* <img src="" alt="" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                    </div>
                </div>

                <div className="sm:w-full sm:h-180"> 
                    <p className="sm:text-SecondaryDark sm:font-poppins sm:font-semibold sm:text-2xl sm:leading-9 text-center">¿Estás seguro de que quieres eliminar esta mascota?</p>
                </div>

                <div className=" sm:h-14 sm:flex sm:justify-center sm:items-end">  
                    <button className="sm:bg-Alert sm:text-White sm:w-171 sm:h-10 sm:rounded-2xl sm:font-poppins sm:font-semibold sm:text-base sm:text-center">Eliminar</button>
                </div>  
                
                <div className="sm:flex sm:justify-center sm:items-end">  
                    <button className="sm:bg-TertiaryDark sm:text-White sm:w-171 sm:h-10 sm:rounded-2xl sm:font-poppins sm:font-semibold sm:text-base sm:text-center">Cancelar</button>
                </div>
           
        </div>
    )
}

export default PetDeleteModal