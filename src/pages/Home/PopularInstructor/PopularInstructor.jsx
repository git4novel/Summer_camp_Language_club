import { useState } from "react";
import { useEffect } from "react";

const PopularInstructor = () => {
  return (
    <div className="max-w-7">
      <h4 className="basic-font text-center text-3xl mt-3 mb-6 lg:text-6xl">
        Popular instructor Here
      </h4>
      <img src="https://ibb.co/wNqvnNm" alt="" />
      <div className="grid py-7 rounded-md my-3 bg-slate-300 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-3">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden flex px-3  items-center  py-4">
          <div className="w-full">
            <img
              src="https://i.ibb.co/JF8nxk6/fd.png"
              alt="Instructor"
              className="w-40 h-40 rounded-full object-cover object-center "
            />
          </div>
          <div className="pt-4 pl-2 pr-3 w-full">
            <h2 className="text-xl font-semibold mb-2">Mario Polo</h2>
            <p className="text-gray-800 font-serif mb-5 ">
              mariopolo@gmail.com
            </p>
          </div>
        </div>
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden items-center flex px-3 py-4">
          <div className="w-full">
            <img
              src="https://i.ibb.co/PZ2r686/istockphoto-1199088542-612x612.jpg"
              alt="Instructor"
              className="w-40 h-40 rounded-full object-cover object-center "
            />
          </div>
          <div className="pt-4 pl-2 pr-3 w-full">
            <h2 className="text-xl font-semibold mb-2">Maria Garcia</h2>
            <p className="text-gray-800 font-serif mb-5 ">
              Maria@garcia.com
            </p>
          </div>
        </div>
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden items-center flex px-3 py-4">
          <div className="w-full">
            <img
              src="https://i.ibb.co/rb9yThD/P3-OLGJ1-copy-1.png"
              alt="Instructor"
              className="w-40 h-40 rounded-full object-cover object-center "
            />
          </div>
          <div className="pt-4 pl-2 pr-3 w-full">
            <h2 className="text-xl font-semibold mb-2">Alexandar Miah</h2>
            <p className="text-gray-800 font-serif mb-5 ">
              alexxandar@main.com
            </p>
          </div>
        </div>
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden flex px-3 py-4 items-center">
          <div className="w-full">
            <img
              src="https://i.ibb.co/SfL1pp0/boyud.jpg"
              alt="Instructor"
              className="w-40 h-40 rounded-full object-cover object-center "
            />
          </div>
          <div className="pt-4 pl-2 pr-3 w-full">
            <h2 className="text-xl font-semibold mb-2">Kiam Jong aee</h2>
            <p className="text-gray-800 font-serif mb-5 ">
              kimjongwe@gmail.com
            </p>
          </div>
        </div>
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden flex px-3 py-4 items-center">
          <div className="w-full">
            <img
              src="https://i.ibb.co/LpbJycQ/boyy.jpg"
              alt="Instructor"
              className="w-40 h-40 rounded-full object-cover object-center "
            />
          </div>
          <div className="pt-4 pl-2 pr-3 w-full">
            <h2 className="text-xl font-semibold mb-2">Antonio Polo</h2>
            <p className="text-gray-800 font-serif mb-5 ">
              antoniopolo@gmail.com
            </p>
          </div>
        </div>
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden flex px-3 py-4 items-center">
          <div className="w-full">
            <img
              src="https://i.ibb.co/Kjg1tjv/girl.jpg"
              alt="Instructor"
              className="w-40 h-40 rounded-full object-cover object-center "
            />
          </div>
          <div className="pt-4 pl-2 pr-3 w-full">
            <h2 className="text-xl font-semibold mb-2">JM Marrl</h2>
            <p className="text-gray-800 font-serif mb-5 ">
              sfddlo@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;

{
  /* <div className="grid grid-cols-1 lg:grid-cols-3 bg-pink-400">
               <div><img src='../../../assets/338019187_1959974124352397_1304427623193907711_n.jpg' alt="" /></div>
                <div><img src="../../../assets/343070353_1404896983676531_1874686435198432335_n.jpg" alt="" /></div>
                <div><img src="../../../assets/343174749_248561621002402_7060393034909238889_n.jpg" alt="" /></div>
            <div></div>
                <div></div>
                <div></div>
                 
                
                <img src="https://ibb.co/M5Kn8Nw" alt="" />
                <img src="https://ibb.co/0G0NJb6" alt="" />
                <img src="https://ibb.co/wNqvnNm" alt="" /> 
             </div> */
}
