import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';

import { FillerLibraryComponent } from './filler-library.component';
import { TextInputHighlightModule } from 'angular-text-input-highlight';
 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NotificationComponent } from './notification/notification.component';
import { NotificationListComponent } from './notification-list/notification-list.component';


import { FormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';




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
    Ng2OrderModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  exports: [],
  declarations: [FillerLibraryComponent, NotificationComponent, NotificationListComponent],
  providers: [],
})
export class FillerLibraryModule {
}
