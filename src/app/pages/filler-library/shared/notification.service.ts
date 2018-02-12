import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Notification} from './notification.model';

@Injectable()
export class NotificationService {

  notificationList: AngularFireList<any> ;
  selectedNotification: Notification = new Notification();
  temp: Notification = new Notification();
  rightArray: any = [];
  itemsArray:any = [];
  constructor(private firebase :AngularFireDatabase) { }
  
  getData(){
    this.notificationList = this.firebase.list('notifications');
    return this.notificationList;
  }

  insertNotification(notification : Notification,arr)
  {
    this.getData();
    if(notification.deeplink){
      this.notificationList.push({
        title: notification.title,
        body: notification.body,
        deeplink: '',
        Customer_Segment_ID: arr
      });
    }
    else{
      this.notificationList.push({
        title: notification.title,
        body: notification.body,
        deeplink: notification.deeplink,
        Customer_Segment_ID: arr
      });
    }
    
    
  }

  updateNotification(notification : Notification,arr){

    if(notification.deeplink){
      this.notificationList.update(notification.noti_ID,
        {
          title: notification.title,
          body: notification.body,
          deeplink: '',
          Customer_Segment_ID: arr
        });
    }
    else{
      this.notificationList.update(notification.noti_ID,
        {
          title: notification.title,
          body: notification.body,
          deeplink: notification.deeplink,
          Customer_Segment_ID: arr
        });
    }
  }

  deleteNotification(noti_ID : string){
    this.notificationList.remove(noti_ID);

  }


}
