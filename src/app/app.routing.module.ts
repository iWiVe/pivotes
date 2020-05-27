import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>  import('./pages/pivotes/pivotes.module').then(m => m.PivotesModule)
        // path: '',
        
        // children: [
        //     {
                
        //         path: 'pivotes',
        //         loadChildren: () =>  import('./pages/pivotes/pivotes.module').then(m => m.PivotesModule)
        //     },

        // ]
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }