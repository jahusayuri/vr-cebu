import {Component, OnInit, ɵstringify} from '@angular/core';
import { LOCATIONS } from '../location-list/locations';
import { Location } from '../model/location';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  opened: boolean;
  locations = LOCATIONS;

  selectedLocation: Location;

  constructor() { }

  ngOnInit() {
    // Initial selection
   this.selectedLocation = LOCATIONS[0];
  }

  onSelect(location: Location): void {
    this.selectedLocation = location;
  }

}
