import { Component } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { from } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  constructor(public AsheetCtrl: ActionSheetController, public NavCtrl: NavController) { }
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




}
