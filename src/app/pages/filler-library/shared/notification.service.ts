import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Notification} from './notification.model';

@Injectable()
export class NotificationService {

  notificationList: AngularFireList<any> ;
  selectedNotification: Notification = new Notification();

  constructor(private firebase :AngularFireDatabase) { }

  getData(){
    this.notificationList = this.firebase.list('notifications');
    return this.notificationList;
  }

  insertNotification(notification : Notification,arr)
  {
    this.getData();
    this.notificationList.push({
      title: notification.title,
      body: notification.body,
      deeplink: notification.deeplink,
      Customer_Segment_ID: arr
    });
  }

  updateNotification(notification : Notification,arr){
    this.notificationList.update(notification.noti_ID,
      {
        title: notification.title,
        body: notification.body,
        deeplink: notification.deeplink,
        Customer_Segment_ID: arr
      });
  }

  deleteNotification(noti_ID : string){
    this.notificationList.remove(noti_ID);
  }


}