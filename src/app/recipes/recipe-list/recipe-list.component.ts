import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a Test',
      'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
