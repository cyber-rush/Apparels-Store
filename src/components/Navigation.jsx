import { hamBurger, heart, logo, profile, search, shopping } from "../assets"

const navLinks = ['Shop', 'Skills', 'Stories', 'About', 'Contact Us']

const Navigation = () => {
    return (
        <div className="flex-col justify-center items-center">
            <div className="flex m-12 justify-between items-center cursor-pointer">
                <img src={hamBurger} alt="hamburger" className="md:hidden" />
                <div className="">
                    <img src={logo} alt="logo" />
                </div>
                <div className="text-3xl font-extrabold">LOGO</div>
                <div className="flex gap-4 mr-6">
                    <img src={search} alt="search" />
                    <img src={heart} alt="liked" />
                    <img src={shopping} alt="shopping cart" />
                    <img src={profile} alt="profile" className="hidden md:block" />
                    <div className="flex font-bold ">
                        <div>ENG</div>
                        <select />
                    </div>
                </div>

            </div>
            <div className="flex font-bold justify-evenly items-center cursor-pointer">
                {navLinks.map((navLink, index) => (
                    <div key={index} className="mx-4">{navLink.toUpperCase()}</div>
                ))}
            </div>
            <hr className=" bg-gray-900 mt-4 mb-16" />
        </div>
    )
}

export default Navigation
