import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  isOpen: boolean = false;
  isopenSeconnectebtn: boolean = false;
  isUser: boolean = false;
  isAdmin: boolean = false;

  constructor(private as: AuthService, private us: UserService , private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
   }

  ngOnInit(): void {

    this.router.navigate(['']);
    console.log('test');


  }



  initial_State(){



 //location.reload();
        let uid = localStorage.getItem('id');
        console.log('user login>>>',uid);
        if(uid){

        this.isUser = true ;
       // this.as.userId = user.uid;
        this.us.getUserData().subscribe(data => {
          if (data['admin']) this.isAdmin = true ;

         // this.router.navigate(['/']);
          //location.reload();



        });

        }

      else {
        this.isUser = false;
          //this.as.userId = '' ;
      }




  }




  IsLoggedIn() {
    this.as.isLoggedIn();

  }




  toggleNavbar(){
    this.isOpen = ! this.isOpen ;
  }

  Logout(){

    this.as.logout().then(() => {
      this.router.navigate(['']);
       location.reload();
    }
     ).catch(err => console.log(err));


  }

  CarteComponent(){
    this.router.navigate(['/cart']);
  }


}
