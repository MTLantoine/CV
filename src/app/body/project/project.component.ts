import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/assets/services";

import * as models from "../../assets/models";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  projects: models.Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.initProject();
  }

  initProject() {
    this.projects = this.projectService.project;
  }
}
