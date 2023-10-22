import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test',
      'https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'Test',
      'https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //shallow copy
  }
}
