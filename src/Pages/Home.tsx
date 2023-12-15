import React, { FormEvent, useRef } from 'react';
import {Squares2X2Icon ,MagnifyingGlassIcon,MicrophoneIcon} from '@heroicons/react/24/solid'
import Avator from '../components/Avator';
import img1 from '../img/a-2.jpg';
import img2 from '../img/google-1.png'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useResultContext } from '../context/ResultProvider';


const Home = () => {

    const searchInputref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const {setSearchTerm} =useResultContext();

    const search =(e:FormEvent<HTMLFormElement>)=>{
          e.preventDefault();
          const term = searchInputref!.current!.value;
           setSearchTerm(term);
            navigate("/search");
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <header className="flex w-full p-5 justify-between text-sm text-gray-700" >
            <div className="flex space-x-4 items-center">
                <p className="link">About</p>
                <p className="link">Store</p>
            </div>
              <div className="flex space-x-4 items-center">
                <p className="link">Gmail</p>
                <p className="link">Images</p>

              <Squares2X2Icon className="h-10 w-10 p-2  rounded-full hover:bg-gray-100 cursor-pointer" />
              <Avator url={img1} />
            </div>
        </header>
        <form onSubmit={search} className="flex flex-col items-center mt-24 flex-grow w-4/5" action="">
          <img src={img2} width={300} height={100}  alt="" />
          <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                  <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500"/>
                  <input ref={searchInputref} className="focus:outline-none flex-grow" type="text" name="" id="" />
                  <MicrophoneIcon className="h-5"/>
          </div>

          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-6 sm:flex-row sm:space-x-4">
            <button className="btn" >Google search</button>
            <button className="btn" >I'm Feeling Luckly</button>
          </div>

        </form>
        <Footer/>
    </div>
  )
}

export default Home;