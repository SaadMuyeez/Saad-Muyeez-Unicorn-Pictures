import React from 'react';
import clipboard from '../assets/MoviesPosters/clipboard.png'

const Movies = () => {
  return (
    <div style={{ marginTop: '120px' }} id="Movies" className="mt-36 h-[auto]">
      <div className="flex flex-col justify-center items-center font-Poppins">
        <p className="text-[43px] font-bold text-[#BF9C32]">Movies Pictures</p>
        <p className='text-[28px]'>Our Curated Collection of Magical Movies</p>
      </div>

      <div style={{margin:'50px 0 0 0'}} className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 gap-6 px-4 py-4">
        {MoviesData.map((movie) => (
          <div
            key={movie.id}
            className="relative transition-transform transform hover:scale-105"
          >
            {/* Movie Poster */}
            <img
              src={movie.image}
              alt={movie.name}
              className="w-auto h-auto max-w-[200px] max-h-[100vh] object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </div>

      <div style={{margin:'94px 0 94px 0'}} className="grid grid-cols-6 items-center mt-16">
        <div className='col-span-1'></div>
        <img src={clipboard} alt="clipboard" className='col-span-1 flex justify-center items-center h-44'/>
        <p className='col-span-4 text-[23px] font-Poppins'>"We're driving creative excellence in animation and photography, leading with innovation and technology."</p>
      </div>
    </div>
  );
};

export default Movies;

const MoviesData = [
  { id: 1, name: "Bahubali", image: "/src/assets/MoviesPosters/Bahubali.png" },
  { id: 2, name: "Thor", image: "/src/assets/MoviesPosters/Thor.png" },
  { id: 3, name: "UI", image: "/src/assets/MoviesPosters/UI.png" },
  { id: 4, name: "Vikram", image: "/src/assets/MoviesPosters/Vikram.png" },
  { id: 5, name: "zero", image: "/src/assets/MoviesPosters/zero.png" },
  { id: 6, name: "saaho", image: "/src/assets/MoviesPosters/saaho.png" },
  { id: 7, name: "Sultan", image: "/src/assets/MoviesPosters/Sultan.png" },
  { id: 8, name: "Avengers", image: "/src/assets/MoviesPosters/Avengers.png" },
  { id: 9, name: "plane", image: "/src/assets/MoviesPosters/plane.png" },
  { id: 10, name: "befikkre", image: "/src/assets/MoviesPosters/Befikrre.png" },
  { id: 11, name: "Dhagal", image: "/src/assets/MoviesPosters/Dhangal.png" },
  { id: 12, name: "cocktail", image: "/src/assets/MoviesPosters/cocktail.png" },
  { id: 13, name: "Bagheera", image: "/src/assets/MoviesPosters/Bagheera.png" },
  { id: 14, name: "EkTheTiger", image: "/src/assets/MoviesPosters/EkThaTiger.png" },
  { id: 15, name: "salar", image: "/src/assets/MoviesPosters/salar.png" },
];



// import React from 'react'

// const Movies = () => {
//   return (
//     <div style={{ marginTop: '120px' }} id="Movies" className='mt-36 h-screen'>
//       <div className="flex flex-col justify-center items-center">
//         <p className='text-[43px] font-bold text-[#BF9C32]'>Movies Pictures</p>
//         <p>Our Curated Collection of Magical Movies</p>
//       </div>
//       <div className="flex gap-6">
//         {MoviesData.map((movie) => (
//           <div key={movie.id} className="">
//             <img src={movie.image} alt={movie.name} />
//             {/* <p>{movie.name}</p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Movies

// const MoviesData = [
//   {
//     id: 1,
//     name: "Bahubali",
//     image: '/src/assets/MoviesPosters/Bahubali.png'
//   },
//   {
//     id: 2,
//     name: "Thor",
//     image: '/src/assets/MoviesPosters/Thor.png'
//   },
//   {
//     id: 3,
//     name: "UI",
//     image: '/src/assets/MoviesPosters/UI.png'
//   },
//   {
//     id: 4,
//     name: "Vikram",
//     image: '/src/assets/MoviesPosters/Vikram.png'
//   },
//   {
//     id: 5,
//     name: "zero",
//     image: '/src/assets/MoviesPosters/zero.png'
//   },
//   {
//     id: 6,
//     name: "saaho",
//     image: '/src/assets/MoviesPosters/saaho.png'
//   },
//   {
//     id: 7,
//     name: "Sultan",
//     image: '/src/assets/MoviesPosters/Sultan.png'
//   },
//   {
//     id: 8,
//     name: "Avengers",
//     image: '/src/assets/MoviesPosters/Avengers.png'
//   },
//   {
//     id: 9,
//     name: "plane",
//     image: '/src/assets/MoviesPosters/plane.png'
//   },
//   {
//     id: 10,
//     name: "befikkre",
//     image: '/src/assets/MoviesPosters/Befikrre.png'
//   },
//   {
//     id: 11,
//     name: "Dhagal",
//     image: '/src/assets/MoviesPosters/Dhangal.png'
//   },
//   {
//     id: 12,
//     name: "cocktail",
//     image: '/src/assets/MoviesPosters/cocktail.png'
//   },
//   {
//     id: 13,
//     name: "Bagheera",
//     image: '/src/assets/MoviesPosters/Bagheera.png'
//   },
//   {
//     id: 14,
//     name: "EkTheTiger",
//     image: '/src/assets/MoviesPosters/EkThaTiger.png'
//   },
//   {
//     id: 15,
//     name: "salar",
//     image: '/src/assets/MoviesPosters/salar.png'
//   },
// ];