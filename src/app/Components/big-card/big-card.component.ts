import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  imgPath:string = "../../../assets/big-card-img.png"
  category:string = "Development"
  createdAt:string = "August 25, 2023"
  title:string = "How to manage multiple Front-End projects with a monorepo"
  description:string = "A step by step guide on how to manage multiple Front-End projects with a monorepo."
  authorName:string = "Rui Saraiva"
  authorProfession:string = "Front-End Developer"
}
