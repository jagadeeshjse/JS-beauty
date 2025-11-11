import imgSaree from '../../images/saree_drapping.jpg';
import imgBridal from '../../images/Bridal-Lehengas.jpg';
import imgTailoring from '../../images/woman-tailoring.avif';
import imgStyling from '../../images/boutique_styling.webp';
import imgJewelry from '../../images/Jewelry-Rental.jpg';
import imgBagRepair from '../../images/WhatsApp Image 2024-04-15 at 10.32.56 AM.jpeg';
import imgStylistPhoto from '../../images/WhatsApp Image 2024-04-15 at 10.32.56 AM (1).jpeg';
import imgLogo from '../../images/Logo.jpeg';

export const boutiqueData = [
    {
        id: 101,
        name: 'Saree Rental',
        category: 'Rental',
        originalPrice: '1500',
        discount: '20%',
        offerPrice: '1200',
        durationMinutes: 3, // days (use as duration where meaningful)
        description: 'Designer sarees available for rent (daily charges). Wide variety including silk, chiffon and designer blouses.',
        imageUrl: imgSaree,
        available: true,
        rating: 4.6,
        reviewsCount: 42,
        serviceCode: 'BR-101',
        tags: ['saree', 'rental', 'ethnic'],
        features: ['Designer collection', 'Blouse stitching available']
    },
    {
        id: 102,
        name: 'Bridal Lehenga Rental',
        category: 'Rental',
        originalPrice: '8000',
        discount: '15%',
        offerPrice: '6800',
        durationMinutes: 5,
        description: 'Premium bridal lehengas for rent with matching dupatta and blouse options.',
        imageUrl: imgBridal,
        available: true,
        rating: 4.8,
        reviewsCount: 18,
        serviceCode: 'BR-102',
        tags: ['bridal', 'rental', 'lehenga'],
        features: ['Pickup & return', 'Fitting included']
    },
    {
        id: 103,
        name: 'Custom Tailoring & Alterations',
        category: 'Tailoring',
        originalPrice: '500',
        discount: '0%',
        offerPrice: '500',
        durationMinutes: 120,
        description: 'Custom stitching, alterations and tailoring for all kinds of garments including bridal outfits.',
        imageUrl: imgTailoring,
        available: true,
        rating: 4.5,
        reviewsCount: 73,
        serviceCode: 'TL-103',
        tags: ['tailoring', 'alterations', 'stitching'],
        features: ['Measurements', 'Trial fitting']
    },
    {
        id: 104,
        name: 'Saree Draping & Styling',
        category: 'Styling',
        originalPrice: '800',
        discount: '10%',
        offerPrice: '720',
        durationMinutes: 60,
        description: 'Professional saree draping for events, photoshoots and weddings. Includes pinning and accessories.',
        imageUrl: imgStyling,
        available: true,
        rating: 4.7,
        reviewsCount: 34,
        serviceCode: 'ST-104',
        tags: ['draping', 'styling', 'saree'],
        features: ['Event-ready', 'Fast service']
    },
    {
        id: 105,
        name: 'Jewelry Rental',
        category: 'Accessories',
        originalPrice: '2000',
        discount: '20%',
        offerPrice: '1600',
        durationMinutes: 3,
        description: 'Necklaces, earrings and sets available for short term rental. Ideal for weddings and parties.',
        imageUrl: imgJewelry,
        available: true,
        rating: 4.4,
        reviewsCount: 22,
        serviceCode: 'JR-105',
        tags: ['jewelry', 'rental', 'accessories'],
        features: ['Antique & modern', 'Secure handling']
    },
    {
        id: 106,
        name: 'Handbag & Clutch Repair',
        category: 'Repair',
        originalPrice: '400',
        discount: '0%',
        offerPrice: '400',
        durationMinutes: 72, // hours
        description: 'Minor repairs, polishing and hardware replacement for handbags and clutches.',
        imageUrl: imgBagRepair,
        available: true,
        rating: 4.2,
        reviewsCount: 9,
        serviceCode: 'RP-106',
        tags: ['repair', 'bags', 'clutch'],
        features: ['Zipper replacement', 'Polishing']
    },
    {
        id: 107,
        name: 'Boutique Styling Consultation',
        category: 'Consultation',
        originalPrice: '600',
        discount: '0%',
        offerPrice: '600',
        durationMinutes: 45,
        description: 'One-on-one styling consultation to choose outfits, colours and accessories for an event.',
        imageUrl: imgStylistPhoto,
        available: true,
        rating: 4.6,
        reviewsCount: 26,
        serviceCode: 'CS-107',
        tags: ['styling', 'consultation'],
        features: ['Personalised suggestions', 'Lookbook']
    },
    {
        id: 108,
        name: 'Gift Vouchers',
        category: 'Other',
        originalPrice: '1000',
        discount: '0%',
        offerPrice: '1000',
        durationMinutes: 0,
        description: 'Gift vouchers usable for any boutique or beauty services. Perfect for presents.',
        imageUrl: imgLogo,
        available: true,
        rating: 4.9,
        reviewsCount: 12,
        serviceCode: 'GV-108',
        tags: ['gift', 'voucher'],
        features: ['Custom amount', 'Email delivery']
    }
];
