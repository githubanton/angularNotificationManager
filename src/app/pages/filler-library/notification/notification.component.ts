import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import {NotificationService } from '../shared/notification.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService, private tostr: ToastrService) { }

  tags = [
    {
      color: 'danger',
      name: 'Category 1',
    },
    {
      color: 'success',
      name: 'Category 2',
    },
    {
      color: 'primary',
      name: 'Category 3',
    },
    {
      color: 'info',
      name: 'Category 4',
    },
    {
      color: 'yellow',
      name: 'Category 5',
    },
  ];
  taggedWords = [];
  taggedTitleWords = [];
  text = '';
  field = '';
  start = 0;
  end = 0;


  
  items = [
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
    // {id:14,name:'item6'},
    // {id:15,name:'item7'},
    // {id:16,name:'item8'},

  ];

  orderId: string = 'id';

  rightArray =[];
  selectedDay : string = '';
  getId :string ='';
  selectChangeHandler(event){

    var i = 0;
   
    this.items.forEach(element => {
      
      if(element.name == event){
        this.rightArray.push({id: element.id,name: element.name});
        this.items.splice(i, 1);
        return;
      }
      i ++;
    });
 

  }

  buttonChangeHandler(index){
    this.items.push(this.rightArray[index]);
    this.rightArray.splice(index, 1);
    this.sortLeft();
  }
  sortLeft(){
    this.items.sort((a: any, b: any) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  ngOnInit() {

    this.resetForm();
  }

  onSubmit(notificationForm: NgForm) {
    if (notificationForm.value.noti_ID == null)
      this.notificationService.insertNotification(notificationForm.value,this.rightArray);
    else
      this.notificationService.updateNotification(notificationForm.value,this.rightArray);
    this.resetForm(notificationForm);
    this.tostr.success('Succcess');
  }

  resetForm(notificationForm?: NgForm) {
    if (notificationForm != null)
      notificationForm.reset();
    this.notificationService.selectedNotification = {
      noti_ID: null,
      title: '',
      body: '',
      deeplink: '',
      Customer_Segment_ID: 0,
    }
  }



}
