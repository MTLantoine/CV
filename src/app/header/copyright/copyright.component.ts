import { Component, OnInit, ViewChild } from "@angular/core";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-copyright",
  templateUrl: "./copyright.component.html",
  styleUrls: ["./copyright.component.scss"],
})
export class CopyrightComponent implements OnInit {
  @ViewChild("target", { static: true }) target;

  condition: boolean = false;

  constructor() {}

  ngOnInit() {
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
  }

  activate() {
    this.condition = utils.activate();
  }
}
