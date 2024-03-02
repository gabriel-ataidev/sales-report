import { Category } from './types'

export const data: Category[] = [
  {
    category: 'Food',
    products: [
      {
        product: 'Soda pop',
        brands: [
          {
            brand: 'Coca-cola',
            profit: [
              { month: 'January', sales: 12 },
              { month: 'February', sales: 130 },
              { month: 'March', sales: 80 },
              { month: 'April', sales: 200 }
            ]
          },
          {
            brand: 'Guaraná',
            profit: [
              { month: 'January', sales: 80 },
              { month: 'February', sales: 10 },
              { month: 'March', sales: 70 },
              { month: 'April', sales: 30 }
            ]
          },
          {
            brand: 'Fanta',
            profit: [
              { month: 'January', sales: 112 },
              { month: 'February', sales: 50 },
              { month: 'March', sales: 12 },
              { month: 'April', sales: 80 }
            ]
          }
        ]
      },
      {
        product: 'Chips',
        brands: [
          {
            brand: 'Lays',
            profit: [
              { month: 'January', sales: 200 },
              { month: 'February', sales: 18 },
              { month: 'March', sales: 220 },
              { month: 'April', sales: 190 }
            ]
          },
          {
            brand: 'Doritos',
            profit: [
              { month: 'January', sales: 150 },
              { month: 'February', sales: 170 },
              { month: 'March', sales: 16 },
              { month: 'April', sales: 180 }
            ]
          },
          {
            brand: 'Pringles',
            profit: [
              { month: 'January', sales: 10 },
              { month: 'February', sales: 120 },
              { month: 'March', sales: 110 },
              { month: 'April', sales: 13 }
            ]
          }
        ]
      },
      {
        product: 'Ice Cream',
        brands: [
          {
            brand: 'Magnum',
            profit: [
              { month: 'January', sales: 180 },
              { month: 'February', sales: 400 },
              { month: 'March', sales: 170 },
              { month: 'April', sales: 200 }
            ]
          },
          {
            brand: 'Häagen-Dazs',
            profit: [
              { month: 'January', sales: 16 },
              { month: 'February', sales: 150 },
              { month: 'March', sales: 300 },
              { month: 'April', sales: 170 }
            ]
          },
          {
            brand: "Ben & Jerry's",
            profit: [
              { month: 'January', sales: 190 },
              { month: 'February', sales: 200 },
              { month: 'March', sales: 21 },
              { month: 'April', sales: 220 }
            ]
          }
        ]
      }
    ]
  },
  {
    category: 'Electronics',
    products: [
      {
        product: 'Smartphone',
        brands: [
          {
            brand: 'Apple',
            profit: [
              { month: 'January', sales: 180 },
              { month: 'February', sales: 20 },
              { month: 'March', sales: 190 },
              { month: 'April', sales: 210 }
            ]
          },
          {
            brand: 'Samsung',
            profit: [
              { month: 'January', sales: 160 },
              { month: 'February', sales: 170 },
              { month: 'March', sales: 150 },
              { month: 'April', sales: 20 }
            ]
          },
          {
            brand: 'Xiaomi',
            profit: [
              { month: 'January', sales: 18 },
              { month: 'February', sales: 190 },
              { month: 'March', sales: 200 },
              { month: 'April', sales: 170 }
            ]
          }
        ]
      },
      {
        product: 'Laptop',
        brands: [
          {
            brand: 'Dell',
            profit: [
              { month: 'January', sales: 300 },
              { month: 'February', sales: 32 },
              { month: 'March', sales: 310 },
              { month: 'April', sales: 130 }
            ]
          },
          {
            brand: 'HP',
            profit: [
              { month: 'January', sales: 250 },
              { month: 'February', sales: 70 },
              { month: 'March', sales: 260 },
              { month: 'April', sales: 80 }
            ]
          },
          {
            brand: 'Lenovo',
            profit: [
              { month: 'January', sales: 100 },
              { month: 'February', sales: 220 },
              { month: 'March', sales: 20 },
              { month: 'April', sales: 230 }
            ]
          }
        ]
      },
      {
        product: 'Television',
        brands: [
          {
            brand: 'Sony',
            profit: [
              { month: 'January', sales: 400 },
              { month: 'February', sales: 220 },
              { month: 'March', sales: 410 },
              { month: 'April', sales: 130 }
            ]
          },
          {
            brand: 'LG',
            profit: [
              { month: 'January', sales: 250 },
              { month: 'February', sales: 170 },
              { month: 'March', sales: 360 },
              { month: 'April', sales: 30 }
            ]
          },
          {
            brand: 'Samsung',
            profit: [
              { month: 'January', sales: 380 },
              { month: 'February', sales: 40 },
              { month: 'March', sales: 390 },
              { month: 'April', sales: 410 }
            ]
          }
        ]
      }
    ]
  },
  {
    category: 'Clothing',
    products: [
      {
        product: 'T-shirt',
        brands: [
          {
            brand: 'Nike',
            profit: [
              { month: 'January', sales: 100 },
              { month: 'February', sales: 120 },
              { month: 'March', sales: 11 },
              { month: 'April', sales: 130 }
            ]
          },
          {
            brand: 'Adidas',
            profit: [
              { month: 'January', sales: 80 },
              { month: 'February', sales: 90 },
              { month: 'March', sales: 100 },
              { month: 'April', sales: 8 }
            ]
          },
          {
            brand: 'Puma',
            profit: [
              { month: 'January', sales: 110 },
              { month: 'February', sales: 100 },
              { month: 'March', sales: 250 },
              { month: 'April', sales: 105 }
            ]
          }
        ]
      },
      {
        product: 'Jeans',
        brands: [
          {
            brand: "Levi's",
            profit: [
              { month: 'January', sales: 90 },
              { month: 'February', sales: 100 },
              { month: 'March', sales: 95 },
              { month: 'April', sales: 105 }
            ]
          },
          {
            brand: 'Wrangler',
            profit: [
              { month: 'January', sales: 85 },
              { month: 'February', sales: 95 },
              { month: 'March', sales: 90 },
              { month: 'April', sales: 100 }
            ]
          },
          {
            brand: 'Lee',
            profit: [
              { month: 'January', sales: 80 },
              { month: 'February', sales: 85 },
              { month: 'March', sales: 75 },
              { month: 'April', sales: 90 }
            ]
          }
        ]
      },
      {
        product: 'Sneakers',
        brands: [
          {
            brand: 'Ous',
            profit: [
              { month: 'January', sales: 120 },
              { month: 'February', sales: 130 },
              { month: 'March', sales: 125 },
              { month: 'April', sales: 135 }
            ]
          },
          {
            brand: 'Adidas',
            profit: [
              { month: 'January', sales: 110 },
              { month: 'February', sales: 120 },
              { month: 'March', sales: 115 },
              { month: 'April', sales: 125 }
            ]
          },
          {
            brand: 'New Balance',
            profit: [
              { month: 'January', sales: 100 },
              { month: 'February', sales: 110 },
              { month: 'March', sales: 105 },
              { month: 'April', sales: 115 }
            ]
          }
        ]
      }
    ]
  }
]
