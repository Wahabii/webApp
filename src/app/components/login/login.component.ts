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

   let data = form.value;
   console.log(data.email)
  this.as.Login(data.email, data.password).subscribe((res) => {
       console.log(res)
       /*
       if(res.jwt != null && (res.user.username === this.state.identifier)){
         this.saveToken(res.jwt)
         this.saveUserId(res.user.id)
           this.props.navigation.navigate('Main',{res});


    }
    else {
        alert('username or pasword invalid !!!');
    }
*/
 })
}



}
