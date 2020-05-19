import { Component, OnInit } from "@angular/core";
import { AboutMeService } from "../../assets/services";

import * as models from "../../assets/models";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
  aboutMe: models.Text;

  constructor(private aboutMeService: AboutMeService) {}

  ngOnInit() {
    this.initAboutMe();
  }

  initAboutMe() {
    this.aboutMe = this.aboutMeService.aboutMe;
  }
}
