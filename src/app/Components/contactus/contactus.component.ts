import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';  

@Component({
  selector: 'app-contactus',
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {


 constructor(private router:Router){}

 onExUser(pageName:String): void{
  this.router.navigate([`${pageName}`]);
 }


 onNewUser(pageName:String): void{
  this.router.navigate([`${pageName}`]);
 }

 

  

}
