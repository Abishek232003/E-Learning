import { Routes } from '@angular/router';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", component: NavbarComponent,
        children:[
            { path: "", component: HomeComponent },
        ]
     },


];
