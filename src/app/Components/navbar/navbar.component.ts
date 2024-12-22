import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AboutComponent } from '../about/about.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,HomeComponent, LoginComponent, AboutComponent, SignUpComponent, ContactusComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
