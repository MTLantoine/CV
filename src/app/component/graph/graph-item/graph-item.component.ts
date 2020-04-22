import { Component, OnInit, Input, ViewChild } from "@angular/core";
import * as utils from "../../../assets/utils";

@Component({
  selector: "app-graph-item",
  templateUrl: "./graph-item.component.html",
  styleUrls: ["./graph-item.component.scss"],
})
export class GraphItemComponent implements OnInit {
  @ViewChild("target", { static: true }) target;
  @Input() element;
  @Input() index;
  condition: boolean;
  private _isVisible: boolean;
  @Input() set isVisible(value: boolean) {
    this._isVisible = value;
    utils.isVisible(this, this._isVisible, true, this.activate);
  }

  i: number = 0;
  transitionDuration: number = 1500;

  constructor() {}

  ngOnInit() {}

  activate() {
    utils.waitXms(this, this.index / 3, this.changeCondition);
  }

  changeCondition() {
    this.target.nativeElement.style.width = this.element.level + "%";
    this.target.nativeElement.style.transition = this.transitionDuration + "ms";
    this.condition = utils.activate();
    utils.incNumber(
      this,
      0,
      this.element.level,
      this.transitionDuration,
      this.setNewPercent
    );
  }

  getThePercent() {
    return this.i + "%";
  }

  setNewPercent(newPercent: number) {
    this.i = newPercent;
  }
}
