import React from 'react';

import './style.css';

function SideBar(){
    return(
        <div className="wrapper">
            <div className="sidebar">
               
                <ul>
                    <li><a href={('../pages/Register/book.js')}><i className="fas fa-tachometer-alt"></i>Dashboard</a></li>
                    <li><a href={('../pages/Register/book.js')}><i className="fas fa-book"></i>Cadastrar Livro</a></li>
                    <li><a href={('../pages/Register/book.js')}><i className="fas fa-search"></i>Consultar</a></li>
                </ul>

            </div>

        </div>
    );


}

export default SideBar;