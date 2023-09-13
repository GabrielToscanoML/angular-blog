import { Component } from '@angular/core';
import { smallCardsMockInfos } from './cardMockInfos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';
  smallCard1Info = smallCardsMockInfos[0];
  smallCard2Info = smallCardsMockInfos[1];
}
