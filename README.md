# **Conexión Huellitas 🐾 (C16-23-n-node-react)**

<div align="center">
  
<img width="515" alt="solologo01 " src="https://github.com/No-Country/c16-23-n-node-react/assets/40127837/c6a05fa3-5946-44ff-9a20-cf80d895205b">


</div>
Aplicación Web App para la adopción de mascotas 🐶 🐱, que permite conectar de manera efectiva a posibles adoptantes con refugios de animales, facilitando el proceso de adopción a través de una interfaz intuitiva y segura 🩷📝. Este proyecto se desarrolla en el marco de una simulación laboral auspiciada por No Country, durante 4 semanas. 


Conexión Huellitas 🐾 soluciona la falta de información centralizada y accesible 🐕‍🦺 🐕 🐈 🐈‍⬛ sobre animales domésticos disponibles para adopción, en los refugios de Buenos Aires - Argentina.

Se pretende mitigar las siguientes problemáticas:

- Dificultades de los usuarios para encontrar información sobre mascotas disponibles para adopción.
- Falta de visibilidad y alcance para promover la adopción por parte de los refugios.
- Procesos de solicitud y evaluación para la adopción, largos y complejos.

Nuestra investigación de mercado se realizó con 11 usuarios de aplicaciones móviles residentes en Buenos Aires Argentina, a través de una encuesta online con Google Forms. También entrevistamos a 4 personas encargadas de refugios para conocer cómo podríamos facilitar la conexión entre interesados en adoptar y ellos, asegurándonos con un filtro previo (formulario de adopción en línea) de que los adoptantes sean la familia ideal para la mascota.

Para posteriores versiones, queremos centrar nuestros esfuerzos en facilitar el contacto entre personas interesadas en contribuir económicamente a refugios de mascotas rescatadas. Por ello, nuestro proyecto contempla que en un futuro los usuarios puedan donar cualquier suma de dinero, desde la comodidad de su celular, a través de MercadoPago.


<hr/>


## ✔ Funcionalidades MVP (Mobile) 📋


### **Usuarios adoptantes**

- Las mascotas disponibles para adoptar aparecen en un catálogo
- Mostrar mascotas con información esencial y fotografía reciente
- Hay filtros de búsquedas para encontrar una mascota según preferencias
- En cada mascota se puede clickear un botón para adoptar
- Formulario para que usuarios realicen solicitud de adopción (información para que los refugios puedan valorar el perfil del adoptante)
- El usuario recibe confirmación de la creación de su cuenta por e-mail.
- El usuario recibe copia de la información que diligenció en el formulario de adopción en su e-mail

### **Usuarios Refugios**

- Los Refugios crean una nueva mascota
- Refugios rellenan campos con información básica de la mascota y su foto
- Al crear un perfil diligencian los datos de la institución como razón social, número de identificación empresarial, ubicación. 
- Refugios le cambian a una mascota su estado: En Adopción / Adoptado
- Refugios reciben información del formulario diligenciado por cada candidato a adopción, directamente en su e-mail.

### **Administrador**

- El administrador maneja el CRUD de todos los usuarios.
- El administrador puede bloquear usuarios, dentro del perfil de cada uno.


## ✔ Backend

### 👉🏻 Lista de tareas ✅

- Desarrollo de la Rest Api para la búsqueda y adopción de mascostas con Javascript y Express.js.
- Validaciones con JWT Validation.
- Base de datos con MongoDB.
- Node.js como motor del servidor.
- Creación de filtros con Express.js.
- Envío de emails con Node Mailer para contacto.
- Despliegue en Railway

