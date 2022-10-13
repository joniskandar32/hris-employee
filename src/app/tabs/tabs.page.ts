import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private nativeStorage: NativeStorage, public router: Router, private navCtrl: NavController) {}

  logout(){
    this.nativeStorage.clear()
      .then(
        res => alert('GOOD BYE !'),
        err => alert(JSON.stringify(err))
      );
    this.navCtrl.navigateRoot('/login');
  }

}
