import { Component, OnInit } from "@angular/core";
import { CompetenceService } from "../../assets/services";

import * as models from "../../assets/models";

@Component({
  selector: "app-competence",
  templateUrl: "./competence.component.html",
  styleUrls: ["./competence.component.scss"],
})
export class CompetenceComponent implements OnInit {
  competences: models.Competence;

  constructor(private competenceService: CompetenceService) {}

  ngOnInit() {
    this.initCompetence();
  }

  initCompetence() {
    this.competences = this.competenceService.competence;
  }
}
