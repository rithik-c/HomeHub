import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id']; // Can also use Number(params['id']);
      }
    )
  }

  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId])
  }

}
