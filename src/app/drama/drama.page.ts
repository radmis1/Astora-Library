import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-drama',
  templateUrl: './drama.page.html',
  styleUrls: ['./drama.page.scss'],
})
export class DramaPage implements OnInit {

  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }

  irLibros() {
    this.NavCtrl.navigateBack('tabs');

  }
  verLibrodr1() {

    this.NavCtrl.navigateForward('librodr1');

  }
  verLibrodr2() {

    this.NavCtrl.navigateForward('librodr2');

  }
}
