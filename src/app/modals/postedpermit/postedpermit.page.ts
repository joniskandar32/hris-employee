import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-postedpermit',
  templateUrl: './postedpermit.page.html',
  styleUrls: ['./postedpermit.page.scss'],
})
export class PostedpermitPage implements OnInit {
  @Input() public dataNote:any;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  //Tutup modal
  async closeModal(data){
    await this.modalCtrl.dismiss(data);
  }

}
