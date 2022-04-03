import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }




  getAllFoodByTag(tag:string ):Foods[]{

    // if(tag == 'All')
    // return this.getAll()
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag));
    return tag == 'All'?
    this.getAll(): this.getAll().filter(food => food.tags?.includes(tag));

  }


  getAllTag():Tag[]{

    return[

      { name: 'All', count:8 },
      { name: 'Chicken', count:1 },
      { name: 'SlowFood', count:3},
      { name: ' HumBurger', count:1},
      { name: ' Pizza', count:1},
      { name: 'Curry', count:1},


    ];
  }


  getAll():Foods[]{
    return[
      // '/assets/1.jpeg',
      // '/assets/2.jpeg',
      // '/assets/3.jpeg',
      // '/assets/4.jpeg',
      // '/assets/5.jpeg',
      // '/assets/6.webp',
      // '/assets/7.jpeg',
      // '/assets/8.jpeg',

    {
      id:1,
      name:'Fruitsalad',
      price:9,
      cookTime:'10-20',
      favourite:false,
      origins:['Italy'],
      star:4.0,
      imageUrl :'assets/1.jpeg',
      tags:['SlowFood', 'Fruitsalad','sanck'],
    },

    {
      id:2,
      name:'Fried Chicken',
      price:7 ,
      cookTime:'30-60',
      favourite:false,
      origins:['Indian'],
      star:4.0,
      imageUrl :'assets/2.jpeg',
      tags:['Chicken', 'Fried Chicken','starter'],
    },

    {
      id:3,
      name:'SwitzBurger',
      price:11,
      cookTime:'30-40',
      favourite:false,
      origins:['chineese'],
      star:4.0,
      imageUrl :'assets/3.jpeg',
      tags:['HumBurger', 'SwitzBurger','starter'],
    },

    {
      id:4,
      name:'Spicy vegetables HumBurger',
      price:15,
      cookTime:'30-50',
      favourite:false,
      origins:['Jpanese'],
      star:4.0,
      imageUrl :'assets/4.jpeg',
      tags:[' HumBurger', 'Spicy vegetables HumBurger','Lunch'],
    },

    {
      id:5,
      name:'Crunchy Fried Pizza',
      price:23,
      cookTime:'30-1hr',
      favourite:false,
      origins:['India'],
      star:4.0,
      imageUrl :'assets/5.jpeg',
      tags:[' Pizza', 'Crunchy Fried Pizza','Lunch'],
    },
    {
      id:6,
      name:'Potato Chips',
      price:5 ,
      cookTime:'20-30',
      favourite:false,
      origins:['Indian'],
      star:4.0,
      imageUrl :'assets/6.jpg',
      tags:['SlowFood', 'Potato Chips','Starter'],
    },
    {
      id:7,
      name:'Masala Chicken Panner',
      price:20,
      cookTime:'40-50',
      favourite:false,
      origins:['Indian'],
      star:4.0,
      imageUrl :'assets/7.jpeg',
      tags:['Curry', 'Masala Chicken Panner','Lunch'],
    },
    {
      id:8,
      name:'Soayas',
      price:5 ,
      cookTime:'15-20',
      favourite:false,
      origins:['Japanese'],
      star:4.0,
      imageUrl :'assets/8.jpeg',
      tags:['SlowFood', 'Soayas','starter'],
    },
    ];
  }
}
