import NavItems from "./NavItems";


function Navbar(){
    return(
        <nav className="bg-black mt-20 text-green-100 flex justify-between py-5 px-20 shadow-md">
            <h3 className="font-bold">
                Vitech Solutions
            </h3>
            <ul className="flex gap-20">
                <NavItems menu={<a href="Home">Home</a>}/>
                <NavItems menu={<a href="about">About</a>}/>
                <NavItems menu={<a href="contact">Contact</a> }/>
                <NavItems menu={<a href="resume">Resume</a> }/>
                {/* <NavItems menu={""}/>
                <NavItems menu={"Home"}/> */}
            </ul>
        </nav>
    )
}

export default Navbar