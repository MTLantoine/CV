import { Component, OnInit, ViewChild } from "@angular/core";
import { IntroService } from "../../assets/services";

import * as models from "../../assets/models";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit {
  @ViewChild("target", { static: true }) target;

  intro: models.Text;
  isVisible: boolean = false;
  nbrItems: number;

  constructor(private introService: IntroService) {}

  ngOnInit() {
    this.initIntro();
    this.nbrItems = this.intro.text.length;
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
  }

  initIntro() {
    this.intro = this.introService.intro;
  }

  activate() {
    this.isVisible = utils.activate();
  }
}
