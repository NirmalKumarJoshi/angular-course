import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';



@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  
  
  constructor() { }

  @Input()
  dish: Dish;
  ngOnInit() {
  }
  

}
