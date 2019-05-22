import { Component } from '@angular/core';
import {ActionSheetController, NavController} from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public NavCtrl : NavController,public AsheetCtrl: ActionSheetController){}

  async verActionSheet() {


    const hojaDeAccion = await this.AsheetCtrl.create({


      header: 'Conócenos',
      buttons:
        [
          {
            text: 'Ir Acerca De',
            icon: 'help-circle-outline',
            handler: () => {
              this.NavCtrl.navigateForward('acerdade');
            }
          },
          {

            text: 'Cancelar',
            icon: 'information-circle-outline',
            handler: () => {
              console.log('Cancelar');


            }
          }
        ]


    });
    hojaDeAccion.present();
  }



  verAccion(){

  this.NavCtrl.navigateForward('accion');

}
verAventura(){

  this.NavCtrl.navigateForward('aventura');

}
verDrama(){

  this.NavCtrl.navigateForward('drama');

}
verInfantil(){

  this.NavCtrl.navigateForward('infantil');

}


}
