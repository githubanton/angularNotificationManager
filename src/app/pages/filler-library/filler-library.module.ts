import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';

import { FillerLibraryComponent } from './filler-library.component';
import { TextInputHighlightModule } from 'angular-text-input-highlight';
 
import { Ng2OrderModule } from 'ng2-order-pipe';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FillerLibraryComponent,
      },
    ]),
    ThemeModule,
    TextInputHighlightModule,
    Ng2OrderModule
  ],
  exports: [],
  declarations: [FillerLibraryComponent],
  providers: [],
})
export class FillerLibraryModule {
}
