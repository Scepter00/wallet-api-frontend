import Image from "next/image"

const Access = () => {
    return(
        // <div className="flex gap-3 mt-8 bg- text- ps-5">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center md:h-screen">
            <div className="mr-0 md:mr-8 justify-center">
                <h1 className="text-3xl font-bold md:mb-10 md:ml-20">E-Wallet</h1>
                <h2 className="md:text-lg text-gray-700 md:mb-7 md:ml-20 max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae illum, aliquam, voluptatem excepturi quidem repudiandae provident cumque quibusdam quis.</h2>
                <button className="bg-blue-500 text-white rounded-full px-8 py-2 mb-1 md:ml-20">Get Started</button>
            </div>
            <div className="w-full md:w-800 md:ml-20 md:mb-10">
            <Image
            width={810}
            height={100}
            src={'/landing.svg'}
            alt={'Landing Logo'}
            className=""
            />
            </div>
            <ul className="flex item-center justify-between ">
                <li className="p-2">man</li>
                <li className="p-2">man</li>
                <li className="p-2">man</li>
                <li className="p-2">man</li>
            </ul>
            </div>
        // </div>
    )
  }
  export  default Access
