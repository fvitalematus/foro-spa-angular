import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';
import { global } from './services/global';
// import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
// Implements OnInit y DoCheck: Hooks, ejecutan procesos (Eventos) que detectan al componente.
export class AppComponent implements OnInit, DoCheck {
  public title = 'Foro SPA Angular';
  public identity;
  public token;
  public url;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
  }

  ngOnInit() {
    // Actualizar las variables de manera dinámica.
    console.log(this.identity);
    console.log(this.token);
  }

  ngDoCheck() {
    // Actualizar la variable identity de manera dinámica.
    this.identity = this._userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/inicio']);
  }

}
