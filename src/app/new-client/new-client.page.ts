import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
  public folder: string;
  

  constructor(private activatedRoute: ActivatedRoute) { }



  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id1');
  }
}
