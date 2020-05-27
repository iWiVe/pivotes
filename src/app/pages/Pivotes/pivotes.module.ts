import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotesComponent } from './pivotes.component';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortablejsModule } from 'ngx-sortablejs';
import { PivotViewModule, PivotViewAllModule, PivotFieldListAllModule, GroupingBarService, FieldListService } from '@syncfusion/ej2-angular-pivotview';

// FLEXMONSTER
import { FlexmonsterPivotModule } from 'ng-flexmonster';
// DEVEXPRESS
import { DxButtonModule, DxPivotGridModule  } from 'devextreme-angular';


@NgModule({
  declarations: [PivotesComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FontAwesomeModule,
    SortablejsModule,
    //SYNFUSION
    PivotViewModule,
    PivotViewAllModule,
    PivotFieldListAllModule,
    // DEVEXPRESS
    DxButtonModule,
    DxPivotGridModule,
    // FLEXMONSTER
    FlexmonsterPivotModule,
    
    RouterModule.forChild([
      {path: '', component: PivotesComponent}
    ]),
  ],
  providers: [
    GroupingBarService,
    FieldListService,
  ]
})
export class PivotesModule { }
