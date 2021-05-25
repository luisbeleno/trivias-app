import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logOut(){
    this.afAuth.signOut();
    localStorage.removeItem('user');

    this.router.navigate(['/']);
  }

}
