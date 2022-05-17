import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://img.taste.com.au/nS9XlWPQ/w733-h489-cfill-q80/taste/2017/08/steak-with-mushroom-sauce-129161-2.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
