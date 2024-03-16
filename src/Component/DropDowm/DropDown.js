import React from 'react';
import "../../App.css";

function DropDown() {
    return (
        <>
            <ul className="list-group m-0" style={{width: "210px"}}>
                <li className="list-group-item text-secondary">People - Community</li>
                <li className="list-group-item text-secondary">Places - Venus</li>
                <li className="list-group-item text-secondary">Programs - Events</li>
                <li className="list-group-item text-secondary">Products - Store</li>
                <li className="list-group-item text-secondary">Blogs</li>
            </ul>
        </>
    )
}

export default DropDown