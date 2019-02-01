import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared_service/user.service';
import { User } from 'src/app/modele/user';
import{Router}  from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.sass']
})
export class ListuserComponent implements OnInit {
  users: Array<User>;

  constructor(private userService :UserService , private _router:Router) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });

}

deleteUser(user){
  this.userService.deleteUser(user.id).subscribe((data)=>{
      this.users.splice(this.users.indexOf(user),1);
  },(error)=>{
    console.log(error);
  });
}


updateUser(user){  
  this.userService.setter(user);
  this._router.navigate(['/edit']);


}
newUser(){
let user = new User();
 this.userService.setter(user);
  this._router.navigate(['/edit']);

}


}
