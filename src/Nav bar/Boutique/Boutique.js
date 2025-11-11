import React from 'react';
import { boutiqueData } from './dataBoutique';
import Card from '../Beauty/Card';

const Boutique = () => {
  return (
    <main>
      <div className="hair-beauty">Boutique Services & Rentals</div>
      <div className="container">
        <div className="card-container">
          {boutiqueData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.name}
              content={item.description}
              imageUrl={item.imageUrl}
              price={item.originalPrice}
              offerPrice={item.offerPrice}
              durationMinutes={item.durationMinutes}
              rating={item.rating}
              available={item.available}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Boutique;
