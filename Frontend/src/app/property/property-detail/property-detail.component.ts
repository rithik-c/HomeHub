import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Property } from 'app/model/property';
import { HousingService } from 'app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number;
  property = new Property();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id']; // Can also use Number(params['id']);
        this.housingService.getProperty(this.propertyId).subscribe(
          (data: Property) => {
            this.property = data;
          }
        );
      }
    )
  }

}
