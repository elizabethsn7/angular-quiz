import { NgModule } from "@angular/core";
import {
  // MatNativeDateModule,
  // MatSnackBarModule,
  // MatIconModule,
  // MatDialogModule,
  MatButtonModule,
  // MatTableModule,
  // MatPaginatorModule,
  // MatSortModule,
  // MatTabsModule,
  // MatCheckboxModule,
  MatCard,
  MatCardModule,
  MatFormField,
  MatFormFieldModule
  // MatProgressSpinnerModule,
  // MatInputModule
} from "@angular/material";
//import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRadioModule } from "@angular/material/radio";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
// import { MatSelectModule } from "@angular/material/select";
// import { MatSliderModule } from "@angular/material/slider";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  imports: [
    // MatTabsModule,
    MatDividerModule,
    // MatSliderModule,
    // MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatListModule,
    // MatNativeDateModule,
    //MatDatepickerModule,
    // MatSnackBarModule,
    // MatIconModule,
    // MatDialogModule,
    // MatProgressSpinnerModule,
    MatButtonModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    // MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule
    // MatProgressSpinnerModule,
    // MatInputModule,
    // MatPaginatorModule
  ],
  exports: [
    // MatTabsModule,
    MatDividerModule,
    // MatSliderModule,
    // MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    // MatNativeDateModule,
    // MatDatepickerModule,
    //MatSnackBarModule,
    // MatIconModule,
    // MatDialogModule,
    // MatProgressSpinnerModule,
    MatButtonModule,
    // MatSortModule,
    // MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
    // MatTableModule,
    // MatTabsModule,
    // MatFormFieldModule,
    // MatProgressSpinnerModule,
    // MatInputModule,
    // MatPaginatorModule
  ]
})
export class MyMaterialModule {}