### 👉🏻 Construído con 🛠️
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-blue.svg?style=for-the-badge&logo=JSONWebTokens&logoColor=%)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Railway](https://img.shields.io/badge/Railway%20-000.svg?&style=for-the-badge&logo=railway&logoColor=fff)

### 👉🏻 Desarrolladores
|![MatiasM](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/0d88f5f2-25e8-4eee-b681-f9a017c93418) |![Billy](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/71e4e22e-18a5-433d-a85b-81f528b3dbbe)|![Gabriel](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/e077ca20-e96e-4a22-9a0a-c5cfb5565878)|
|:-:|:-:|:-:|
| **Matías Marensi**  | **Billy Mendieta**  | **Gabriel Lovera** |
| [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matias-marensi-67059823/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Matiasmarensi)|[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/billy-mendieta-cabrera) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/oscarald)| [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/loveragabriel/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/loveragabriel)|

<hr/>

## ✔ Frontend

### 👉🏻 Lista de Tareas ✅

- Desarrollo de pantallas a través de componentes dinámicos con Javascript y React.js.
- React Query para usar hooks para simples consultas.
- Contexto para manejar estados de usuarios.
- Estilo de componentes con la librería Tailwind.
- Se obtienen y cargan imagenes de mascotas con Cloudinary.
- Swiper simplifica el desarrollo de carruseles.
- Desplegado en Vercel.

### 👉🏻 Construído con 🛠️

![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=Javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React-149eca?style=for-the-badge&logo=react&logoColor=fff)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-149eca?style=for-the-badge&logo=react-query&logoColor=fff)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel%20-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white)

### 👉🏻 Desarrolladores
|![Edwin](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/501585c1-34df-44a7-954b-738086e05b78)|![Maximiliano](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/87230d22-674c-462e-b562-0e1cc35a8c27)|![Karelis](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/6d4da8b1-5670-4124-92da-218e1d5cc4c8)|![Irvin](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/1f87c08f-7632-46b6-be65-29781bccf4b6)|
|:-:|:-:|:-:|:-:|
| **Edwin Amaranto**  | **Maximiliano Marigno**  | **Karelis Montenegro** | **Irvin Martínez** |
| [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/edwin-amaranto-villegas-3ba291128/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EdwinCoder85)|[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maximiliano-marigno-7b6772173/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/marignomaxy)| [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/karelysmontenegrom) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KMontenegroM)|[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/victor-irvin-martinez-gallegos-9b940823b/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Irvin-Mx)|

<hr/>

## ✔ UI/UX

### 👉🏻 Construído con 🛠️

![Figma](https://img.shields.io/badge/Figma-%23F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-%231563FF.svg?&style=for-the-badge&logo=google-cloud&logoColor=white)

### [**Figma Conexión Huellitas**](https://www.figma.com/file/8pf6ejhPVl1gbDzg7cYAuE/Conexion-Huellitas?type=design&node-id=1-3&mode=design&t=XlHMMBG7tZKgSSMO-0)

### 👉🏻 Diseñador UI/UX

|![Andrey](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/6e3ca86c-0f56-4565-ae35-000235312b84)|
|:-:|
|**Andrey Calderón**|
|[![Behance](https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white)](https://www.behance.net/andreycalder0n/) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andreycalder0n/)|

### 👉🏻 Product / Project Manager 

|![Lina](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/37358958-b5f0-4a3b-9320-4d736d124010)|
|:-:|
|**Lina Vanessa Sánchez**|
| [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lina-vanessa-sanchez-formacion-empleabilidad/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/linaorienta)|

### [**Enlace de Trello**](https://trello.com/invite/b/Y78cIKSt/ATTI688309a01267ffcf168cee6765bb5962D4F3BA25/proyecto-adopcion-de-mascotas)

### 👉🏻 **Business Model Canvas** ![Conexión Huellitas Business Model Canvas](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/424f0b48-36db-41a4-acba-d06a2d5aca45)

## ✔ Technical Leader

|![MatiasC](https://github.com/No-Country/c16-23-n-node-react/assets/40127837/06a18e7c-2ea3-4e0b-b2ab-2e7f181aee2a)|
|:-:|
|**Matías Carballo**|
| [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matias-es-carballo/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lokywolf2295)|

