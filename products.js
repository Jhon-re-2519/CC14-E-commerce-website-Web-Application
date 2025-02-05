const shoes = [
    { id: 1, name: "SAMBA OG SHOES", brand: "adidas", category: "Sneakers", price: 116.40, image: "images/Shoes/Samba green.jpg", rating: 5 },
    { id: 2, name: "TAEKWONDO LACE SHOES", brand: "adidas", category: "Sneakers", price: 110, image: "images/Shoes/Taekwondo Lace Shoes.jpg", rating: 4 },
    { id: 3, name: "RETROPY F2 SHOES", brand: "adidas", category: "Sneakers", price: 95, image: "images/Shoes/Retropy F2 Shoes.jpg", rating: 4 },
    { id: 4, name: "ADIZERO ADIOS PRO 4 SHOES", brand: "adidas", category: "Sneakers", price: 225.52, image: "images/Shoes/Adizero Adios Pro 4 Shoes.jpg", rating: 5 },
    { id: 5, name: "REEBOK CLASSIC LEATHER", brand: "Reebok", category: "Sneakers", price: 69.38, image: "images/Shoes/reebokclassicleather.jpg", rating: 5 },
    { id: 6, name: "REEBOOK PHASE COURT", brand: "Reebok", category: "Sneakers", price: 37.61, image: "images/Shoes/reebokphasecourt.jpg", rating: 5 },
    { id: 7, name: "BB 4000 II", brand: "Reebok", category: "Sneakers", price: 76.95, image: "images/Shoes/bb4000II.jpg", rating: 5 },
    { id: 8, name: "FLUXLITE", brand: "Reebok", category: "Sneakers", price: 31.09, image: "images/Shoes/fluxlite.jpg", rating: 5 },
    { id: 9, name: "T500", brand: "New Balance", category: "Sneakers", price: 109.99, image: "images/Shoes/t500.jpg", rating: 5 },
    { id: 10, name: "574 CORE", brand: "New Balance", category: "Sneakers", price: 89.99, image: "images/Shoes/574core.jpg", rating: 5 },
    { id: 11, name: "1906 UTILITY", brand: "New Balance", category: "Sneakers", price: 169.99, image: "images/Shoes/1906utility.jpg", rating: 5 },
    { id: 12, name: "1906 W", brand: "New Balance", category: "Sneakers", price: 154.99, image: "images/Shoes/1906w.jpg", rating: 5 },
    { id: 13, name: "NIKE DUNK LOW", brand: "Nike", category: "Sneakers", price: 52.98, image: "images/Shoes/nikedunklow.jpg", rating: 5 },
    { id: 14, name: "NIKE AIR MAX DN PREMIUM", brand: "Nike", category: "Sneakers", price: 160.82, image: "images/Shoes/nikeairmaxdnpremium.jpg", rating: 5 },
    { id: 15, name: "NIKE AIR MORE UPTEMPO LOW", brand: "Nike", category: "Sneakers", price: 160.82, image: "images/Shoes/nikeairmoreuptempolow.jpg", rating: 5 },
    { id: 16, name: "NIKE AIR MAX 90", brand: "Nike", category: "Sneakers", price: 160.82, image: "images/Shoes/nikeairmax90.jpg", rating: 5 },
]

