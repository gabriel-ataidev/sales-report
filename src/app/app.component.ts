import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'
import { data } from './data'
import { Category, Brand, Product, Profit } from './types'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = '2023 Sales Report'
  data: Category[] = data
  filteredProducts: Product[] = this.data[0].products
  filteredBrands: Brand[] = this.data[0].products[0].brands
  filteredProfits: Profit[] = data[0].products[0].brands[0].profit
  initialYLabel: number[] = this.filteredProfits.map(item => item.sales)
  initialXLabel: string[] = this.filteredProfits.map(item => item.month)

  onInputChange (target: any): void {
    let item
    switch (target.name) {
      case 'category':
        item = this.data.find(item => item.category === target.value)
        if (item) {
          this.filteredProducts = item.products
          this.filteredBrands = this.filteredProducts[0].brands
          this.filteredProfits = this.filteredBrands[0].profit
        }
        break
      case 'product':
        item = this.filteredProducts.find(item => item.product === target.value)
        if (item) {
          this.filteredBrands = item.brands
          this.filteredProfits = this.filteredBrands[0].profit
        }
        break
      case 'brand':
        item = this.filteredBrands.find(item => item.brand === target.value)
        if (item) {
          this.filteredProfits = item.profit
        }
        break
      default:
        break
    }
  }
}
