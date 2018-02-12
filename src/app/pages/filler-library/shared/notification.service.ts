import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Notification} from './notification.model';

@Injectable()
export class NotificationService {

  notificationList: AngularFireList<any> ;
  selectedNotification: Notification = new Notification();
  temp: Notification = new Notification();
  rightArray: any = [];
  itemArray : any =[];
  tempItemArray : any =[];
  tempRightArray : any =[];
  itemsInit = [
    {id:1,name:'Normacjk'},
    {id:2,name:'Inspiring'},
    {id:3,name:'Extraordinary'},
    {id:4,name:'Successfully accomplished'},
    {id:5,name:'Unsuccessfull'},
    {id:6,name:'Trending'},
    {id:7,name:'Over Anticipated'},
    {id:8,name:'Normally Existed.'},
    {id:9,name:'item1'},
    {id:10,name:'item2'},
    {id:11,name:'item3'},
    {id:12,name:'item4'},
    {id:13,name:'item5'},
  ];
  constructor(private firebase :AngularFireDatabase) { }
  
  getData(){
    this.notificationList = this.firebase.list('notifications');
    return this.notificationList;
  }

  insertNotification(notification : Notification,arr)
  {
    this.getData();
    if(!notification.deeplink){
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
   
    if(!notification.deeplink){
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
