import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, LoadingController, AlertController } from '@ionic/angular';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
//import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  key:string = "usernamee";
  username:any;
  password:any;
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(private nativeStorage: NativeStorage, public formBuilder: FormBuilder, public router: Router, public navCtrl: NavController, public alertCtrl: AlertController, private noteService: NoteService, public toastCtrl: ToastController, public loadCtrl: LoadingController) {
    
   }

   // Native storage methods can be accessed below ...
  getData() {
    this.nativeStorage.getItem('employee')
      .then(
        res => alert(JSON.stringify(res)),
        err => alert(JSON.stringify(err))
      );    
  }

  getAllData(){
    this.nativeStorage.keys()
      .then(
        res => alert(JSON.stringify(res)),
        err => alert(JSON.stringify(err))
      );    
  }

  removeData() {
    this.nativeStorage.remove('mcu')
      .then(
        res => alert(JSON.stringify(res)),
        err => alert(JSON.stringify(err))
      );
  }

  clearData() {
    this.nativeStorage.clear()
      .then(
        res => alert(JSON.stringify(res)),
        err => alert(JSON.stringify(err))
      );
  }
  //End of native storage function
  
  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500
    });
    toast.present();
  }
  
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required]]
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      //localstorage add
      this.nativeStorage.setItem('employee', {property: this.username, anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
      //
      
      const loading = await this.loadCtrl.create({
        message: 'Please wait...'
      });
  
      await loading.present();
  
      await this.noteService.login(this.username, this.password).subscribe(
        res => {
          if(res["result"]=="success"){
            console.log(res);
            this.router.navigateByUrl('/tabs');
          }
  
          this.presentToast(res["message"]);
  
          loading.dismiss();
          
        },
        err => {
          console.log(err);
  
          loading.dismiss();
          //this.router.navigateByUrl('/login');
        }
      );
    }
  }

}
