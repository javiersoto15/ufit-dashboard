import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
   

@Component({
  selector: 'app-unutrition',
  templateUrl: './unutrition.page.html',
  styleUrls: ['./unutrition.page.scss'],
})
export class UNutritionPage implements OnInit {

  public folder: string;
  foodBank = ['Chicken','Steak','Turkey','Beef', 'Broccoli','Onion','Peppers','Pork', 'Salmon','Carrots','Lettuce','Spinach'];
  mealOne = [];
  mealTwo = [];
  mealThree = [];
  theSnack = [];
  
  constructor(private activatedRoute: ActivatedRoute)  { }

 
 
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
  }
  
 

  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(
         event.container.data,
         event.previousIndex,
        event.currentIndex
        );
    }else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
        );
    }
  }

}
