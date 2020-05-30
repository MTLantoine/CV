import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as models from "../assets/models";

@Component({
  selector: "app-app-core",
  templateUrl: "./app-core.component.html",
  styleUrls: ["./app-core.component.scss"],
})
@Injectable()
export class AppCoreComponent implements OnInit {
  visitor: models.Visitor;
  date: Date;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.initVisitor();
    this.saveToServer();
  }

  initVisitor() {
    var newDate = "";
    this.date = new Date();
    newDate += this.date.getDate() + "/";
    newDate += this.date.getMonth() + 1 + "/";
    newDate += this.date.getFullYear() + " - ";
    newDate += this.date.getHours() + ":";
    newDate += this.date.getMinutes();
    this.visitor = new models.Visitor(newDate);
  }

  saveToServer() {
    this.httpClient
      .post(
        "https://cv-online-mortelier.firebaseio.com/Visitor.json",
        this.visitor
      )
      .subscribe(
        () => {},
        (error) => {}
      );
  }
}
