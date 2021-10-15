import { Component, OnInit } from '@angular/core';
import {UsersDataService} from './users-data.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data: any = []; 
  constructor(private user:UsersDataService)
  {
    this.user.getData().subscribe(data =>{
      console.warn(data);
      this.data=data;
    })
  }

  ngOnInit(): void {
  }

}
