import React,{useState} from 'react';
import axios from 'axios';
const BookHome = () => {
    const [bookKeyword,setBookKeyword] = useState("");
    const [books,setBooks] = useState([]);
    const [apiKey,setApiKey] = useState("AIzaSyARRHaoWqVob4CpMvk21ltTDZFpPJ8hteg");



    //Fetches and sets data on button click
    function onButtonClick(e){
        e.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookKeyword}&key=${apiKey}&maxResults=40`)
        .then((res)=>{
            console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail)
            setBooks(res.data.items);

        })  
        .catch((err)=>console.log(err));
    }

  return (
      <div className="container">
            <div className="row mb-2">
                <h1 className="text-center">Book Search</h1>
            </div>
            <div className="row">
                <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter any Keyword" onChange={(e)=>setBookKeyword(e.target.value)}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" onClick={(e)=>onButtonClick(e)}>Search</button>
                        </div>
                </div>
            </div>

            <div className="container">

            <div className="row">
                {
                    books.map(book=>{
                        console.log(book);
                        return (
                        <div className="col-sm-2" key={book.id}>
                            <div className="card" >
                            <img className="card-img-top" src={book.volumeInfo.imageLinks!==undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.volumeInfo.title+'(thumbnail not available)'}/>
                                <div className="card-body">
                                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>

            </div>

            
            
            
                       
        </div>
  )
};

export default BookHome;
