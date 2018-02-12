import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { NotificationService } from '../shared/notification.service';

import { Notification } from '../shared/notification.model';

import { ToastrService } from 'ngx-toastr';


 
@Component({
  selector: 'notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {


  noti_List: Notification[];
  constructor(private notificationService: NotificationService, private tostr: ToastrService) { }
  
  ngOnInit() {
    var x = this.notificationService.getData();
    x.snapshotChanges().subscribe(item => {
      this.noti_List = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        console.log(element.key);
        y["noti_ID"] = element.key;
        this.noti_List.push(y as Notification);
      });
    });
  }

  onEdit(noti: Notification) {
    this.notificationService.selectedNotification = Object.assign({}, noti);
    let tempCustomerId = [];

    if(this.notificationService.selectedNotification.Customer_Segment_ID){

        for(let i=0;;i++)
        {
          if(this.notificationService.selectedNotification.Customer_Segment_ID[i] != undefined)
          tempCustomerId.push(this.notificationService.selectedNotification.Customer_Segment_ID[i]);
          else
            break;
        }

        this.notificationService.selectedNotification.Customer_Segment_ID = tempCustomerId;
    }
    else{
        this.notificationService.selectedNotification.Customer_Segment_ID = [];
    }
    
    this.notificationService.temp = this.notificationService.selectedNotification;
    this.notificationService.rightArray = this.notificationService.selectedNotification.Customer_Segment_ID;
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this notification ?') == true) {
      this.notificationService.deleteNotification(key);
      this.notificationService.selectedNotification = {
        noti_ID: null,
        title: '',
        body: '',
        deeplink: '',
        Customer_Segment_ID: '',
      }
      this.notificationService.temp = {
        noti_ID: null,
        title: '',
        body: '',
        deeplink: '',
        Customer_Segment_ID: '',
      }
      this.tostr.warning("Deleted Successfully", "Success");
    }
  }

}
