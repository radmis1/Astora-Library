import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {

  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }
  irLibros() {
    this.NavCtrl.navigateBack('tabs');

  }
  
}
