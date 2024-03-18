import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Navbar = () => { 
  const router = useRouter()
  const pathname = usePathname();

  const handleGetStartedClick = () => {
    router.push("/register")
  }


    return(
      
        <section className="flex items-center border-gray-200 bg-white gap-px md:gap- px-0 md:px-3 fixed justify-between h-12 max-w-screen-2xl mx-auto w-full border- border-x border-gray-500 shadow">
      <Image
        width={10}
        height={0}
        src={'/e-wallet.svg'}
        alt={'e-wallet Logo'}
        className="w-32 h-fit mt-[2px] md:w-20 md:h-40"
      />
      {
        pathname !== "/" ?
        (<p>Other things</p>): null
      }
      <button className="bg-blue-500 text-white rounded-full px-5 py-2 mb-1 md:mr-19 md:w-" onClick={handleGetStartedClick}>Get Started</button>
      </section>
    )
  }
  export default Navbar