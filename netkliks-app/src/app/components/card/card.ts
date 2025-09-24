import {Component, Input} from '@angular/core';

type TitleType = string | number
interface TitleInterface {

}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title: string = "";
}
