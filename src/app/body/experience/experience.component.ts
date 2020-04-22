import { Component, OnInit } from "@angular/core";
import { ExperienceService } from "src/app/assets/services";

import * as models from "../../assets/models";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
  experiences: models.Experience;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.initExperience();
  }

  initExperience() {
    this.experiences = this.experienceService.experience;
  }
}
