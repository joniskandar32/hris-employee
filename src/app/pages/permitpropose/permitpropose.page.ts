import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { NoteService } from 'src/app/services/note.service';
import { ToastController, ModalController } from '@ionic/angular';
import { ProposepermitPage } from 'src/app/modals/proposepermit/proposepermit.page';

@Component({
  selector: 'app-permitpropose',
  templateUrl: './permitpropose.page.html',
  styleUrls: ['./permitpropose.page.scss'],
})
export class PermitproposePage implements OnInit {
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
        this.noteService.permitPropose(this.username).subscribe(
        //this.noteService.getListNote().subscribe(
          data => {
            if(data["result"]=="success"){
              
              this.listsNote = data["data"];
              this.data1 = data["data"];
              this.results = [...this.data1];
              console.log(this.data1);
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

  ngOnInit() {
  }

  //Function modal detail
  async modalDetail(i){
    const modal = await this.modalCtrl.create({
      component:ProposepermitPage,
      componentProps:{
        dataNote:this.listsNote[i]
      }
    });

    return await modal.present();
  }

}
