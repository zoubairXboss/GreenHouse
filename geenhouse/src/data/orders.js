export const orders = [
  // Seller 1
  {
    id: "order1",
    sellerId: "s1",
    productIds: [1, 2],
    status: "Pending",
    isPaid: false,
    date: "2025-01-10",
    customerName: "Karim El Fassi",
    customerLocation: {
      street: "Rue Al Qods",
      houseNumber: "24",
      postalCode: "80000",
      city: "Agadir"
    },
    totalPrice: 320
  },
  {
    id: "order2",
    sellerId: "s1",
    productIds: [11],
    status: "Shipped",
    isPaid: false,
    date: "2025-01-12",
    customerName: "Meryem Tahiri",
    customerLocation: {
      street: "Avenue Hassan II",
      houseNumber: "17",
      postalCode: "40000",
      city: "Marrakech"
    },
    totalPrice: 150
  },
  {
    id: "order3",
    sellerId: "s1",
    productIds: [2],
    status: "Delivered",
    isPaid: true,
    date: "2025-01-15",
    customerName: "Soufiane Benali",
    customerLocation: {
      street: "Boulevard Mohammed V",
      houseNumber: "88",
      postalCode: "20000",
      city: "Casablanca"
    },
    totalPrice: 180
  },
  {
    id: "order4",
    sellerId: "s1",
    productIds: [1, 11],
    status: "Pending",
    isPaid: false,
    date: "2025-01-18",
    customerName: "Nadia Ait Lhaj",
    customerLocation: {
      street: "Rue Moulay Rachid",
      houseNumber: "5",
      postalCode: "44000",
      city: "Taroudant"
    },
    totalPrice: 290
  },

  // Seller 2
  {
    id: "order5",
    sellerId: "s2",
    productIds: [3],
    status: "Pending",
    isPaid: false,
    date: "2025-01-07",
    customerName: "Imane Chafi",
    customerLocation: {
      street: "Rue Taliouine",
      houseNumber: "12",
      postalCode: "83500",
      city: "Taliouine"
    },
    totalPrice: 250
  },
  {
    id: "order6",
    sellerId: "s2",
    productIds: [5, 10],
    status: "Shipped",
    isPaid: false,
    date: "2025-01-11",
    customerName: "Omar Akar",
    customerLocation: {
      street: "Avenue My Ismail",
      houseNumber: "7",
      postalCode: "30000",
      city: "Fes"
    },
    totalPrice: 190
  },
  {
    id: "order7",
    sellerId: "s2",
    productIds: [15],
    status: "Delivered",
    isPaid: true,
    date: "2025-01-14",
    customerName: "Zineb Lmoumen",
    customerLocation: {
      street: "Rue Al Maghreb",
      houseNumber: "55",
      postalCode: "10000",
      city: "Rabat"
    },
    totalPrice: 95
  },
  {
    id: "order8",
    sellerId: "s2",
    productIds: [3, 5],
    status: "Pending",
    isPaid: false,
    date: "2025-01-19",
    customerName: "Hicham Idrissi",
    customerLocation: {
      street: "Rue Al Massira",
      houseNumber: "41",
      postalCode: "50000",
      city: "Meknes"
    },
    totalPrice: 310
  },

  // Seller 3
  {
    id: "order9",
    sellerId: "s3",
    productIds: [4],
    status: "Pending",
    isPaid: false,
    date: "2025-01-06",
    customerName: "Salma Badr",
    customerLocation: {
      street: "Rue Ibn Sina",
      houseNumber: "33",
      postalCode: "40100",
      city: "Marrakech"
    },
    totalPrice: 120
  },
  {
    id: "order10",
    sellerId: "s3",
    productIds: [7],
    status: "Shipped",
    isPaid: false,
    date: "2025-01-11",
    customerName: "Yassine El Bachir",
    customerLocation: {
      street: "Rue Oued Ziz",
      houseNumber: "9",
      postalCode: "90000",
      city: "Tanger"
    },
    totalPrice: 75
  },
  {
    id: "order11",
    sellerId: "s3",
    productIds: [13],
    status: "Delivered",
    isPaid: true,
    date: "2025-01-16",
    customerName: "Houda Amrani",
    customerLocation: {
      street: "Boulevard Bir Anzarane",
      houseNumber: "102",
      postalCode: "20050",
      city: "Casablanca"
    },
    totalPrice: 85
  },
  {
    id: "order12",
    sellerId: "s3",
    productIds: [4, 7],
    status: "Pending",
    isPaid: false,
    date: "2025-01-18",
    customerName: "Mohamed Lahlou",
    customerLocation: {
      street: "Rue Lalla Khadija",
      houseNumber: "3",
      postalCode: "30050",
      city: "Fez"
    },
    totalPrice: 210
  },

  // Seller 4
  {
    id: "order13",
    sellerId: "s4",
    productIds: [6],
    status: "Pending",
    isPaid: false,
    date: "2025-01-08",
    customerName: "Khadija Laaroussi",
    customerLocation: {
      street: "Avenue Zerktouni",
      houseNumber: "44",
      postalCode: "20020",
      city: "Casablanca"
    },
    totalPrice: 140
  },
  {
    id: "order14",
    sellerId: "s4",
    productIds: [9],
    status: "Shipped",
    isPaid: false,
    date: "2025-01-10",
    customerName: "Noureddine Kabbaj",
    customerLocation: {
      street: "Rue Taddart",
      houseNumber: "6",
      postalCode: "70000",
      city: "Oujda"
    },
    totalPrice: 95
  },
  {
    id: "order15",
    sellerId: "s4",
    productIds: [14],
    status: "Delivered",
    isPaid: true,
    date: "2025-01-14",
    customerName: "Samira Achraf",
    customerLocation: {
      street: "Rue Anfa",
      houseNumber: "11",
      postalCode: "20100",
      city: "Casablanca"
    },
    totalPrice: 260
  },
  {
    id: "order16",
    sellerId: "s4",
    productIds: [6, 14],
    status: "Pending",
    isPaid: false,
    date: "2025-01-17",
    customerName: "Othman Bekkali",
    customerLocation: {
      street: "Rue Oued Fès",
      houseNumber: "29",
      postalCode: "30000",
      city: "Fes"
    },
    totalPrice: 340
  },

  // Seller 5
  {
    id: "order17",
    sellerId: "s5",
    productIds: [8],
    status: "Pending",
    isPaid: false,
    date: "2025-01-07",
    customerName: "Amina Benhima",
    customerLocation: {
      street: "Rue Al Firdaous",
      houseNumber: "14",
      postalCode: "80020",
      city: "Agadir"
    },
    totalPrice: 110
  },
  {
    id: "order18",
    sellerId: "s5",
    productIds: [12],
    status: "Shipped",
    isPaid: false,
    date: "2025-01-11",
    customerName: "Hajar Kharbouch",
    customerLocation: {
      street: "Rue Ennakhil",
      houseNumber: "22",
      postalCode: "40000",
      city: "Marrakech"
    },
    totalPrice: 80
  },
  {
    id: "order19",
    sellerId: "s5",
    productIds: [8, 12],
    status: "Delivered",
    isPaid: true,
    date: "2025-01-15",
    customerName: "Badr Jinti",
    customerLocation: {
      street: "Avenue Al Amal",
      houseNumber: "9",
      postalCode: "50000",
      city: "Meknes"
    },
    totalPrice: 195
  },
  {
    id: "order20",
    sellerId: "s5",
    productIds: [12],
    status: "Pending",
    isPaid: false,
    date: "2025-01-18",
    customerName: "Houdayfa Amzil",
    customerLocation: {
      street: "Rue Koutoubia",
      houseNumber: "3",
      postalCode: "45000",
      city: "Ouarzazate"
    },
    totalPrice: 70
  }
];
