import { Component, OnInit } from '@angular/core';
import{ Router, NavigationExtras } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(public router: Router, private facebook: Facebook, private nav: NavController,) { }

  userData=null;
  entrar(){
    this.router.navigateByUrl('/home');
  }

  entrarFB(){
    this.facebook.login(['email','public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[]).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']};
      })
    })
    if(this.userData != null)
    {
      let navigationExtras: NavigationExtras = {
        state: {
          userData: this.userData
        }
      }
      this.router.navigate(['home'], navigationExtras);
    }
  }

  ngOnInit() {
  }

}
