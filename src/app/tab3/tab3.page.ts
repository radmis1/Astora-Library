import { Component } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public Sheet: ActionSheetController, public AsheetCtrl: ActionSheetController, public NavCtrl: NavController, public ToastCtrl: ToastController) { }
  async verCompania() {
    this.NavCtrl.navigateForward('compania');
  }
  async verProximamente() {
    this.NavCtrl.navigateForward('proximamente');
  }
  async verContactenos() {
    this.NavCtrl.navigateForward('contactenos');
  }

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
