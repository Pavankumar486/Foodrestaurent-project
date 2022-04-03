import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 searchItem:string = '';
  constructor(private route:ActivatedRoute, private router:Router, private fs:FoodService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchItems'])
      this.searchItem = params['searchItems'];
    })
  }
search(): void{
if(this.searchItem)
this.router.navigateByUrl('/search/'+ this.searchItem)
}
}
