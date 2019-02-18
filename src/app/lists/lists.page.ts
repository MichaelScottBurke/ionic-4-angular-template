import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  plans = [
    {
    name: 'Aetna',
    status: 'active',

    },
        {
    name: 'Blue Cross & Blue Shield',
    status: 'inactive',

    },
        {
    name: 'CIGNA',
    status: 'active',

    },
  ]

  requests = [
    {
      date: 'Dec 18-21, 2018',
      hours: '24 hrs',
      plan: 'Vacation',
      status: 'Pending approval',
      received: 'Apr 1'
    },
    {
      date: 'Feb 14, 2019',
      hours: '8 hrs',
      plan: 'Sick day',
      status: 'Approved',
      received: 'Mar 15'
    },
    {
      date: 'May 21-24, 2019',
      hours: '32 hrs',
      plan: 'Vacation',
      status: 'Taken',
      received: 'Feb 2'
    }
  ];

  persons = [
     {
      id: 3796,
      name: 'Aaron Barnes', 
      job: 'Claims Adjuster', 
      photo: 'https://pbs.twimg.com/profile_images/1016642223591645184/RUmh_20X.jpg',
      checked: true
    },
     {
       id: 4129,
       name: 'Bonnie Caldwell', 
       job: 'Claims Manager', 
       photo: 'https://randomuser.me/api/portraits/women/65.jpg',
       checked: false
      },
     {
       id: 2112,
       name: 'Calvin Davis', 
       job: 'Sr. Claims Representative', 
       photo: 'https://pbs.twimg.com/profile_images/786914171422142469/l1qF9oeF.jpg',
       checked: false
      }     
   ];

    items = [ 
      {
      icon: 'security',
      color: '',
      name: 'Security', 
      subtitle: 'We keep your account protected', 
      description: 'The Security Checkup gives you personalized recommendations to secure your account',
      date: '4 hours ago'
    },
    {
      icon: 'lock',
      color: '',
      name: 'Password', 
      subtitle: 'Signing in to the app', 
      description: '2-step verification: on',
      date: '4 hours ago'
    },
    {
      icon: 'alarm',
      color: '',
      name: 'Notifications',  
      subtitle: 'Allow or block notifications', 
      description: 'All notifications: on',
      date: 'Apr 3'
    }
  ];

  messages = [
    {
      dateReceived: "Yesterday",
      from: "Suzanne Veng",
      subject: "Re: Introduction",
      message: "Hi Courtney, it's amazing to have you on the team. If there's anything I can do to help you get situated, please let me know.",
      avatar: "https://d3iw72m71ie81c.cloudfront.net/female-52.jpg"
    }, {
      dateReceived: "Tuesday",
      from: "Max Restrepo",
      subject: "Re: Allian Healthcare Account",
      message: "Thanks Courtney, I'll follow up with Brian Morton to see when to schedule a conventient status call",
      avatar: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
    }, {
      dateReceived: "Dec 3",
      from: "Ethan Pilbury",
      subject: "Re: Anti virus software",
      message: "Hey Courtney, your McCaffee installation should be up-to-date, if you experience any more issues, let me know.",
      avatar: "https://pbs.twimg.com/profile_images/951055655594545153/F6eybr-i.jpg"
    }
]

  constructor() { }

  ngOnInit() {
  }

}
