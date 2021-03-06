import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up'

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  signUp(){
    this.navCtrl.push(SignUpPage, {}, {animate:false}); //Transição sem animação
  }
}
