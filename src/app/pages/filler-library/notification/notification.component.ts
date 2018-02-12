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
 

  ngOnInit() {

    this.resetForm();
    this.notificationService.itemArray = this.notificationService.itemsInit;
  }

  // noti_EditList: Notification[];
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



// for order
  orderId: string = 'id';


  selectedDay : string = '';
  getId :string ='';
  selectChangeHandler(event){

    var i = 0;
   
    this.notificationService.itemArray.forEach(element => {
      
      if(element.name == event){
        this.notificationService.rightArray.push({id: element.id,name: element.name});
        this.notificationService.itemArray.splice(i, 1);
        return;
      }
      i ++;
    });
 

  }

  buttonChangeHandler(index){
    this.notificationService.itemArray.push(this.notificationService.rightArray[index]);
    this.notificationService.rightArray.splice(index, 1);
    this.sortLeft();
  }
  sortLeft(){
    this.notificationService.itemArray.sort((a: any, b: any) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  
  onSubmit(notificationForm: NgForm) {
    if (notificationForm.value.noti_ID == null){
      console.log('not null');
      
      this.notificationService.insertNotification(notificationForm.value,this.notificationService.rightArray);

    }
    else{
      console.log('null');
     
      this.notificationService.updateNotification(notificationForm.value,this.notificationService.rightArray);

    }
    this.resetForm(notificationForm);
    this.tostr.success('Succcess');
  }

  resetForm(notificationForm?: NgForm) {
    if (notificationForm != null)
      notificationForm.reset();
      this.notificationService.rightArray=[];
      this.notificationService.itemArray = [
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
  }


  resetEditForm() {
    console.log('reset');
    this.notificationService.selectedNotification = {
      noti_ID: this.notificationService.temp.noti_ID,
      title: this.notificationService.temp.title,
      body: this.notificationService.temp.body,
      deeplink:this.notificationService.temp.deeplink,
      Customer_Segment_ID: this.notificationService.temp.Customer_Segment_ID,
    }
  }



}
