import { Component, OnInit, Input } from "@angular/core";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.scss"],
})
export class BoxComponent implements OnInit {
  @Input() box;
  @Input() index;
  private _isVisible: boolean;
  @Input() set isVisible(value: boolean) {
    this._isVisible = value;
    utils.isVisible(this, this._isVisible, true, this.activate);
  }

  condition: boolean = false;

  constructor() {}

  ngOnInit() {}

  activate() {
    utils.waitXms(this, this.index, this.changeCondition);
  }

  changeCondition() {
    this.condition = utils.activate();
  }
}
