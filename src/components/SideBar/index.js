import React from 'react'

import './style.css'

function SideBar(){
    return(
        <div className="wrapper">
            <div className="sidebar">
               
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Cadastrar Livro</a></li>
                    <li><a href="#">Consultar</a></li>
                </ul>

            </div>

        </div>
    )


}

export default SideBar