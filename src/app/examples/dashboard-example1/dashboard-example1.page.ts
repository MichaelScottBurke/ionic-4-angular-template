import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { EmployeesData } from '../../../providers/employees';

@Component({
  selector: 'app-dashboard-example1',
  templateUrl: './dashboard-example1.page.html',
  styleUrls: ['./dashboard-example1.page.scss'],
})
export class DashboardExample1Page implements OnInit {

  //employees = EmployeesData;
  today: number = Date.now();

  shortcuts = [
    {
      label: 'Pay',
      img: '../assets/images/shortcuts/pay-lg.svg'
    },
    {
      label: 'Schedule',
      img: '../assets/images/shortcuts/schedule-lg.svg'
    },
    {
      label: 'Time off',
      img: '../assets/images/shortcuts/time-off-lg.svg'
    },
    {
      label: 'Time clock',
      img: '../assets/images/shortcuts/directory-lg.svg'
    },
    {
      label: 'Directory',
      img: '../assets/images/shortcuts/directory-lg.svg'
    },
    {
      label: 'Goals',
      img: '../assets/images/shortcuts/goals-lg.svg'
    },
    {
      label: 'Competencies',
      img: '../assets/images/shortcuts/competencies-lg.svg'
    },
    {
      label: 'Notes',
      img: '../assets/images/shortcuts/notes-lg.svg'
    },
    {
      label: 'Settings',
      img: '../assets/images/shortcuts/settings-lg.svg'
    }
  ];
  
