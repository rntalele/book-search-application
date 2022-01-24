import React,{useState} from 'react';
import axios from 'axios';
import Card from './Card';
const BookHome = () => {
    const [bookKeyword,setBookKeyword] = useState("");
    const [books,setBooks] = useState([]);
    const [apiKey,setApiKey] = useState("AIzaSyARRHaoWqVob4CpMvk21ltTDZFpPJ8hteg");



    //Fetches and sets data on button click
    function onButtonClick(e){
        e.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookKeyword}&key=${apiKey}&maxResults=40`)
        .then((res)=>{
            console.log(res.data.items[0].volumeInfo.ratingsCount)
            setBooks(res.data.items);

        })  
        .catch((err)=>console.log(err));
    }

  return (
      <div className="container">

            <div className="row">
                <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter any Keyword" onChange={(e)=>setBookKeyword(e.target.value)}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" onClick={(e)=>onButtonClick(e)}><i class="fa fa-search" aria-hidden="true"></i>Search</button>
                        </div>
                </div>
            </div>

            <div className="row pb-5 mb-4">
                {
                    books.map(book=>{
                        return (
                            
                                <Card book={book} key={book.id}/>

                        )
                    })
                }
            </div>
            

         </div>

  )
};

export default BookHome;


