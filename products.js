const products = {
    shoes: [
        { id: 1, name: "Samba OG Shoes", brand: "adidas", price: 116.40, rating: 5, image: "images/Shoes/Samba green.jpg" },
        { id: 2, name: "Taekwondo Lace Shoes", brand: "adidas", price: 110, rating: 4, image: "images/Shoes/Taekwondo Lace Shoes.jpg" },
        { id: 3, name: "Retropy F2 Shoes", brand: "adidas", price: 95, rating: 4, image: "images/Shoes/Retropy F2 Shoes.jpg" },
        { id: 4, name: "Adizero Adios Pro 4 Shoes", brand: "adidas", price: 225.52, rating: 5, image: "images/Shoes/Adizero Adios Pro 4 Shoes.jpg" },
        { id: 5, name: "Reebok Classic Leather", brand: "Reebok", price: 69.38, rating: 5, image: "images/Shoes/reebokclassicleather.jpg" },
        { id: 6, name: "Reebook Phase Court", brand: "Reebok", price: 37.61, rating: 5, image: "images/Shoes/reebokphasecourt.jpg" },
        { id: 7, name: "Bb 4000 Ii", brand: "Reebok", price: 76.95, rating: 5, image: "images/Shoes/bb4000II.jpg" },
        { id: 8, name: "Fluxlite", brand: "Reebok", price: 31.09, rating: 5, image: "images/Shoes/fluxlite.jpg" },
        { id: 9, name: "T500", brand: "New Balance", price: 109.99, rating: 5, image: "images/Shoes/t500.jpg" },
        { id: 10, name: "574 Core", brand: "New Balance", price: 89.99, rating: 5, image: "images/Shoes/574core.jpg" },
        { id: 11, name: "1906 Utility", brand: "New Balance", price: 169.99, rating: 5, image: "images/Shoes/1906utility.jpg" },
        { id: 12, name: "1906 W", brand: "New Balance", price: 154.99, rating: 5, image: "images/Shoes/1906w.jpg" },
        { id: 13, name: "Nike Dunk Low", brand: "Nike", price: 52.98, rating: 5, image: "images/Shoes/nikedunklow.jpg" },
        { id: 14, name: "Nike Air Max Dn Premium", brand: "Nike", price: 160.82, rating: 5, image: "images/Shoes/nikeairmaxdnpremium.jpg" },
        { id: 15, name: "Nike Air More Uptempo Low", brand: "Nike", price: 160.82, rating: 5, image: "images/Shoes/nikeairmoreuptempolow.jpg" },
        { id: 16, name: "Nike Air Max 90", brand: "Nike", price: 160.82, rating: 5, image: "images/Shoes/nikeairmax90.jpg" },
        { id: 17, name: "Run Star Trainer", brand: "Converse", price: 77.22, rating: 5, image: "images/Shoes/C1.jpg" },
        { id: 18, name: "Chuck 70", brand: "Converse", price: 80.02, rating: 5, image: "images/Shoes/C2.jpg" },
        { id: 19, name: "Converse x CDG Chuck 70", brand: "Converse", price: 167.64, rating: 5, image: "images/Shoes/C3.jpg" },
        { id: 20, name: "Chuck Taylor All Star", brand: "Converse", price: 59.22, rating: 5, image: "images/Shoes/C4.jpg" },
        { id: 21, name: "Chuck 70 Vintage Canvas", brand: "Converse", price: 80.02, rating: 5, image: "images/Shoes/C5.jpg" },
        { id: 22, name: "Fastbreak Pro", brand: "Converse", price: 95.22, rating: 5, image: "images/Shoes/C6.jpg" },
        { id: 23, name: "Chuck 70 AT-CX", brand: "Converse", price: 83.80, rating: 5, image: "images/Shoes/C7.jpg" },
        { id: 24, name: "Run Star Motion Foundational", brand: "Converse", price: 98.82, rating: 5, image: "images/Shoes/C8.jpg" },
        { id: 25, name: "Men's UA Official Suede Shoes", brand: "Under Armour", price: 79.11, rating: 5, image: "images/Shoes/UA1.jpg" },
        { id: 26, name: "Men's UA Court 96 Shoes", brand: "Under Armour", price: 111.51, rating: 5, image: "images/Shoes/UA2.jpg" },
        { id: 27, name: "Men's UA Street Mirage Shoes", brand: "Under Armour", price: 77.31, rating: 5, image: "images/Shoes/UA3.jpg" },
        { id: 28, name: "Men's UA Essential Runner Shoes", brand: "Under Armour", price: 77.31, rating: 5, image: "images/Shoes/UA4.jpg" },
        { id: 29, name: "Unisex UA Infinite MVMNT Shoes", brand: "Under Armour", price: 140.33, rating: 5, image: "images/Shoes/UA5.jpg" },
        { id: 30, name: "Men's UA Summit Trek Shoes", brand: "Under Armour", price: 93.31, rating: 5, image: "images/Shoes/UA6.jpg" },
        { id: 31, name: "Unisex Phantom 4 CNY", brand: "Under Armour", price: 161.91, rating: 5, image: "images/Shoes/UA7.jpg" },
        { id: 32, name: "Men's UA Summit Trek Suede Shoes", brand: "Under Armour", price: 93.31, rating: 5, image: "images/Shoes/UA8.jpg" },
        { id: 33, name: "L003 Neo Two-tone Textile Trainers", brand: "Lacoste", price: 143.10, rating: 5, image: "images/Shoes/L1.jpg" },
        { id: 34, name: "Baseshot Premium Leather Sneakers", brand: "Lacoste", price: 137.70, rating: 5, image: "images/Shoes/L2.jpg" },
        { id: 35, name: "Linedrive Leather Sneakers", brand: "Lacoste", price: 125.10, rating: 5, image: "images/Shoes/L3.jpg" },
        { id: 36, name: "Linedrive Leather Sneakers", brand: "Lacoste", price: 125.10, rating: 5, image: "images/Shoes/L4.jpg" },
        { id: 37, name: "T-Clip Set Trainers", brand: "Lacoste", price: 87.57, rating: 5, image: "images/Shoes/L5.jpg" },
        { id: 38, name: "Powercourt Logo Tongue Leather Trainers", brand: "Lacoste", price: 75.00, rating: 5, image: "images/Shoes/L6.jpg" },
        { id: 39, name: "L004 Trainers", brand: "Lacoste", price: 75.00, rating: 5, image: "images/Shoes/L7.jpg" },
        { id: 40, name: "Elite Active Trainers", brand: "Lacoste", price: 108.99, rating: 5, image: "images/Shoes/L8.jpg" }
    ],

    clothings: [
        { id: 41, name: "PB Labyrinth Jacquard T-Shirt", brand: "Balmain", price: 500, rating: 5, image: "images/Clothings/B1.jpg" },
        { id: 42, name: "T-Shirt With Tank Top Print", brand: "Balmain", price: 590, rating: 5, image: "images/Clothings/B2.jpg" },
        { id: 43, name: "Vintage Balmain Embroidered T-Shirt", brand: "Balmain", price: 550, rating: 5, image: "images/Clothings/B3.jpg" },
        { id: 44, name: "T-Shirt With Balmain Racing T-Shirt", brand: "Balmain", price: 550, rating: 5, image: "images/Clothings/B4.jpg" },
        { id: 45, name: "Zipped Hoodie Infleece With Patches and Unicorns", brand: "Givenchy", price: 1412.25, rating: 5, image: "images/Clothings/G1.jpg" },
        { id: 46, name: "T-Shirt In Cotton With Unicorns Embroidery", brand: "Givenchy", price: 706.12, rating: 5, image: "images/Clothings/G2.jpg" },
        { id: 47, name: "Varsity Jacket In Wool and Leather With Patches", brand: "Givenchy", price: 4305.63, rating: 5, image: "images/Clothings/G3.jpg" },
        { id: 48, name: "Slimfit T-Shirt In Cotton With 4G Embroidery", brand: "Givenchy", price: 542.51, rating: 5, image: "images/Clothings/G4.jpg" },
        { id: 49, name: "Peanut Short Sleeve UT", brand: "Uniqlo", price: 17.05, rating: 5, image: "images/Clothings/U1.jpg" },
        { id: 50, name: "Magnum Photos Short Sleeve UT", brand: "Uniqlo", price: 31.61, rating: 5, image: "images/Clothings/U2.jpg" },
        { id: 51, name: "Pace For All Jean-Micheal Basquiat T-Shirt", brand: "Uniqlo", price: 31.61, rating: 5, image: "images/Clothings/U4.jpg" },
        { id: 52, name: "Regular Fit Textured Resort Shirt", brand: "H&M", price: 34.27, rating: 5, image: "images/Clothings/H1.jpg" },
        { id: 53, name: "Regular Fit Textured Resort Shirt", brand: "H&M", price: 30.83, rating: 5, image: "images/Clothings/H2.jpg" },
        { id: 54, name: "Slim Fit Fine-Knit T-Shirt", brand: "H&M", price: 17.21, rating: 5, image: "images/Clothings/H3.jpg" },
        { id: 55, name: "Regular Fit Linen T-Shirt", brand: "H&M", price: 34.27, rating: 5, image: "images/Clothings/H4.jpg" }
    ],
    watches: [
        { id: 56, name: "A1100G-5VT", brand: "Casio", price: 185.00, rating: 5, image: "images/Watches/C1.jpg" },
        { id: 57, name: "MTPS110-1AV", brand: "Casio", price: 145.00, rating: 5, image: "images/Watches/C2jpg" },
        { id: 58, name: "MTPS110-2AV", brand: "Casio", price: 145.00, rating: 5, image: "images/Watches/C3.jpg" },
        { id: 59, name: "MTPB145D22VT", brand: "Casio", price: 94.95, rating: 5, image: "images/Watches/C4.jpg" },
        { id: 60, name: "MDV106DD-1A3", brand: "Casio", price: 89.95, rating: 5, image: "images/Watches/C5.jpg" },
        { id: 61, name: "MWA300H-1AV", brand: "Casio", price: 69.95, rating: 5, image: "images/Watches/C6.jpg" },
        { id: 62, name: "SGW100-2B", brand: "Casio", price: 69.95, rating: 5, image: "images/Watches/C7.jpg" },
        { id: 63, name: "WS220C-7BV", brand: "Casio", price: 55.95, rating: 5, image: "images/Watches/C8.jpg" },
        { id: 64, name: "PRW6900YB-3", brand: "Pro Trek", price: 520.00, rating: 5, image: "images/Watches/PT1.jpg" },
        { id: 65, name: "PRW6900BF-1", brand: "Pro Trek", price: 510.00, rating: 5, image: "images/Watches/PT2.jpg" },
        { id: 66, name: "PRG601PE-5", brand: "Pro Trek", price: 400.00, rating: 5, image: "images/Watches/PT3.jpg" },
        { id: 67, name: "PRW6900YL-5", brand: "Pro Trek", price: 500.00, rating: 5, image: "images/Watches/PT4.jpg" },
        { id: 68, name: "PRW6611Y-1", brand: "Pro Trek", price: 420.00, rating: 5, image: "images/Watches/PT5.jpg" },
        { id: 69, name: "PRW3500T-7", brand: "Pro Trek", price: 500.00, rating: 5, image: "images/Watches/PT6.jpg" },
        { id: 70, name: "PRW2500T-7", brand: "Pro Trek", price: 440.00, rating: 5, image: "images/Watches/PT7.jpg" },
        { id: 71, name: "PRTB70-2", brand: "Pro Trek", price: 240.00, rating: 5, image: "images/Watches/PT8.jpg" },
        { id: 72, name: "OCWSG1000ZE1A", brand: "Oceanus", price: 3600.00, rating: 5, image: "images/Watches/O1.jpg" },
        { id: 73, name: "OCWS6000-1A", brand: "Oceanus", price: 1800.00, rating: 5, image: "images/Watches/O2.jpg" },
        { id: 74, name: "OCWS7000D-7A", brand: "Oceanus", price: 1300.00, rating: 5, image: "images/Watches/O3.jpg" },
        { id: 75, name: "OCWS6000BV1A", brand: "Oceanus", price: 2800.00, rating: 5, image: "images/Watches/O4.jpg" },
        { id: 76, name: "OCWS5000APA2", brand: "Oceanus", price: 1500.00, rating: 5, image: "images/Watches/O5.jpg" },
        { id: 77, name: "OCWS5000ME1A", brand: "Oceanus", price: 1800.00, rating: 5, image: "images/Watches/O6.jpg" },
        { id: 78, name: "OCWS400-3A", brand: "Oceanus", price: 1100.00, rating: 5, image: "images/Watches/O7.jpg" },
        { id: 79, name: "OCWS5000B-1A", brand: "Oceanus", price: 1400.00, rating: 5, image: "images/Watches/O8.jpg" },
        { id: 80, name: "ECB2000HR-1A", brand: "Edifice", price: 400.00, rating: 5, image: "images/Watches/E1.jpg" },
        { id: 81, name: "EFB730D-1AV", brand: "Edifice", price: 150.00, rating: 5, image: "images/Watches/E2.jpg" },
        { id: 82, name: "EFB730D-2AV", brand: "Edifice", price: 150.00, rating: 5, image: "images/Watches/E3.jpg" },
        { id: 83, name: "EFSS641TMS1A", brand: "Edifice", price: 300.00, rating: 5, image: "images/Watches/E4.jpg" },
        { id: 84, name: "EFV650D-1AV", brand: "Edifice", price: 110.00, rating: 5, image: "images/Watches/E5.jpg" },
        { id: 85, name: "EFV620D-1A2V", brand: "Edifice", price: 110.00, rating: 5, image: "images/Watches/E6.jpg" },
        { id: 86, name: "EF305-1AV", brand: "Edifice", price: 54.95, rating: 5, image: "images/Watches/E7.jpg" },
        { id: 87, name: "EFV620D-1A4V", brand: "Edifice", price: 110.00, rating: 5, image: "images/Watches/E8.jpg" }
    ],
    fragrances: [
        { id: 88, name: "Versache Eros", brand: "Versache", category: "Perfume", price: 176.00, image: "images/fragrance/Versache Eros.jpg", rating: 5 },
        { id: 89, name: "Versache Eros Flame", brand: "Versache", category: "Perfume", price: 176.00, image: "images/fragrance/Versache Eros Flame.jpg", rating: 5 },
        { id: 90, name: "Aventus Creed", brand: "Aventus", category: "Perfume", price: 172.00, image: "images/fragrance/Aventus Creed.jpg", rating: 5 },
        { id: 91, name: "Sauvage Dior", brand: "Dior", category: "Perfume", price: 172.00, image: "images/fragrance/Sauvage Dior.jpg", rating: 5 },
        { id: 92, name: "Blue De Channel", brand: "Channel", category: "Perfume", price: 175.00, image: "images/fragrance/Blue De Channel.jpg", rating: 5 },
        { id: 93, name: "Yves Saint Laurent", brand: "YSL", category: "Perfume", price: 137.00, image: "images/fragrance/YSL.jpg", rating: 5 },
    ]

};
