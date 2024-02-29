/* eslint-disable react/prop-types */
function Card({ data }) {
  return (
    <div className="bg-PrimaryDark rounded-xl overflow-hidden shadow-sm m-1">
      <div className="m-3">
        <img src={data.foto_url} alt="foto perro" className="w-full h-auto rounded-md" />
      </div>
      <div className="px-3">
        <div className="flex justify-between mb-2">
          <p className="text-sm font-poppins   ">{data.nombre}</p>
          <p className="text-sm font-poppins  ">{data.refugio}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-poppins   ">{data.info}</p>
          <p className="text-sm text-right font-poppins ">{data.tipo}</p>
        </div>
        <div className="text-center my-3">
          <button className="px-3 py-1 bg-Tertiary text-White font-poppins rounded-full">Saber más</button>
        </div>
      </div>
    </div>
  )
}

export default Card
