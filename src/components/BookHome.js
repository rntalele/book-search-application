import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import BookDetails from './BookDetails';
import Loader from './Loader';

const BookHome = () => {
    const [bookKeyword, setBookKeyword] = useState("");
    const [books, setBooks] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyARRHaoWqVob4CpMvk21ltTDZFpPJ8hteg");
    const [loading, setLoading] = useState(false);



    //Fetches and sets data on button click
    function onButtonClick(e) {
        e.preventDefault();
        if (bookKeyword !== "") {
            setLoading(true);
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookKeyword}&key=${apiKey}&maxResults=40`)
                .then((res) => {
                    setLoading(false);
                    console.log(res.data.items[0].volumeInfo.ratingsCount)
                    setBooks(res.data.items);

                })
                .catch((err) => console.log(err));
        }
        else {
            alert('Please enter a keyword')
        }

    }

    return (
        <div className="container">


            <div className="row">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter any Keyword" onChange={(e) => setBookKeyword(e.target.value)} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button" onClick={(e) => onButtonClick(e)}><i class="fa fa-search" aria-hidden="true"></i>Search</button>
                    </div>
                </div>
            </div>
            {loading ? (
                // <h1>Loading...</h1>
                <Loader className='mt-5 mb-5 pt-5 pb-5' />

            ) : (
                <div className="row pb-5 mb-4">
                    {
                        books.map(book => {
                            return (

                                <Card book={book} key={book.id} />

                            )
                        })
                    }
                </div>
            )}



        </div>

    )
};

export default BookHome;


