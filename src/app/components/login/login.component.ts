import { User } from './../../interfaces/user.interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //invalidLogin: boolean;

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  /*
  login(form){
    console.log(form);
    let data = form.value;
   this.as.login(data.email, data.password).then(() => {
    this.router.navigate(['']);
   }).catch((err) => console.log(err));
   }
*/




login (form) {

   let data : User = form.value;
   console.log(data)
   this.as.Login(data).subscribe( async (res) => {
       console.log(res)
       const data = await res ;
       console.log("token >>>>",data.jwt);
       console.log("id>>>", data.id);


         localStorage.setItem('token', data.jwt)
         localStorage.setItem('id', data.id)

          this.router.navigate(['/accuille']);


 },
 error => {
  alert('username or pasword invalid !!!');
 })
}



}

