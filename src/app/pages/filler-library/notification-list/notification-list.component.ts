import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import {NotificationService } from '../shared/notification.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  constructor(private notificationService: NotificationService, private tostr: ToastrService) { }

  ngOnInit() {
  }

}
