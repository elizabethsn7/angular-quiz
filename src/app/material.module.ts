import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from "@angular/material";
import { MatRadioModule } from "@angular/material/radio";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  imports: [
    MatDividerModule,
    MatRadioModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports: [
    MatDividerModule,
    MatRadioModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class MyMaterialModule {}
