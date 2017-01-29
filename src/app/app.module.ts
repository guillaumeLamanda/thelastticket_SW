import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { CategoriesPage } from '../pages/categories/categories';
import { Profile } from '../pages/profile/profile';
import { Sell } from '../pages/sell/sell';
import { TabsPage } from '../pages/tabs/tabs';
import { UserInfoPage } from '../pages/user-info/user-info';
import { FormUserInfoPage } from '../pages/form-user-info/form-user-info';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    CategoriesPage,
    Profile,
    Sell,
    TabsPage,
    UserInfoPage,
    FormUserInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    CategoriesPage,
    Profile,
    Sell,
    TabsPage,
    UserInfoPage,
    FormUserInfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
