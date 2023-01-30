import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
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
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: any) => {
        this.property = data['prp'] as Property;
      }
    );


    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id']; // Can also use Number(params['id']);
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       }
    //     );
    //   }
    // )

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/Internal_1.png',
        medium: 'assets/images/Internal_1.png',
        big: 'assets/images/Internal_1.png'
      },
      {
        small: 'assets/images/Internal_2.png',
        medium: 'assets/images/Internal_2.png',
        big: 'assets/images/Internal_2.png'
      },
      {
        small: 'assets/images/Internal_3.png',
        medium: 'assets/images/Internal_3.png',
        big: 'assets/images/Internal_3.png'
      },{
        small: 'assets/images/Internal_4.png',
        medium: 'assets/images/Internal_4.png',
        big: 'assets/images/Internal_4.png'
      },
      {
        small: 'assets/images/Internal_5.png',
        medium: 'assets/images/Internal_5.png',
        big: 'assets/images/Internal_5.png'
      }
    ];

  }

}
