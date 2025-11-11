import React from 'react';
import Card from './Card';

import { dataObj } from '../dataObj';

const Beauty = () => {
  return (
    <main>
      <div className="hair-beauty">Hair & Beauty services</div>
      <div className="container">
        <div className="card-container">
          {dataObj.map((eachItem) => {
            const { name, id, originalPrice, offerPrice, description, imageUrl, durationMinutes, rating, available } =
              eachItem;
            return (
              <Card
                key={id}
                id={id}
                title={name}
                content={description}
                imageUrl={imageUrl}
                price={originalPrice}
                offerPrice={offerPrice}
                durationMinutes={durationMinutes}
                rating={rating}
                available={available}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Beauty;
