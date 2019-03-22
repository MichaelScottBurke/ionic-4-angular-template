import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import {  MenuController, AlertController, ToastController,  ModalController } from '@ionic/angular';
import { RouterStateSnapshot } from '@angular/router';
import {
    CalendarModal,
    CalendarModalOptions,
    DayConfig,
    CalendarResult
  } from 'ion2-calendar';
  import { async } from 'q';


@Component({
  selector: 'app-form-example-two',
  templateUrl: './form-example-two.page.html',
  styleUrls: ['./form-example-two.page.scss'],
})
export class FormExampleTwoPage  implements OnInit {

  differentAddressToggleTrue = true;
  differentAddressToggle:boolean = true;
  
  toggleAddress() {
     if (this.differentAddressToggle==true)
     {
      this.differentAddressToggle = false;
     }
     else {
      this.differentAddressToggle = true;
    }
  }
  
  lists = [
      {
          value: 'a',
          name: 'AAA'
      },
      {
          value: 'b',
          name: 'BBB'
      },
      {
          value: 'c',
          name: 'CCC'
      }
  ]
  
    states = [
      {
          name: 'Alabama',
          value: 'AL'
      },
      {
          name: 'Alaska',
          value: 'AK'
      },
      {
          name: 'American Samoa',
          value: 'AS'
      },
      {
          name: 'Arizona',
          value: 'AZ'
      },
      {
          name: 'Arkansas',
          value: 'AR'
      },
      {
          name: 'California',
          value: 'CA'
      },
      {
          name: 'Colorado',
          value: 'CO'
      },
      {
          name: 'Connecticut',
          value: 'CT'
      },
      {
          name: 'Delaware',
          value: 'DE'
      },
      {
          name: 'District Of Columbia',
          value: 'DC'
      },
      {
          name: 'Federated States Of Micronesia',
          value: 'FM'
      },
      {
          name: 'Florida',
          value: 'FL'
      },
      {
          name: 'Georgia',
          value: 'GA'
      },
      {
          name: 'Guam',
          value: 'GU'
      },
      {
          name: 'Hawaii',
          value: 'HI'
      },
      {
          name: 'Idaho',
          value: 'ID'
      },
      {
          name: 'Illinois',
          value: 'IL'
      },
      {
          name: 'Indiana',
          value: 'IN'
      },
      {
          name: 'Iowa',
          value: 'IA'
      },
      {
          name: 'Kansas',
          value: 'KS'
      },
      {
          name: 'Kentucky',
          value: 'KY'
      },
      {
          name: 'Louisiana',
          value: 'LA'
      },
      {
          name: 'Maine',
          value: 'ME'
      },
      {
          name: 'Marshall Islands',
          value: 'MH'
      },
      {
          name: 'Maryland',
          value: 'MD'
      },
      {
          name: 'Massachusetts',
          value: 'MA'
      },
      {
          name: 'Michigan',
          value: 'MI'
      },
      {
          name: 'Minnesota',
          value: 'MN'
      },
      {
          name: 'Mississippi',
          value: 'MS'
      },
      {
          name: 'Missouri',
          value: 'MO'
      },
      {
          name: 'Montana',
          value: 'MT'
      },
      {
          name: 'Nebraska',
          value: 'NE'
      },
      {
          name: 'Nevada',
          value: 'NV'
      },
      {
          name: 'New Hampshire',
          value: 'NH'
      },
      {
          name: 'New Jersey',
          value: 'NJ'
      },
      {
          name: 'New Mexico',
          value: 'NM'
      },
      {
          name: 'New York',
          value: 'NY'
      },
      {
          name: 'North Carolina',
          value: 'NC'
      },
      {
          name: 'North Dakota',
          value: 'ND'
      },
      {
          name: 'Northern Mariana Islands',
          value: 'MP'
      },
      {
          name: 'Ohio',
          value: 'OH'
      },
      {
          name: 'Oklahoma',
          value: 'OK'
      },
      {
          name: 'Oregon',
          value: 'OR'
      },
      {
          name: 'Palau',
          value: 'PW'
      },
      {
          name: 'Pennsylvania',
          value: 'PA'
      },
      {
          name: 'Puerto Rico',
          value: 'PR'
      },
      {
          name: 'Rhode Island',
          value: 'RI'
      },
      {
          name: 'South Carolina',
          value: 'SC'
      },
      {
          name: 'South Dakota',
          value: 'SD'
      },
      {
          name: 'Tennessee',
          value: 'TN'
      },
      {
          name: 'Texas',
          value: 'TX'
      },
      {
          name: 'Utah',
          value: 'UT'
      },
      {
          name: 'Vermont',
          value: 'VT'
      },
      {
          name: 'Virgin Islands',
          value: 'VI'
      },
      {
          name: 'Virginia',
          value: 'VA'
      },
      {
          name: 'Washington',
          value: 'WA'
      },
      {
          name: 'West Virginia',
          value: 'WV'
      },
      {
          name: 'Wisconsin',
          value: 'WI'
      },
      {
          name: 'Wyoming',
          value: 'WY'
      }
     ];
  
     plans = [
      {name: 'Vacation plan', value: 'vt'},
      {name: 'Sick plan', value: 'st'},
      {name: 'Bereavement plan', value: 'bt'},
      {name: 'Comp plan', value: 'ct'}
     ];
  
     ptoPlan: any = 'vt';
     state: any = 'MD';
     contactState: any = 'MD';
     ptoComments: any = '';
  
     constructor(public modalCtrl: ModalController, public menuCtrl: MenuController, public alertController: AlertController, public toastController: ToastController, ) {
      this.menuCtrl.enable(false);
     }
  
  
    async openCalendar() {
      const options: CalendarModalOptions = {
        pickMode: 'range',
        title: 'Start and end dates',
        //color: 'secondary',
        closeIcon: true,
        doneLabel: 'save'
      };
    
      const myCalendar = await this.modalCtrl.create({
        component: CalendarModal,
        componentProps: { options }
      });
    
      myCalendar.present();
    
      const event: any = await myCalendar.onDidDismiss();
      const date = event.data;
      const from: CalendarResult = date.from;
      const to: CalendarResult = date.to;
    
      console.log(date, from, to);
    }
  
    ngOnInit() {
    }
  
    async presentCancelAlert() {
      const alert = await this.alertController.create({
        header: 'Discard edits?',
        //subHeader: 'Subtitle',
        message: 'You have unsaved edits. Are you sure you want to discard them?',
        buttons: ['Cancel', 'Discard']
      });
  
      await alert.present();
    }
  
    async presentDeleteAlert() {
      const alert = await this.alertController.create({
      header: 'Delete this company?',
      //subHeader: 'Subtitle',
      message: 'Deleting will permanently remove this company?.',
      buttons: ['Cancel', 'Delete']
    });
  
      await alert.present();
    }
  
    async successToast() {
      const toast = await this.toastController.create({
        message: 'Your edits have been saved.',
        showCloseButton: false,
        position: 'bottom',
        duration: 5000,
        animated: true
        //closeButtonText: 'Done'
      });
      toast.present();
    }
  
    onSubmit(companyInfoForm: NgForm): void {
      let formControls = companyInfoForm.controls;
      if(formControls.firstName.dirty) {
        console.log("It's dirty");
      }
      else {
        console.log("not dirty");
      }
    } 
  
  }
  