import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { UnitCardComponent } from '../unit-card/unit-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterComponent, UnitCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
