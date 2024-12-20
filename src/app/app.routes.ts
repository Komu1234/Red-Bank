import { Routes } from '@angular/router';
import { AddDonorComponent } from './Components/add-donor/add-donor.component';
import { HomeComponent } from './Components/home/home.component';
import { DeleteDonorComponent } from './Components/delete-donor/delete-donor.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'App Home Page',
        component: HomeComponent,
    },
    {
        path: 'login',
        title: 'App Login Page',
        component: LoginComponent,
    },

    {
        path: 'about',
        title: 'App About Page',
        component: AboutComponent,
    },
    {
        path: 'signup',
        title: 'App SignUp Page',
        component: SignUpComponent,
    },

];
