import { Component, OnInit, Input, ViewChild } from "@angular/core";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.scss"],
})
export class GraphComponent implements OnInit {
  @ViewChild("target", { static: true }) target;
  @Input() elements;
  @Input() side = "left";

  isVisible: boolean = false;

  constructor() {}

  ngOnInit() {
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
  }

  activate() {
    this.isVisible = utils.activate();
  }
}
