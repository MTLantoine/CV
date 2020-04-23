import { Component, OnInit } from "@angular/core";
import { IntroService } from "../../assets/services";

import * as models from "../../assets/models";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit {
  intro: models.Text;

  constructor(private introService: IntroService) {}

  ngOnInit() {
    this.initIntro();
  }

  initIntro() {
    this.intro = this.introService.intro;
  }
}
