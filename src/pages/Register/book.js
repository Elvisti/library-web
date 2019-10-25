import React from 'react'


function Form(){
    return(
        <form>
            <div>
                <label htmlFor="title"> Título</label>
                <input name="title" type="text" id="title"  required placeholder="Informe o Título..."></input>
            </div>  
            <div>
                <label htmlFor="author"> Autor</label>
                <input name="author" type="text" id="author" required placeholder="Informe o Autor..."></input>
            </div>   
            <div>
                <label htmlFor="genre"> Gênero</label>
                <input name="genre" type="text" id="genre" required placeholder="Informe o Gênero..."></input>
            </div>   
             
            
        </form>

    )
}
export default Form