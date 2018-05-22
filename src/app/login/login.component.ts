import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    router: any;
    user: Observable<firebase.User>;
    authenticated: boolean = false;

  constructor(public af: AngularFireAuth) { 
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = af.authState;
          this.authenticated = true;
        }
      });
  }

  ngOnInit() {
  }
   
  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result)=>{
      this.authenticated = true;
      console.log('Signed in successfully!');
    }).catch((error)=>{
      this.authenticated = false;
      console.log('Error signing in: ',error);
    })
  }

  logout() {
    console.log('logout');
   this.af.auth.signOut()
   .then((result)=>{
     this.router.navigate(['/login']).then(function(){
       window.location.reload();
       this.authenticated = false;
     });
     console.log('You were logged out successfully!');
   }).catch((error) =>{
     this.authenticated = true;
     console.log('Error signing out: ',error);
   })
 }
}
