import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/assets/services";
import { ActivatedRoute, Router } from "@angular/router";

import * as models from "../../assets/models";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-project-view",
  templateUrl: "./project-view.component.html",
  styleUrls: ["./project-view.component.scss"],
})
export class ProjectViewComponent implements OnInit {
  path: string;
  project: models.OneProject;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPath();
  }

  getPath() {
    this.path = this.route.snapshot.params["path"];
    this.project = utils.getProjectByPath(this.path, this.projectService);
    if (this.project === null) {
      this.project = new models.OneProject(null, null);
      this.router.navigate(["/404"]);
    }
  }
}
