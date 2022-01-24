import React from 'react';
import Star from './Star';
import { Navigate, useLocation } from 'react-router';
import { useNavigate, Link } from 'react-router-dom'
import '../css/bookdetail.css';
import '../css/card.css'

const BookDetails = () => {
    const location = useLocation();
    const book = location.state;
    return <>
        <div className="container">
            <Link to="/"><button className="btn btn-primary mb-2"><i className="fa fa-chevron-left" />  Go Home</button></Link>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="image-container">
                            <img className="card-img-top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.smallThumbnail : ''} alt={book.volumeInfo.title + "(image unavailable)"} />
                        </div>

                        <div className="card-body">
                            <h3 className="card-title">{book.volumeInfo.title}</h3>
                            <h5><b>By:</b> {book.volumeInfo.authors.toString()}</h5>
                            <h5><b>Publisher:</b> {book.volumeInfo.publisher || 'Publisher Not Available'}</h5>
                            <h6><b>Publish Date:</b> {book.volumeInfo.publishedDate}</h6>
                            <h6><b>Number of Pages:</b> {book.volumeInfo.pageCount}</h6>
                            <p className="text-justify overflow-hidden">{book.volumeInfo.description}</p>
                            <h6><b>Rating:</b></h6><Star rating={book.volumeInfo.averageRating || 0} ratingCount={book.volumeInfo.ratingsCount || 0} />
                            <a href={book.volumeInfo.previewLink} target="_blank" className="btn btn-primary">Preview Book</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>;
};

export default BookDetails;
