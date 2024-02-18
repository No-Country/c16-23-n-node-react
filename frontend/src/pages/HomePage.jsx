import FotoPortada from '../assets/img/fotoPerro.jpg'
import FotoGato from '../assets/img/fotoGato.jpg'
import PetCard from '../components/PetCard'
import Carousel from '../components/Carrousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Dropdown from '../components/Dropdown'

function HomePage() {
  const data = [
    { id: 1, nombre: 'Nombre1', refugio: 'Refugio1', info: 'Macho', tipo: 'jugueton', foto_url: FotoPortada },
    { id: 2, nombre: 'Nombre2', refugio: 'Refugio2', info: 'Macho', tipo: 'jugueton', foto_url: FotoPortada },
    { id: 3, nombre: 'Nombre3', refugio: 'Refugio2', info: 'Hembra', tipo: 'jugueton', foto_url: FotoPortada },
    { id: 4, nombre: 'Nombre4', refugio: 'Refugio2', info: 'Hembra', tipo: 'jugueton', foto_url: FotoPortada },
  ]

  const images = [FotoPortada, FotoGato]

  return (
    <>
      <Navbar />
      <div className="bg-Primary p-5 select-none">
        <div className="mb-8 mx-5">
          <Carousel images={images} />
        </div>

        <h1 className="font-bold font-poppins text-2xl my-5">¡Encuentra tu mascota ideal!</h1>
        <div className="flex flex-wrap justify-between mb-4">
          <Dropdown title={'Especie'} options={['Perro', 'Gato']} />
          <Dropdown title={'Tamaño'} options={['Chico', 'Grande']} />
          <Dropdown title={'Genero'} options={['Macho', 'Hembra']} />
          <Dropdown title={'Actitud'} options={['Tranquilo', 'Jugueton']} />
        </div>

        <main className="flex flex-wrap">
          {data.map((item) => (
            <div key={item.id} className="w-1/2">
              <PetCard data={item} />
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default HomePage