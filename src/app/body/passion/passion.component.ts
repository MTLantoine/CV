import { Component, OnInit, ViewChild } from "@angular/core";
import { PassionService } from "src/app/assets/services";

import * as models from "../../assets/models";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-passion",
  templateUrl: "./passion.component.html",
  styleUrls: ["./passion.component.scss"],
})
export class PassionComponent implements OnInit {
  @ViewChild("target", { static: true }) target;

  passions: models.Passion;
  isVisible: boolean = false;

  constructor(private passionService: PassionService) {}

  ngOnInit() {
    this.initPassion();
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
  }

  initPassion() {
    this.passions = this.passionService.passion;
  }

  activate() {
    this.isVisible = utils.activate();
  }
}
