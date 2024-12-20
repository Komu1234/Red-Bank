import { Component } from '@angular/core';
import {RouterLink ,RouterOutlet } from '@angular/router';
import { AddDonorComponent } from './Components/add-donor/add-donor.component';
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from "./Components/login/login.component";
import { AboutComponent } from './Components/about/about.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddDonorComponent, HomeComponent, LoginComponent, AboutComponent, SignUpComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyRedbankProject';
}
