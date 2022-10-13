import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { NoteService } from 'src/app/services/note.service';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-claimposted',
  templateUrl: './claimposted.page.html',
  styleUrls: ['./claimposted.page.scss'],
})
export class ClaimpostedPage implements OnInit {
  key:any;
  username:any;
  listsNote:any;
  data1:any;
  results:any;
  filterTerm: string;

  constructor(public toastCtrl: ToastController, public modalCtrl: ModalController, private noteService: NoteService, private nativeStorage: NativeStorage) { 
    //get user profile
    this.nativeStorage.getItem('employee')
    .then(
      //data => console.log(data.property),
      res => {
        this.key = res.property, //alert('welcome back '+(res.property)),
        this.username = this.key
        //profile
        this.noteService.claimsPosted(this.username).subscribe(
          data => {
            if(data["result"]=="success"){
              
              this.listsNote = data["data"];
              this.data1 = data["data"];
              this.results = [...this.data1];
              console.log(this.data1);
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

  ngOnInit() {
  }

}
