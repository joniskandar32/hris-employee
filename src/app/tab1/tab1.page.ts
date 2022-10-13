import { Component } from '@angular/core';
import { ToastController, IonRouterOutlet, LoadingController, NavController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  key:any;
  username:any;
  listsNote:any;
  listsNote1:any;
  listsNote2:any;
  listsNote3:any;
  listsNote4:any;
  listsNote5:any;
  listsNote8:any;
  listsNote9:any;
  items:any;
  foundBooks:any=[];
  ot:any;

  slideOpt ={
    direction: 'horizontal',
    slidesPerView: 2,
    autoplay: {delay: 1500},
    pagination: {
      el: '.swiper-pagination',
    }
  }

  slideOpt2 ={
    direction: 'horizontal',
    slidesPerView: 3,
    autoplay: {delay: 1500},
    pagination: {
      el: '.swiper-pagination',
    }
  }

  constructor(public router: Router, private navCtrl: NavController, public toastCtrl: ToastController, public loadCtrl: LoadingController, private nativeStorage: NativeStorage , private routerOutlet: IonRouterOutlet, private noteService: NoteService) {
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

  ngOnInit(){
    //Birthday
    this.nativeStorage.getItem('employee')
      .then(
        //data => console.log(data.property),
        res => {
          this.key = res.property, //alert('welcome back '+(res.property)),
          this.username = this.key
          //profile
          this.noteService.birthday().subscribe(
          //this.noteService.getListNote().subscribe(
            data => {
              if(data["result"]=="success"){
                
                this.listsNote3 = data["data"];
                //console.log(this.listsNote1);
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

    //LP Posted
    this.nativeStorage.getItem('employee')
      .then(
        //data => console.log(data.property),
        res => {
          this.key = res.property, //alert('welcome back '+(res.property)),
          this.username = this.key
          //profile
          this.noteService.lpPosted(this.username).subscribe(
          //this.noteService.getListNote().subscribe(
            data => {
              if(data["result"]=="success"){
                
                this.listsNote4 = data["data"];
                console.log(this.listsNote4);
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

      //LP Propose
    this.nativeStorage.getItem('employee')
    .then(
      //data => console.log(data.property),
      res => {
        this.key = res.property, //alert('welcome back '+(res.property)),
        this.username = this.key
        //profile
        this.noteService.lpPropose(this.username).subscribe(
        //this.noteService.getListNote().subscribe(
          data => {
            if(data["result"]=="success"){
              
              this.listsNote5 = data["data"];
              console.log(this.listsNote5);
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

    //Eclaim Propose
    this.nativeStorage.getItem('employee')
    .then(
      //data => console.log(data.property),
      res => {
        this.key = res.property, //alert('welcome back '+(res.property)),
        this.username = this.key
        //profile
        this.noteService.claimPropose(this.username).subscribe(
        //this.noteService.getListNote().subscribe(
          data => {
            if(data["result"]=="success"){
              
              this.listsNote8 = data["data"];
              console.log(this.listsNote8);
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

    //Eclaim Posted
    this.nativeStorage.getItem('employee')
    .then(
      //data => console.log(data.property),
      res => {
        this.key = res.property, //alert('welcome back '+(res.property)),
        this.username = this.key
        //profile
        this.noteService.claimPosted(this.username).subscribe(
        //this.noteService.getListNote().subscribe(
          data => {
            if(data["result"]=="success"){
              
              this.listsNote9 = data["data"];
              console.log(this.listsNote9);
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
    
      //OT Posted
    this.nativeStorage.getItem('employee')
      .then(
        //data => console.log(data.property),
        res => {
          this.key = res.property, //alert('welcome back '+(res.property)),
          this.username = this.key
          //profile
          this.noteService.otPosted(this.username).subscribe(
          //this.noteService.getListNote().subscribe(
            data => {
              if(data["result"]=="success"){
                
                this.listsNote1 = data["data"];
                console.log(this.listsNote1);
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

    //OT Propose
    this.nativeStorage.getItem('employee')
    .then(
      //data => console.log(data.property),
      res => {
        this.key = res.property, //alert('welcome back '+(res.property)),
        this.username = this.key
        //profile
        this.noteService.otPropose(this.username).subscribe(
        //this.noteService.getListNote().subscribe(
          data => {
            if(data["result"]=="success"){
              
              this.listsNote2 = data["data"];
              if(this.listsNote2 == "")
              {
                this.ot = "0";
              }
              else
              {
                this.ot = this.listsNote2;
              }
              console.log(this.ot);
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

  //Function present toast
  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500
    });
    toast.present();
  }

  permitPropose(){
    this.router.navigateByUrl('/permitpropose');
  }

  permitPosted(){
    this.router.navigateByUrl('/permitposted');
  }

  otPropose(){
    this.router.navigateByUrl('/otpropose');
  }

  otPosted(){
    this.router.navigateByUrl('/otposted');
  }

  claimPropose(){
    this.router.navigateByUrl('/claimpropose');
  }

  claimPosted(){
    this.router.navigateByUrl('/claimposted');
  }

}
