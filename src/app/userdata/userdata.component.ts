import { Component, OnInit } from '@angular/core';
import { DemoServiceService} from '../services/demo-service.service';
import { User } from '../modal/user'

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  // User !: User[];
  User: any = [];

  constructor(private crudApi: DemoServiceService) { }

  ngOnInit(): void{
   
    // this.crudApi.getdata().subscribe((data: any)=>{
    //   console.log(data);
    //   this.User = data;
    // })

    this.getUser();
      
  }

  getUser(){
    return this.crudApi.getUserlist().subscribe((data : {}) => {
      this.User = data;
    })
  }

}
