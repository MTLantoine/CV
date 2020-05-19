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
    switch (this.date.getDay()) {
      case 0:
        newDate += "Lundi ";
        break;
      case 1:
        newDate += "Mardi ";
        break;
      case 2:
        newDate += "Mercredi ";
        break;
      case 3:
        newDate += "Jeudi ";
        break;
      case 4:
        newDate += "Vendredi ";
        break;
      case 5:
        newDate += "Samedi ";
        break;
      case 6:
        newDate += "Dimanche ";
        break;
    }
    newDate += this.date.getDate() + " ";
    switch (this.date.getMonth()) {
      case 0:
        newDate += "Janvier ";
        break;
      case 1:
        newDate += "Février ";
        break;
      case 2:
        newDate += "Mars ";
        break;
      case 3:
        newDate += "Avril ";
        break;
      case 4:
        newDate += "Mai ";
        break;
      case 5:
        newDate += "Juin ";
        break;
      case 6:
        newDate += "Juillet ";
        break;
      case 7:
        newDate += "Août ";
        break;
      case 8:
        newDate += "Septembre ";
        break;
      case 9:
        newDate += "Octobre ";
        break;
      case 10:
        newDate += "Novembre ";
        break;
      case 11:
        newDate += "Décembre ";
        break;
    }
    newDate += this.date.getFullYear() + " - ";
    newDate += this.date.getHours() + ":";
    newDate += this.date.getMinutes();
    this.visitor = new models.Visitor(newDate);
  }

  saveToServer() {
    console.log(this.visitor);
    this.httpClient
      .post(
        "https://cv-online-mortelier.firebaseio.com/Visitor.json",
        this.visitor
      )
      .subscribe(
        () => {
          console.log("Enregistrement terminé !");
        },
        (error) => {
          console.log("Erreur ! : " + error);
        }
      );
  }
}
