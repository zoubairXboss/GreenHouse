export const users = [
  // === ADMINS (sellerId = null) ===
  {
    id: 'user1',
    email: "walid@gmail.com",
    password: "Admin#123",
    role: "admin",
    sellerId: null,
  },
  {
    id: 'user2',
    email: "koby@gmail.com",
    password: "Admin#456",
    role: "admin",
    sellerId: null,
  },
  {
    id: 'user3',
    email: "sara@gmail.com",
    password: "Super#789",
    role: "admin",
    sellerId: null,
  },
  {
    id: 'user4',
    email: "manager@gmail.com",
    password: "Manager#321",
    role: "admin",
    sellerId: null,
  },

  // === SELLERS (linked to sellerId 1 → 5) ===
  {
    id: 'user5',
    email: "atlas@gmail.com",
    password: "Seller#001",
    role: "seller",
    sellerId:  's1',
  },

  {
    id: 'user6',
    email: "taliouine@gmail.com",
    password: "Seller#002",
    role: "seller",
    sellerId:  's2',
  },

  {
    id: 'user7',
    email: "olivefarm@gmail.com",
    password: "Seller#003",
    role: "seller",
    sellerId:  's3',
  },

  {
    id: 'user8',
    email: "naturehealth@gmail.com",
    password: "Seller#004",
    role: "seller",
    sellerId:  's4',
  },

  {
    id: 'user9',
    email: "atlasnuts@gmail.com",
    password: "Seller#005",
    role: "seller",
    sellerId:  's5',
  },
];
