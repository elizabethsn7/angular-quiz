// For the results component to function as you would like, it needs to accept the answers the user has provided and nothing else

import { Component, Input } from "@angular/core";
import { Answers } from "../quiz.model";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent {
  @Input() answers: Answers;
}
