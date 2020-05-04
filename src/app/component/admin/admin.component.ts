import { Component, OnInit } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
@Injectable()
export class AdminComponent implements OnInit, CanActivate {
  isAuth: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuth) {
      return true;
    } else {
      this.router.navigate(["/admin"]);
    }
  }
}
