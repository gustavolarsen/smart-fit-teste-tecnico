import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ILocation } from '../../interfacaces/smartfit-location';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [NgFor],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  @Input() location!: ILocation;

}
