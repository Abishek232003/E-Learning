import { Component } from '@angular/core';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-home',
  imports: [FlexLayoutModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
courses=[
  {img: "/pcourse-1.jpg", amount: "$149.00", icon: 4, head: "Web Design & Development Course for Beginners", staff: "John Doe", time: "1.96 Hrs", students: "30 Students"},
  {img: "/pcourse-2.jpg", amount: "$149.00", icon:3, head:"Web Design & Development Course for Beginners", staff: "John Doe", time: "1.96 Hrs", students: "30 Students"},
  {img: "/pcourse-3.jpg", amount: "$149.00", icon:3, head:"Web Design & Development Course for Beginners", staff: "John Doe", time: "1.96 Hrs", students: "30 Students"},
]
  icon = ["fa-solid fa-user-tie fa-2xs", "fa-solid fa-clock fa-2xs", "fa-solid fa-user fa-2xs", "fab fa-facebook-f fa-lg", "fab fa-twitter fa-lg","fab fa-instagram fa-lg"]
expert=[
  { img: "/team-1.jpg", name: "Instructor Name", designation: "Designaion" },
  { img:"/team-2.jpg", name:"Instructor Name", designation:"Designaion"},
  { img:"/team-3.jpg", name:"Instructor Name", designation:"Designaion"},
  { img: "/team-4.jpg", name: "Instructor Name", designation: "Designaion" },
]
  getRange(count: number): number[] {
    return Array.from({ length: count }, (v, i) => i);
  }
}
