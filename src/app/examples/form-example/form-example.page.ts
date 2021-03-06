import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import {  MenuController, AlertController, ToastController,  ModalController, LoadingController, ActionSheetController } from '@ionic/angular';
import { RouterStateSnapshot } from '@angular/router';
import {
    CalendarModal,
    CalendarModalOptions,
    DayConfig,
    CalendarResult
  } from 'ion2-calendar';
  import { async } from 'q';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.page.html',
  styleUrls: ['./form-example.page.scss'],
})
export class FormExamplePage implements OnInit {

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
businesses = [
  {
    name: 'None selected',
    value: '0'
  },
  {
      name: 'Corporation',
      value: 'CP'
  },
  {
    name: 'Sole proprietorship',
    value: 'SP'
},
{
  name: 'General partnership',
  value: 'GP'
},
{
  name: 'Limited libability partnership (LLP)',
  value: 'LLP'
},
{
  name: 'Limited partnership',
  value: 'LP'
},
{
  name: 'Other',
  value: 'OT'
}
];

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

   countries = [
    {name: 'United States', value: 'US'},
    {name: 'Afghanistan', value: 'AF'},
    {name: 'Åland Islands', value: 'AX'},
    {name: 'Albania', value: 'AL'},
    {name: 'Algeria', value: 'DZ'},
    {name: 'American Samoa', value: 'AS'},
    {name: 'AndorrA', value: 'AD'},
    {name: 'Angola', value: 'AO'},
    {name: 'Anguilla', value: 'AI'},
    {name: 'Antarctica', value: 'AQ'},
    {name: 'Antigua and Barbuda', value: 'AG'},
    {name: 'Argentina', value: 'AR'},
    {name: 'Armenia', value: 'AM'},
    {name: 'Aruba', value: 'AW'},
    {name: 'Australia', value: 'AU'},
    {name: 'Austria', value: 'AT'},
    {name: 'Azerbaijan', value: 'AZ'},
    {name: 'Bahamas', value: 'BS'},
    {name: 'Bahrain', value: 'BH'},
    {name: 'Bangladesh', value: 'BD'},
    {name: 'Barbados', value: 'BB'},
    {name: 'Belarus', value: 'BY'},
    {name: 'Belgium', value: 'BE'},
    {name: 'Belize', value: 'BZ'},
    {name: 'Benin', value: 'BJ'},
    {name: 'Bermuda', value: 'BM'},
    {name: 'Bhutan', value: 'BT'},
    {name: 'Bolivia', value: 'BO'},
    {name: 'Bosnia and Herzegovina', value: 'BA'},
    {name: 'Botswana', value: 'BW'},
    {name: 'Bouvet Island', value: 'BV'},
    {name: 'Brazil', value: 'BR'},
    {name: 'British Indian Ocean Territory', value: 'IO'},
    {name: 'Brunei Darussalam', value: 'BN'},
    {name: 'Bulgaria', value: 'BG'},
    {name: 'Burkina Faso', value: 'BF'},
    {name: 'Burundi', value: 'BI'},
    {name: 'Cambodia', value: 'KH'},
    {name: 'Cameroon', value: 'CM'},
    {name: 'Canada', value: 'CA'},
    {name: 'Cape Verde', value: 'CV'},
    {name: 'Cayman Islands', value: 'KY'},
    {name: 'Central African Republic', value: 'CF'},
    {name: 'Chad', value: 'TD'},
    {name: 'Chile', value: 'CL'},
    {name: 'China', value: 'CN'},
    {name: 'Christmas Island', value: 'CX'},
    {name: 'Cocos (Keeling) Islands', value: 'CC'},
    {name: 'Colombia', value: 'CO'},
    {name: 'Comoros', value: 'KM'},
    {name: 'Congo', value: 'CG'},
    {name: 'Congo, The Democratic Republic of the', value: 'CD'},
    {name: 'Cook Islands', value: 'CK'},
    {name: 'Costa Rica', value: 'CR'},
    {name: 'Cote D\'Ivoire', value: 'CI'},
    {name: 'Croatia', value: 'HR'},
    {name: 'Cuba', value: 'CU'},
    {name: 'Cyprus', value: 'CY'},
    {name: 'Czech Republic', value: 'CZ'},
    {name: 'Denmark', value: 'DK'},
    {name: 'Djibouti', value: 'DJ'},
    {name: 'Dominica', value: 'DM'},
    {name: 'Dominican Republic', value: 'DO'},
    {name: 'Ecuador', value: 'EC'},
    {name: 'Egypt', value: 'EG'},
    {name: 'El Salvador', value: 'SV'},
    {name: 'Equatorial Guinea', value: 'GQ'},
    {name: 'Eritrea', value: 'ER'},
    {name: 'Estonia', value: 'EE'},
    {name: 'Ethiopia', value: 'ET'},
    {name: 'Falkland Islands (Malvinas)', value: 'FK'},
    {name: 'Faroe Islands', value: 'FO'},
    {name: 'Fiji', value: 'FJ'},
    {name: 'Finland', value: 'FI'},
    {name: 'France', value: 'FR'},
    {name: 'French Guiana', value: 'GF'},
    {name: 'French Polynesia', value: 'PF'},
    {name: 'French Southern Territories', value: 'TF'},
    {name: 'Gabon', value: 'GA'},
    {name: 'Gambia', value: 'GM'},
    {name: 'Georgia', value: 'GE'},
    {name: 'Germany', value: 'DE'},
    {name: 'Ghana', value: 'GH'},
    {name: 'Gibraltar', value: 'GI'},
    {name: 'Greece', value: 'GR'},
    {name: 'Greenland', value: 'GL'},
    {name: 'Grenada', value: 'GD'},
    {name: 'Guadeloupe', value: 'GP'},
    {name: 'Guam', value: 'GU'},
    {name: 'Guatemala', value: 'GT'},
    {name: 'Guernsey', value: 'GG'},
    {name: 'Guinea', value: 'GN'},
    {name: 'Guinea-Bissau', value: 'GW'},
    {name: 'Guyana', value: 'GY'},
    {name: 'Haiti', value: 'HT'},
    {name: 'Heard Island and Mcdonald Islands', value: 'HM'},
    {name: 'Holy See (Vatican City State)', value: 'VA'},
    {name: 'Honduras', value: 'HN'},
    {name: 'Hong Kong', value: 'HK'},
    {name: 'Hungary', value: 'HU'},
    {name: 'Iceland', value: 'IS'},
    {name: 'India', value: 'IN'},
    {name: 'Indonesia', value: 'ID'},
    {name: 'Iran, Islamic Republic Of', value: 'IR'},
    {name: 'Iraq', value: 'IQ'},
    {name: 'Ireland', value: 'IE'},
    {name: 'Isle of Man', value: 'IM'},
    {name: 'Israel', value: 'IL'},
    {name: 'Italy', value: 'IT'},
    {name: 'Jamaica', value: 'JM'},
    {name: 'Japan', value: 'JP'},
    {name: 'Jersey', value: 'JE'},
    {name: 'Jordan', value: 'JO'},
    {name: 'Kazakhstan', value: 'KZ'},
    {name: 'Kenya', value: 'KE'},
    {name: 'Kiribati', value: 'KI'},
    {name: 'Korea, Democratic People\'s Republic of', value: 'KP'},
    {name: 'Korea, Republic of', value: 'KR'},
    {name: 'Kuwait', value: 'KW'},
    {name: 'Kyrgyzstan', value: 'KG'},
    {name: 'Lao People\'s Democratic Republic', value: 'LA'},
    {name: 'Latvia', value: 'LV'},
    {name: 'Lebanon', value: 'LB'},
    {name: 'Lesotho', value: 'LS'},
    {name: 'Liberia', value: 'LR'},
    {name: 'Libyan Arab Jamahiriya', value: 'LY'},
    {name: 'Liechtenstein', value: 'LI'},
    {name: 'Lithuania', value: 'LT'},
    {name: 'Luxembourg', value: 'LU'},
    {name: 'Macao', value: 'MO'},
    {name: 'Macedonia, The Former Yugoslav Republic of', value: 'MK'},
    {name: 'Madagascar', value: 'MG'},
    {name: 'Malawi', value: 'MW'},
    {name: 'Malaysia', value: 'MY'},
    {name: 'Maldives', value: 'MV'},
    {name: 'Mali', value: 'ML'},
    {name: 'Malta', value: 'MT'},
    {name: 'Marshall Islands', value: 'MH'},
    {name: 'Martinique', value: 'MQ'},
    {name: 'Mauritania', value: 'MR'},
    {name: 'Mauritius', value: 'MU'},
    {name: 'Mayotte', value: 'YT'},
    {name: 'Mexico', value: 'MX'},
    {name: 'Micronesia, Federated States of', value: 'FM'},
    {name: 'Moldova, Republic of', value: 'MD'},
    {name: 'Monaco', value: 'MC'},
    {name: 'Mongolia', value: 'MN'},
    {name: 'Montserrat', value: 'MS'},
    {name: 'Morocco', value: 'MA'},
    {name: 'Mozambique', value: 'MZ'},
    {name: 'Myanmar', value: 'MM'},
    {name: 'Namibia', value: 'NA'},
    {name: 'Nauru', value: 'NR'},
    {name: 'Nepal', value: 'NP'},
    {name: 'Netherlands', value: 'NL'},
    {name: 'Netherlands Antilles', value: 'AN'},
    {name: 'New Caledonia', value: 'NC'},
    {name: 'New Zealand', value: 'NZ'},
    {name: 'Nicaragua', value: 'NI'},
    {name: 'Niger', value: 'NE'},
    {name: 'Nigeria', value: 'NG'},
    {name: 'Niue', value: 'NU'},
    {name: 'Norfolk Island', value: 'NF'},
    {name: 'Northern Mariana Islands', value: 'MP'},
    {name: 'Norway', value: 'NO'},
    {name: 'Oman', value: 'OM'},
    {name: 'Pakistan', value: 'PK'},
    {name: 'Palau', value: 'PW'},
    {name: 'Palestinian Territory, Occupied', value: 'PS'},
    {name: 'Panama', value: 'PA'},
    {name: 'Papua New Guinea', value: 'PG'},
    {name: 'Paraguay', value: 'PY'},
    {name: 'Peru', value: 'PE'},
    {name: 'Philippines', value: 'PH'},
    {name: 'Pitcairn', value: 'PN'},
    {name: 'Poland', value: 'PL'},
    {name: 'Portugal', value: 'PT'},
    {name: 'Puerto Rico', value: 'PR'},
    {name: 'Qatar', value: 'QA'},
    {name: 'Reunion', value: 'RE'},
    {name: 'Romania', value: 'RO'},
    {name: 'Russian Federation', value: 'RU'},
    {name: 'RWANDA', value: 'RW'},
    {name: 'Saint Helena', value: 'SH'},
    {name: 'Saint Kitts and Nevis', value: 'KN'},
    {name: 'Saint Lucia', value: 'LC'},
    {name: 'Saint Pierre and Miquelon', value: 'PM'},
    {name: 'Saint Vincent and the Grenadines', value: 'VC'},
    {name: 'Samoa', value: 'WS'},
    {name: 'San Marino', value: 'SM'},
    {name: 'Sao Tome and Principe', value: 'ST'},
    {name: 'Saudi Arabia', value: 'SA'},
    {name: 'Senegal', value: 'SN'},
    {name: 'Serbia and Montenegro', value: 'CS'},
    {name: 'Seychelles', value: 'SC'},
    {name: 'Sierra Leone', value: 'SL'},
    {name: 'Singapore', value: 'SG'},
    {name: 'Slovakia', value: 'SK'},
    {name: 'Slovenia', value: 'SI'},
    {name: 'Solomon Islands', value: 'SB'},
    {name: 'Somalia', value: 'SO'},
    {name: 'South Africa', value: 'ZA'},
    {name: 'South Georgia and the South Sandwich Islands', value: 'GS'},
    {name: 'Spain', value: 'ES'},
    {name: 'Sri Lanka', value: 'LK'},
    {name: 'Sudan', value: 'SD'},
    {name: 'Suriname', value: 'SR'},
    {name: 'Svalbard and Jan Mayen', value: 'SJ'},
    {name: 'Swaziland', value: 'SZ'},
    {name: 'Sweden', value: 'SE'},
    {name: 'Switzerland', value: 'CH'},
    {name: 'Syrian Arab Republic', value: 'SY'},
    {name: 'Taiwan, Province of China', value: 'TW'},
    {name: 'Tajikistan', value: 'TJ'},
    {name: 'Tanzania, United Republic of', value: 'TZ'},
    {name: 'Thailand', value: 'TH'},
    {name: 'Timor-Leste', value: 'TL'},
    {name: 'Togo', value: 'TG'},
    {name: 'Tokelau', value: 'TK'},
    {name: 'Tonga', value: 'TO'},
    {name: 'Trinidad and Tobago', value: 'TT'},
    {name: 'Tunisia', value: 'TN'},
    {name: 'Turkey', value: 'TR'},
    {name: 'Turkmenistan', value: 'TM'},
    {name: 'Turks and Caicos Islands', value: 'TC'},
    {name: 'Tuvalu', value: 'TV'},
    {name: 'Uganda', value: 'UG'},
    {name: 'Ukraine', value: 'UA'},
    {name: 'United Arab Emirates', value: 'AE'},
    {name: 'United Kingdom', value: 'GB'},
    {name: 'United States', value: 'US'},
    {name: 'United States Minor Outlying Islands', value: 'UM'},
    {name: 'Uruguay', value: 'UY'},
    {name: 'Uzbekistan', value: 'UZ'},
    {name: 'Vanuatu', value: 'VU'},
    {name: 'Venezuela', value: 'VE'},
    {name: 'Viet Nam', value: 'VN'},
    {name: 'Virgin Islands, British', value: 'VG'},
    {name: 'Virgin Islands, U.S.', value: 'VI'},
    {name: 'Wallis and Futuna', value: 'WF'},
    {name: 'Western Sahara', value: 'EH'},
    {name: 'Yemen', value: 'YE'},
    {name: 'Zambia', value: 'ZM'},
    {name: 'Zimbabwe', value: 'ZW'}
   ];

   business: any = 'CP';
   country: any = 'US';
   state: any = 'MD';
   contactState: any = 'MD';

   constructor(public loadingController: LoadingController, public modalCtrl: ModalController, public menuCtrl: MenuController, public alertController: AlertController, public toastController: ToastController, public actionSheetController: ActionSheetController ) {
    this.menuCtrl.enable(false);
   }

   async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  //action sheet actions
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, 
      {
        text: 'Save',
        role: 'submit',
        icon: 'save',
        handler: () => {
          console.log('Save clicked');
        }
      }, 
      {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }
      /*, 
      {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }*/, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      } ]
    });
    await actionSheet.present();
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
