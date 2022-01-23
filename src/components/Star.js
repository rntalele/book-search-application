import React from 'react';

const Star = ({rating,ratingCount}) => {

    const roundedRating = Math.round(rating);
    console.log(roundedRating);
    console.log(ratingCount);
    return (
    <ul className="list-inline small">
        {
            [...Array(roundedRating)].map((dummy,index)=>{
                return <li className="list-inline-item m-0" key={index}><i className="fa fa-star text-success"></i></li>
            })

            
        }
        {
            [...Array(5-roundedRating)].map((dummy,index)=>{
                return <li className="list-inline-item m-0" key={index}><i className="fa fa-star-o text-success"></i></li>
            })
        }
        {`(${ratingCount})`}
    </ul>
  );
};

export default Star;
