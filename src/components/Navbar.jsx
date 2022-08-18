import NavItems from "./NavItems";


function Navbar(){
    return(
        <nav className="fixed top-0 right-0 left-0  bg-black  text-green-100 flex justify-between py-5 px-20 shadow-md">
            <h3 className="font-bold text-red-400">
                Vitech Solutions
            </h3>
            <ul className="flex gap-20">
                <NavItems menu={<a href="Home">Home</a> }/>
                <NavItems menu={<a href="about">About</a>}/>
                <NavItems menu={<a href="contact">Contact</a> }/>
                <NavItems menu={<a href="resume">Resume</a> }/>
            </ul>
        </nav>
    )
}

export default Navbar