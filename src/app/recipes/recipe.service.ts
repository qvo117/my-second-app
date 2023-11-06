import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Description',
      'https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Another Test Recipe',
      'Test Description',
      'https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice(); //shallow copy
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