const clothing = [
    { id: 17, name: "PB LABYRINTH JACQUARD T-SHIRT", brand: "Balmain", category: "Clothes", price: 500, image: "images/Clothings/B1.jpg", rating: 5 },
    { id: 18, name: "T-SHIRT WITH TANK TOP PRINT", brand: "Balmain", category: "Clothes", price: 590, image: "images/Clothings/B2.jpg", rating: 5 },
    { id: 19, name: "VINTAGE BALMAIN EMBRIDERED T-SHIRT", brand: "Balmain", category: "Clothes", price: 550, image: "images/Clothings/B3.jpg", rating: 5 },
    { id: 20, name: "T-SHIRT WITH BALMAIN RACING T-SHIRT", brand: "Balmain", category: "Clothes", price: 550, image: "images/Clothings/B4.jpg", rating: 5 },
    { id: 21, name: "ZIPPED HODIE INFLEECE WITH PATCHES AND UNICORNS", brand: "Givenchy", category: "Clothes", price: 1412.25, image: "images/Clothings/G1.jpg", rating: 5 },
    { id: 22, name: "T-SHIRT IN COTTON WITH UNICORNS EMBROIDERY", brand: "Givenchy", category: "Clothes", price: 706.12, image: "images/Clothings/G2.jpg", rating: 5 },
    { id: 23, name: "VARSITY JACKET IN WOOL AND LEATHER WITH PATCHES", brand: "Givenchy", category: "Clothes", price: 4305.63, image: "images/Clothings/G3.jpg", rating: 5 },
    { id: 24, name: "SLIMFIT T-SHIRT IN COTTON WITH 4G EMBROIDERY", brand: "Givenchy", category: "Clothes", price: 542.51, image: "images/Clothings/G4.jpg", rating: 5 },
    { id: 25, name: "PEANUT SHORT SLEEVE UT", brand: "Uniqlo", category: "Clothes", price: 17.05, image: "images/Clothings/U1.jpg", rating: 5 },
    { id: 26, name: "MAGNUM PHOTOS SHORT SLEEVE UT", brand: "Uniqlo", category: "Clothes", price: 31.61, image: "images/Clothings/U2.jpg", rating: 5 },
    { id: 27, name: "PEACE FOR ALL PALDO MORIYANA T-SHIRT", brand: "Uniqlo", category: "Clothes", price: 31.61, image: "images/Clothings/U3.jpg", rating: 5 },
    { id: 28, name: "PACE FOR ALL JEAN-MICHEAL BASQUIAT T-SHIRT", brand: "Uniqlo", category: "Clothes", price: 31.61, image: "images/Clothings/U4.jpg", rating: 5 },
    { id: 29, name: "REGULAR FIT TEXTURED RESORT SHIRT", brand: "H&M", category: "Clothes", price: 34.27, image: "images/Clothings/H1.jpg", rating: 5 },
    { id: 30, name: "REGULAR FIT TEXTURED RESORT SHIRT", brand: "H&M", category: "Clothes", price: 30.83, image: "images/Clothings/H2.jpg", rating: 5 },
    { id: 31, name: "SLIM FIT FINE-KNIT T-SHIRT", brand: "H&M", category: "Clothes", price: 17.21, image: "images/Clothings/H3.jpg", rating: 5 },
    { id: 32, name: "REGUKAR FIT LINEN T-SHIRT", brand: "H&M", category: "Clothes", price: 34.27, image: "images/Clothings/H4.jpg", rating: 5 }
]

/*
const fragrance = [
    { id: 33, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 34, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 35, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 36, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 37, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 38, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 39, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 40, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 41, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 42, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 43, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 44, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 45, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 46, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 47, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 },
    { id: 48, name: "", brand: "", category: "Fragrance", price: , image: "images/Fragrances/", rating: 5 }
]

const watch =[
    { id: 49, name: "La Panthère de Cartier Watch", brand: "Cartier", category: "Watch", price: 205000, image: "images/Watches/C1.jpg", rating: 5 },
    { id: 50, name: "Santos de Cartier watch 218000", brand: "Cartier", category: "Watch", price: 218000, image: "images/Watches/C2.jpg", rating: 5 },
    { id: 51, name: "", brand: "Cartier", category: "Watch", price: , image: "images/Watches/C3.jpg", rating: 5 },
    { id: 52, name: "", brand: "Cartier", category: "Watch", price: , image: "images/Watches/C4.jpg", rating: 5 },
    { id: 53, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 54, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 55, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 56, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 57, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 58, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 59, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 60, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 61, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 62, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 63, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 },
    { id: 64, name: "", brand: "", category: "Watch", price: , image: "images/Watches/", rating: 5 }
]

const accessory = [
    { id: 65, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 66, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 67, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 68, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 69, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 70, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 71, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 72, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 73, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 74, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 75, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 76, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 77, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 78, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 79, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 },
    { id: 80, name: "", brand: "", category: "", price: , image: "images/Accessories/", rating: 5 }
] 
