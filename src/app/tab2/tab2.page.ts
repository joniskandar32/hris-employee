import { Component } from '@angular/core';
import { ToastController, IonRouterOutlet, LoadingController, NavController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  key:any;
  username:any;
  listsNote:any;

  darkMode: boolean = true;

  constructor(public router: Router, private navCtrl: NavController, public toastCtrl: ToastController, public loadCtrl: LoadingController, private nativeStorage: NativeStorage , private routerOutlet: IonRouterOutlet, private noteService: NoteService) {
    //dark mode set
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
    
    //get user profile
    this.nativeStorage.getItem('employee')
    .then(
      //data => console.log(data.property),
      res => {
        this.key = res.property, //alert('welcome back '+(res.property)),
        this.username = this.key
        //profile
        this.noteService.getDetailNote(this.username).subscribe(
        //this.noteService.getListNote().subscribe(
          data => {
            if(data["result"]=="success"){
              
              this.listsNote = data["data"];
              //console.log(data);
              //this.items = Array.of(this.items);
              //alert('welcome back '+(this.username));
            }
          },
          err => {
            console.log(err);
          }
        );
      },
      err => alert(JSON.stringify(err))
    );  
  }

  config(){
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark');

  }

  personal(){
    this.router.navigateByUrl('/personal');
  }


}
