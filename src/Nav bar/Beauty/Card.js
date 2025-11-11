import React from 'react';

const WHATSAPP_NUMBER = '919052301212'; // use country code without + for wa.me/api

function openWhatsApp(serviceName, price) {
  const message = `Hi, I would like to book ${serviceName} (Price: ${price}). Please let me know available slots.`;
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

const Card = ({
  id,
  title,
  content,
  imageUrl,
  description,
  price,
  offerPrice,
  durationMinutes,
  rating,
  available,
}) => {
  return (
    <article className="card" aria-labelledby={`card-title-${id}`}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 id={`card-title-${id}`} className="card-title">{title}</h3>
        <p className="card-text">{content}</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.7)' }}>
            ⏱ {durationMinutes ? `${durationMinutes} min` : '—'}
          </div>
          <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.7)' }} aria-label={`Rating ${rating || 'N/A'}`}>
            ⭐ {rating ? rating.toFixed(1) : 'N/A'}
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: available ? 'green' : '#b10000' }}>
            {available ? 'Available' : 'Unavailable'}
          </div>
        </div>

        <div className="card-footer">
          <div>
            <div className="price-old">{price}</div>
            <div className="price-new">{offerPrice}</div>
          </div>
          <div>
            <button
              className="book-btn"
              onClick={() => openWhatsApp(title, offerPrice)}
              disabled={!available}
              aria-disabled={!available}
            >
              {available ? 'Book' : 'Unavailable'}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
