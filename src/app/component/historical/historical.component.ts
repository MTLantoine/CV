import { Component, OnInit, ViewChild, Input } from "@angular/core";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-historical",
  templateUrl: "./historical.component.html",
  styleUrls: ["./historical.component.scss"],
})
export class HistoricalComponent implements OnInit {
  @ViewChild("target", { static: true }) target;
  @Input() elements;

  newElements;
  isVisible: boolean = false;

  constructor() {}

  ngOnInit() {
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
    this.sortDates();
  }

  activate() {
    this.isVisible = utils.activate();
  }

  sortDates() {
    this.newElements = utils.sortDates(this.elements);
  }
}
