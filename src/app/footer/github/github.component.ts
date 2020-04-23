import { Component, OnInit } from "@angular/core";
import { GithubService } from "src/app/assets/services";

import * as models from "../../assets/models";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.scss"],
})
export class GithubComponent implements OnInit {
  github: models.Text;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.initGithubText();
  }

  initGithubText() {
    this.github = this.githubService.github;
  }
}
