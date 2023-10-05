import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mentions-legales",
  templateUrl: "./mentions-legales.component.html",
  styleUrls: ["./mentions-legales.component.scss"],
})
export class MentionsLegalesComponent implements OnInit {
  frText: string;
  enText: string;
  frDate: string;
  enDate: string;
  date: string;

  constructor() {}

  ngOnInit() {
    this.initMentionsLegales();
  }

  initMentionsLegales() {
    this.frText =
      "Ce site a été créé sur Angular par Antoine Mortelier, et appartient à Antoine Mortelier.";
    this.frDate = "Dernière date de mise à jour :";
    this.enText =
      "This website was created on Angular by Antoine Mortelier, and belongs to Antoine Mortelier.";
    this.enDate = "Last update :";
    this.date = "05/10/2023 -- 18:00";
  }
}
