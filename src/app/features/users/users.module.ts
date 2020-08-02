import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './containers/users/users.component';
import {UsersRoutingModule} from './users-routing.module';
import {FilteredComponent} from './components/filtered/filtered.component';
import {MonthsComponent} from './components/months/months.component';
import {UsersService} from './services/users.service';
import {UserComponent} from './components/user/user.component';


@NgModule({
  declarations: [
    UsersComponent,
    FilteredComponent,
    MonthsComponent,
    UserComponent
  ],
  imports: [
    UsersRoutingModule,
    CommonModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {
}
