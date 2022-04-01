import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})



export class HomePage {
  fr: any;
  fi: any;
  fv: any;
  fp: any;

  constructor(public alertController: AlertController) { }

  reset()
{
  this.fv ="";
  this.fr ="";
  this.fi ="";
  this.fp ="";
}
async presentAlert() {

  const alert = await this.alertController.create({
    header: 'Erro',
    //subHeader: 'Subtitle',
    message: 'Preencha apenas com dois valores.',
    buttons: ['OK']
  });

  await alert.present();
}

tratamento()
{
  
  
  if (this.fv!="" && this.fr!="" && this.fi!="" && this.fp!="")
    {
      this.presentAlert()
      this.reset()
    }
  if (this.fv=="" && this.fr=="" && this.fi=="" && this.fp=="")
    {
      this.presentAlert()
      this.reset()
    }
  if (this.fv!="" && this.fr!="" && this.fi!="" && this.fp=="")
    {
      this.presentAlert()
      this.reset()
    }
    if (this.fv!="" && this.fr!="" && this.fi=="" && this.fp!="")
    {
      this.presentAlert()
      this.reset()
    }
    if (this.fv!="" && this.fr=="" && this.fi!="" && this.fp!="")
    {
      this.presentAlert()
      this.reset()
    }
    if (this.fv=="" && this.fr!="" && this.fi!="" && this.fp!="")
    {
      this.presentAlert()
      this.reset()
    }
    if (this.fv=="" && this.fr=="" && this.fi=="" && this.fp!="")
    {
      this.presentAlert()
      this.reset()
    }
    if (this.fv=="" && this.fr=="" && this.fi!="" && this.fp=="")
    {
      this.presentAlert()
      this.reset()
    }
    if (this.fv=="" && this.fr!="" && this.fi=="" && this.fp=="")
    {
      this.presentAlert()
      this.reset()
    }
    if (this.fv!="" && this.fr=="" && this.fi=="" && this.fp=="")
    {
      this.presentAlert()
      this.reset()
    }
} 
calc()
{

  
  /*if (this.fv!="" && this.fr!="" && this.fi!=="" && this.fp!=="")
    {
      this.presentAlert()
    }
    */
  this.tratamento()
  if (this.fv!="" && this.fr!="" && this.fi=="" && this.fp=="")
    {
      this.fi=this.fv/this.fr;
      this.fp=this.fv*this.fi;
    }
  if (this.fv!="" && this.fr=="" && this.fi!="" && this.fp=="")
    {
      this.fr=this.fv/this.fi;
      this.fp=this.fv*this.fi;
    } 
  if (this.fv!="" && this.fr=="" && this.fi=="" && this.fp!="")
    {
      this.fi=this.fp/this.fv;
      this.fr=this.fv/this.fi;
    }
  if (this.fv=="" && this.fr!="" && this.fi!="" && this.fp=="")
    {
      this.fv=this.fr*this.fi;
      this.fp=this.fi*this.fv;
    }
  if (this.fv=="" && this.fr!="" && this.fi=="" && this.fp!="")
    {
      this.fv=Math.sqrt(this.fp*this.fr);
      this.fi=this.fv/this.fr;
    }
  if (this.fv=="" && this.fr=="" && this.fi!="" && this.fp!="")
    {
      this.fv=this.fp/this.fi;
      this.fr=this.fv/this.fi;
    }   
}
  
}
 









