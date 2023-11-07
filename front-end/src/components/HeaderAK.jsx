
// header for about kibera page



import React from "react";
import { useNavigate } from "react-router-dom";


function HeaderAK(){
  const navigate= useNavigate()
  const handleaboutclick=()=>{
    navigate('/introduction')
  }

  const handlecommunityclick=() =>{
    navigate('/photogallery')
  }

  const handlechallengesclick =()=>{
    navigate('/facts')
  }

    return(
        <div>
            <div className=" p-8">
      <header className="text-center bg-custom  py-8">
        <h1 className="text-4xl font-bold mb-4">Exploring Kibera: A Glimpse into Nairobi's Largest Slum</h1>
      </header>

      <nav className="text-center my-8 bg-custom py-6 ">
        <ul className="space-x-10 mr-36  ">
          <li className="inline-block font-semibold cursor-pointer hover:bg-gray-500 p-2" onClick={handleaboutclick}>
            About Kibera
          </li>
          <li className="inline-block font-semibold cursor-pointer hover:bg-gray-500 p-2" onClick={handlecommunityclick}>
            Our Gallery
          </li>
          <li className="inline-block font-semibold cursor-pointer hover:bg-gray-500 p-2" onClick={handlechallengesclick}>
          Facts
          </li>
        </ul>
      </nav>

    </div>
        </div>
    )

}
export default  HeaderAK


