import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unutrition',
  templateUrl: './unutrition.page.html',
  styleUrls: ['./unutrition.page.scss'],
})
export class UNutritionPage implements OnInit {

  public folder: string;
  constructor(private activatedRoute: ActivatedRoute)  { }

 
 
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
