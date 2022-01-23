import React from 'react';
import '../css/card.css';
import ShowMoreText from "react-show-more-text";
import Star from './Star';


const Card = ({book}) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <div className="card rounded shadow-sm border-0">
            <div className="card-body p-4">
              <div className="ratio ratio-1x1">
                <img src={book.volumeInfo.imageLinks!==undefined ? book.volumeInfo.imageLinks.smallThumbnail : ''} alt={book.volumeInfo.title + "(image unavailable)"} className="img-fluid d-block h-100 mx-auto mb-3"/>
              </div>
              <ShowMoreText lines={1} more="" className="title">
                  {book.volumeInfo.title}
              </ShowMoreText>
              <ShowMoreText lines={3} more="show more" less="show less" className="desc">
                  {book.volumeInfo.description}
              </ShowMoreText>
            
              <Star rating={book.volumeInfo.averageRating || 0} ratingCount={book.volumeInfo.ratingsCount || 0}/>
              <button type="button" class="btn btn-primary">More Details</button>
            </div>
        </div>
    </div>
  );
};



export default Card;
