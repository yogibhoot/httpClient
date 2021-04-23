import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../services/demo-service.service';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  uData: any = {};

  constructor( private crudApi : DemoServiceService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.getUserdata();
  }

  getUserdata(){
    this.crudApi.getUser(this.id).subscribe((data: {}) => {
      this.uData = data;
    })
  }

}
