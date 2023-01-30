import { Component, OnInit } from '@angular/core';
import { HousingService } from 'app/services/housing.service';
import { IPropertyBase } from 'app/model/ipropertybase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  properties!: Array<IPropertyBase>;
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {

    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  onCityFilter(){
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection(){
    this.SortDirection = (this.SortDirection === 'asc'? 'desc' : 'asc');
  }

}
