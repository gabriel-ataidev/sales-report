import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { data } from './data'
import { Category } from './types'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = '2023 Sales Report'
  data: Category[] = data
}
