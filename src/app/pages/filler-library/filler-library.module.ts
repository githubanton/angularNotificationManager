import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';

import { FillerLibraryComponent } from './filler-library.component';
import { TextInputHighlightModule } from 'angular-text-input-highlight';

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
  ],
  exports: [],
  declarations: [FillerLibraryComponent],
  providers: [],
})
export class FillerLibraryModule {
}
