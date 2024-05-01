import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ILocation } from '../../interfacaces/smartfit-location';
import { LocationService } from '../../services/location.service';
import { FilterComponent } from '../filter/filter.component';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FilterComponent, LocationComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  locationList$: Observable<ILocation[]> | undefined;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    //this.locationList$ = this.locationService.getAllLocations();
  }

  getFilters(event: any) {
    this.filteredLocations(event.turn, event.showClosed);
  }


  filteredLocations(turnValue: string, showClosedValue: boolean) {
    this.locationList$ =
      this.locationService.getAllLocations().pipe(
        map(locations => locations.filter(location => {
          if (!location.schedules || location.schedules.length === 0) {
            return false; // Se não houver agenda, retorne falso
          }

          // Não trazer academias fechadas
          if (!showClosedValue) {
            if (!location.opened)
              return false;
          }

          // Verifica cada agenda da localização
          for (const schedule of location.schedules) {
            if (schedule.hour === "Fechada" || schedule.weekdays === "Obs.:") {
              return false; // Se a localização estiver fechada, retorne falso
            }

            const [inicio, fim] = schedule.hour.split(" às ");
            const [horaInicio, minutoInicio] = inicio.split("h");
            const [horaFim, minutoFim] = fim.split("h");
            const horaInicioInt = parseInt(horaInicio);
            const horaFimInt = parseInt(horaFim);
            const horaSelecionada = parseInt(turnValue.split(":")[0]);

            // Verifica se a hora selecionada está dentro do intervalo de funcionamento da localização
            if (horaSelecionada >= horaInicioInt && horaSelecionada < horaFimInt) {
              return true;
            }
          }
          return false;
        }))
      );
  }
}
