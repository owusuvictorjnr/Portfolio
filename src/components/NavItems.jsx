import React from "react";


function NavItems({menu}){
    return(
        <li className="border-5 py-1 px-2 hover:bg-red-400 rounded-full">
            {menu}
        </li>
    )
}

export default NavItems;