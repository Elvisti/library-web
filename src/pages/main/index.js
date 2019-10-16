import React, {Component} from 'react'

import api from '../../services/api'

import './styles.css'

class Main extends Component{
    state = {
        books: []
    }
    
    componentDidMount(){
        this.loadBooks()
    }
        
    loadBooks = async () => {
        const response = await api.get('/books')

        this.setState({ books: response.data})
       
    }
    render(){
      const {books} = this.state
      var tableStyle = {
        "border": "1px solid black"
     };
        return(
        <div className="book-list">
         <h1>Lista de Livros</h1>
          <table style={tableStyle}>
                 <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Gênero</th>
                    </tr>
                </thead>
                {books.map(book => (
                    <tbody key={book._id}>
                        <tr>
                            <th>{book.titulo}</th>
                            <th>{book.autor}</th>
                            <th>{book.genero}</th>
                        </tr>
                    </tbody>  
                ))}
            </table>
        </div>
        )
    }
}
export default Main