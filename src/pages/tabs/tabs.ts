import { Component } from '@angular/core';

import { Page2 } from '../page2/page2';
import { Profile } from '../profile/profile';
import { Sell } from '../sell/sell';
import { CategoriesPage } from '../categories/categories';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tab1root: any = Profile;
  tab2root: any = Page2;
  tab3root: any = Sell;
  tab4root: any = CategoriesPage;
}
