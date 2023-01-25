import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IProperty = {
    Id: null as unknown as number,
    SellRent: null as unknown as number,
    Name: '\n',
    Type: null as unknown as string,
    Price: null as unknown as number
  };

  constructor(private router: Router) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.addPropertyForm.controls['propName'].setValue('Default Value');
    // }, 10);
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log("Congrats, form was submitted.");
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
