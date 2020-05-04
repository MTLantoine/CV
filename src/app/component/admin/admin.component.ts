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
  host: {
    "(window:resize)": "onResize($event)",
  },
})
@Injectable()
export class AdminComponent implements OnInit, CanActivate {
  windowHeight: number;
  isAuth: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.windowHeight = window.innerHeight - 40;
  }

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

  onResize(event) {
    this.windowHeight = event.target.innerHeight - 40;
  }
}
