import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import {NotificationService } from '../shared/notification.service';

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

}
