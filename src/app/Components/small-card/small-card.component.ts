import { Component, Input } from '@angular/core';
import { IsmallCard } from 'src/app/interface';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() smallCardInfo:IsmallCard = {
    imgPath: '',
    category: '',
    createdAt: '',
    title: '',
    description: '',
    authorName: '',
    authorProfession: '',
    authorPhoto: '',
  }
}
