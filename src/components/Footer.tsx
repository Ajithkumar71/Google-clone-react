import React,{FC} from 'react'
import {GlobeAmericasIcon} from "@heroicons/react/24/solid"
const Footer:FC = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 ">
            <div className="px-8 py-3">
                <p>India</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 grid-flow-row-dense px-5 py-2">
                <div className="flex justify-center items-center sm:col-span-2 lg:col-span-1 lg:col-start-2">
                        <GlobeAmericasIcon className="h-5 text-green-700"/>Carbon Neurtal Since 2007
                    </div>
                    <div className="flex justify-center space-x-8 whitespacing-nowrap md:justify-self-start">
                            <p>Advertising</p>
                            <p>Business</p>
                            <p>How Search Works</p>
                    </div>
                    <div className="flex justify-center space-x-8 md:ml-auto">
                            <p>Privacy</p>
                            <p>Terms </p>
                            <p>Settings</p>
                    </div>
                     
            </div>
             
    </footer>
  )
}

export default Footer;