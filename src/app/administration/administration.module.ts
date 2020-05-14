import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ContentComponent } from './components/content/content.component';
import { HeadComponent } from './components/head/head.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CenterComponent } from './components/center/center.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TableComponent } from './components/table/table.component';
import { PageComponent } from './components/page/page.component';
import { CountComponent } from './components/count/count.component';
import {TabsService} from './services/tabs.service';
import { TabsDirective } from './directives/tabs.directive';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', children: [
      {path: '', redirectTo: 'orders/orders', pathMatch: 'full'},
      {path: 'orders', redirectTo: 'orders/orders', pathMatch: 'full'},
      {path: 'orders/orders', component: MainComponent},
      {path: 'goods', redirectTo: 'goods/goods', pathMatch: 'full'},
      {path: 'goods/goods', component: MainComponent},
      {path: 'warehouse', redirectTo: 'warehouse/warehouse', pathMatch: 'full'},
      {path: 'warehouse/warehouse', component: MainComponent},
      {path: 'reference', redirectTo: 'reference/nomenclature', pathMatch: 'full'},
      {path: 'reference/nomenclature', component: MainComponent},
      {path: 'reference/category', component: MainComponent},
      {path: 'reference/subcategory', component: MainComponent},
      {path: 'reference/firm', component: MainComponent},
      {path: 'administration', redirectTo: 'administration/users', pathMatch: 'full'},
      {path: 'administration/users', component: MainComponent},
      {path: 'authenticate', component: AuthenticateComponent},

    ]}
];

@NgModule({
  declarations: [
    MainComponent,
    ContentComponent,
    HeadComponent,
    NavigationComponent,
    CenterComponent,
    FooterComponent,
    TabsComponent,
    ButtonsComponent,
    TableComponent,
    PageComponent,
    CountComponent,
    TabsDirective,
    AuthenticateComponent
  ],
  providers: [
    TabsService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]

})

export class AdministrationModule {}
