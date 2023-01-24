import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm!: NgForm;
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

}