  employees = [
    {
      id: 3121,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/aaronalfred/128.jpg',
      name: 'Aaron Carter',
      job: 'Fraud Specialist',
      location: 'San Diego'
    },
    {
     id: 3122,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/benpeck/128.jpg',
      name: 'Aaron Frazier',
      job: 'Claims Specialist',
       location: 'Los Angeles'
    },
    {
        id: 3124,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/chik/128.jpg',
        name: 'Adam Carter',
        job: 'Sr. Claims Adjuster',
        location: 'Seattle'
    },
    {
      id: 3125,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg',
      name: 'Adam Torres',
      job: 'Administrative Assistant',
       location: 'Seattle'
    },
    {
      id: 3126,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sammmer/128.jpg',
      name: 'Alex Housani',
      job: 'Claims Adjuster',
       location: 'San Diego'
    },
    {
      id: 3127,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/eliebercero/128.jpg',
      name: 'Alice Cabrera',
      job: 'Sr. Claims Adjuster',
       location: 'Los Angeles'
    },
    {
      id: 3128,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/yuanwang1/128.jpg',
      name: 'Alice Ying',
      job: 'Claims Adjuster',
      location: 'Seattle'
    },
    {
      id: 3129,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/muchanis/128.jpg',
      name: 'Amit Ramirez',
      job: 'Claims Adjuster',
       location: 'Los Angeles'
    },
    {
      id: 31210,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      name: 'Amanda Cole',
      job: 'Claims Clerk',
      location: 'Seattle'
    },
    {
      id: 31211,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/alentodorov/128.jpg',
      name: 'Amir Calvo',
      job: 'Sr. Claims Adjuster',
       location: 'Los Angeles'
    },
    {
      id: 31212,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/greeninkstudio/128.jpg',
      name: 'Andrea Kudo',
      job: 'Administrative Assistant',
       location: 'Seattle'
    },
    {
      id: 31213,
        avatar: 'https://pbs.twimg.com/profile_images/584098247641300992/N25WgvW_.png',
      name: 'Andrew Carpenter',
      job: 'Claims Specialist',
       location: 'San Diego'
    },
    {
      id: 31214,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/alexhaniotis/128.jpg',
      name: 'Andrew Elliott',
      job: 'Catastrophe Claims Specialist',
       location: 'Seattle'
    },
    {
      id: 31215,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/tolgaergin/128.jpg',
      name: 'Andrew Tolger',
      job: 'Claims Specialist',
       location: 'Seattle'
    },
    {
      id: 31216,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/janezhu/128.jpg',
      name: 'Angela Hu',
      job: 'Claims Clerk',
       location: 'Los Angeles'
    },
    {
      id: 31217,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stylecampaign/128.jpg',
      name: 'Angela Kennedy',
      job: 'Fraud Specialist',
       location: 'Seattle'
    },
    {
      id: 31218,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jennyshen/128.jpg',
      name: 'Angela Wu',
      job: 'Sr. Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 31219,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/irenetrn/128.jpg',
      name: 'Anna Maison',
      job: 'Claims Manager',
       location: 'Seattle'
    },
    {
      id: 31220,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nettatheninja/128.jpg',
      name: 'Anna Davis',
      job: 'Claims Clerk',
       location: 'Seattle'
    },
    {
      id: 31221,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/yuanwang1/128.jpg',
      name: 'Anna Rose',
      job: 'Administrative Assistant',
       location: 'San Diego'
    },
    {
      id: 31222,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
      name: 'Annie Butler',
      job: 'Claims Manager',
       location: 'Seattle'
    },
    {
      id: 31223,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/latinaheadshot/128.jpg',
      name: 'Annie Castillo',
      job: 'Fraud Specialist',
       location: 'Seattle'
    },
    {
      id: 31224,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/chelseaisbeta/128.jpg',
      name: 'Annie Ramos',
      job: 'Sr. Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 31225,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/imranomari/128.jpg',
      name: 'Arthur Romani',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/katiadejuan/128.jpg',
      name: 'Ashley Carroll',
      job: 'Catastrophe Claims Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/loschinin/128.jpg',
      name: 'Benjamin Lawson',
      job: 'Claims Clerk',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/davidmartinez/128.jpg',
      name: 'Bert Chavez',
      job: 'Fraud Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/katiadejuan/128.jpg',
      name: 'Beverly Juan',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sadjad/128.jpg',
      name: 'Bobby Haddad',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kathleenkrucoff/128.jpg',
      name: 'Bonnie Wysneski',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/_diogorodrigues/128.jpg',
      name: 'Brandon Rodrigues',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kaniasty/128.jpg',
      name: 'Brenda Carroll',
      job: 'Fraud Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/lady_katherine/128.jpg',
      name: 'Brenda Gibson',
      job: 'Sr. Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/xtinacousins/128.jpg',
      name: 'Brenda Williams',
      job: 'Claims Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/abogawat/128.jpg',
      name: 'Bruce Gawat',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/damian_kidd/128.jpg',
      name: 'Carl Fox',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/godza/128.jpg',
      name: 'Carlos Morales',
      job: 'Claims Manager',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brajeshwar/128.jpg',
      name: 'Carlo Anwar',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg',
      name: 'Carolyn Wong',
      job: 'Claims Clerk',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/wintopia/128.jpg',
      name: 'Catherine Alvarez',
      job: 'Claims Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      name: 'Kaity Yi',
      job: 'Sr. Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/tonylstewart/128.jpg',
      name: 'Charles Crawford',
      job: 'Claims Clerk',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/uxceo/128.jpg',
      name: 'Cheryl Angola',
      job: 'Claims Manager',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      name: 'Chloe Park',
      job: 'Claims Clerk',
       location: 'San Diego'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/hfactor/128.jpg',
      name: 'Chris Armitage',
      job: 'Claims Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/edwellbrook/128.jpg',
      name: 'Chris Phillips',
      job: 'Claims Clerk',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/taylorling/128.jpg',
      name: 'Christian Ling',
      job: 'Fraud Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
      name: 'Christine Duncan',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
      name: 'Christine Mendoza',
      job: 'Claims Clerk',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/lettershoppe/128.jpg',
      name: 'Christine Wallace',
      job: 'Sr. Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://pbs.twimg.com/profile_images/950813895291297794/IAUhzxPw.jpg',
      name: 'Clarence Brooks',
      job: 'Sr. Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/legros__/128.jpg',
      name: 'Clarence Graham',
      job: 'Fraud Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://randomuser.me/api/portraits/men/90.jpg',
      name: 'Clarence Lee',
      job: 'Claims Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/cwilk/128.jpg',
      name: 'Craig Murphy',
      job: 'Sr. Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/alexhaniotis/128.jpg',
      name: 'Daniel Cooper',
      job: 'Claims Clerk',
       location: 'San Diego'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/udezekene/128.jpg',
      name: 'David Zeken',
      job: 'Claims Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/lady_katherine/128.jpg',
      name: 'Debra Burton',
      job: 'Claims Clerk',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/chanpory/128.jpg',
      name: 'Douglas Kim',
      job: 'Fraud Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brownday/128.jpg',
      name: 'Eric Fernandez',
      job: 'Sr. Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/fabiantxt/128.jpg',
      name: 'Eugene Ortiz',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ricardosbarbosa/128.jpg',
      name: 'Fred Ruiz',
      job: 'Claims Adjuster',
       location: 'San Diego'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
      name: 'Heather Bailey',
      job: 'Claims Clerk',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/wintopia/128.jpg',
      name: 'Irina Lane',
      job: 'Sr. Claims Adjuster',
       location: 'San Diego'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/esthercrawford/128.jpg',
      name: 'Jackie Taylor',
      job: 'Claims Manager',
       location: 'San Diego'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ramikh81/128.jpg',
      name: 'James Berry',
      job: 'Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/boheme/128.jpg',
      name: 'Jason Moore',
      job: 'Claims Manager',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/legros__/128.jpg',
      name: 'Jeffrey Davis',
      job: 'Sr. Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/moizsyed/128.jpg',
      name: 'Jeremy Mendes',
      job: 'Claims Adjuster',
       location: 'San Diego'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/fitehal/128.jpg',
      name: 'Johnny Saru',
      job: 'Claims Clerk',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/itsjonq/128.jpg',
      name: 'Jonathan Hong',
      job: 'Sr. Claims Adjuster',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/justinrhee/128.jpg',
      name: 'Justin Lee',
      job: 'Catastrophe Claims Specialist',
       location: 'San Diego'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/cubanheat/128.jpg',
      name: 'Lizabeth Cardenas',
      job: 'Sr. Claims Adjuster',
       location: 'San Diego'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcofrassonweb/128.jpg',
      name: 'Marco Rinaldi',
      job: 'Claims Manager',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mariliafrrr/128.jpg',
      name: 'Maria Gomez',
      job: 'Claims Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/_arashasghari/128.jpg',
      name: 'Nicholai Chavez',
      job: 'Claims Specialist',
       location: 'Seattle'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ooomz/128.jpg',
      name: 'Roshan Ganesh',
      job: 'Sr. Claims Adjuster',
       location: 'San Diego'
    },
    {
      id: 3123,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/himanshuchanda/128.jpg',
      name: 'Tarun Verma',
      job: 'Claims Specialist',
       location: 'San Diego'
    }
   ];

  constructor(public menuCtrl: MenuController) {
    //constructor(public menuCtrl: MenuController,public dataService: EmployeesData) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

}
