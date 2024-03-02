import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'
import * as Highcharts from 'highcharts'
import { data } from './data'
import { Category, Brand, Product, Profit } from './types'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  title = '2023 Sales Report'
  data: Category[] = data
  filteredProducts: Product[] = this.data[0].products
  filteredBrands: Brand[] = this.data[0].products[0].brands
  filteredProfits: Profit[] = data[0].products[0].brands[0].profit
  initialYLabel: number[] = this.filteredProfits.map(item => item.sales)
  initialXLabel: string[] = this.filteredProfits.map(item => item.month)

  constructor () {}
  ngOnInit (): void {
    if (typeof Highcharts.chart === 'function') {
      Highcharts.chart('container', this.options)
    }
  }

  options: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Sales By Month'
    },
    xAxis: {
      categories: this.initialXLabel,
      title: {
        text: 'Months'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Profit'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valuePrefix: 'R$'
    },
    series: [
      {
        name: 'Profit',
        data: this.initialYLabel
      }
    ]
  }

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
    this.updateChart()
  }

  updateChart (): void {
    this.options.series[0].data = this.filteredProfits.map(item => item.sales)
    this.options.xAxis.categories = this.filteredProfits.map(item => item.month)
    Highcharts.chart('container', this.options)
  }
}
