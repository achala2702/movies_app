import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="absolute z-20 w-full flex bg-transparent text-gray-300 justify-between items-center px-6 md:px-32 lg:px-40">
        <div className="">
            <div className="text-2xl font-bold py-2 md:py-4 md:text-3xl lg:py-6 lg:text-4xl">PopCorn</div>
        </div>
        <div className="text-lg md:text-xl lg:text-2xl">
            <NavLink to={'/'}><div>Home</div></NavLink>
        </div>
        <></>
    </div>
  )
}

export default Header