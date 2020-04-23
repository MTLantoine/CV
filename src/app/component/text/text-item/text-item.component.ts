import { Component, OnInit, Input } from "@angular/core";
import * as utils from "../../../assets/utils";

@Component({
  selector: "app-text-item",
  templateUrl: "./text-item.component.html",
  styleUrls: ["./text-item.component.scss"],
})
export class TextItemComponent implements OnInit {
  @Input() text;
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
