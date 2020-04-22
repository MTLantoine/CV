import { Component, OnInit } from "@angular/core";
import { FormationService } from "src/app/assets/services";

import * as models from "../../assets/models";

@Component({
  selector: "app-formation",
  templateUrl: "./formation.component.html",
  styleUrls: ["./formation.component.scss"],
})
export class FormationComponent implements OnInit {
  formations: models.Experience;

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.initFormation();
  }

  initFormation() {
    this.formations = this.formationService.formation;
  }
}
