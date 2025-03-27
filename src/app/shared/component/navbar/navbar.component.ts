import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FlexLayoutModule} from 'ngx-flexible-layout'

@Component({
  selector: 'app-navbar',
  imports: [FlexLayoutModule, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
isOpen=false;
isPage=false;
  show(){
    this.isOpen=!this.isOpen
  }
  showPage()
  {
    console.log("sdgs k ");
    
    this.isPage=!this.isPage
  }
}
