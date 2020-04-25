import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"],
  host: {
    "(window:resize)": "onResize($event)",
  },
})
export class NotFoundComponent implements OnInit {
  windowHeight: number;

  constructor() {}

  ngOnInit() {
    this.windowHeight = window.innerHeight - 40;
  }

  onResize(event) {
    this.windowHeight = event.target.innerHeight - 40;
  }
}
