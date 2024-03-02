export interface Category {
  category: string
  products: Product[]
}

export interface Product {
  product: string
  brands: Brand[]
}

export interface Brand {
  brand: string
  profit: Profit[]
}

export interface Profit {
  month: string
  sales: number
}
