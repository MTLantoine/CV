import { Component, OnInit, Input, ViewChild } from "@angular/core";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"],
})
export class TitleComponent implements OnInit {
  @ViewChild("target", { static: true }) target;
  @Input() title;
  @Input() side = "left";

  condition: boolean;

  constructor() {}

  ngOnInit() {
    this.turnToRelative();
    utils.ifVisible(this, this.target.nativeElement, 40, this.activate);
  }

  turnToRelative() {
    this.target.nativeElement.closest("section > div").style.position =
      "relative";
  }

  activate() {
    this.condition = utils.activate();
  }
}
