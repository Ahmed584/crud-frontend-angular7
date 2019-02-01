import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared_service/user.service';
import { User } from 'src/app/modele/user';
import{Router}  from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.sass']
})
export class UserformComponent implements OnInit {
  private user:User;
  
  constructor(private userService:UserService , private _rotuer:Router) { }

  ngOnInit() {
    this.user=this.userService.getter();
  }



    processForm(){
      if(this.user.id==undefined){
         this.userService.createUser(this.user).subscribe((user)=>{
           console.log(user);
           this._rotuer.navigate(['/list']);
         },(error)=>{
           console.log(error);
         });
      }else{
         this.userService.updateUser(this.user).subscribe((user)=>{
           console.log(user);
           this._rotuer.navigate(['/list']);
         },(error)=>{
           console.log(error);
         });
      }
    }

}
