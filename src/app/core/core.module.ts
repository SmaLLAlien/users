import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainInterceptor} from './interceptors/main.interceptor';
import {UsersApiService} from './services/users-api.service';
import {SpinnerService} from './services/spinner.service';
import {NotificationsService} from './services/notifications.service';

export abstract class EnsureImportedOnceModule {
  protected constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`${targetModule.constructor.name} has already been loaded.`);
    }
  }
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    UsersApiService,
    SpinnerService,
    NotificationsService,
    {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}
  ]
})
export class CoreModule extends EnsureImportedOnceModule {
  public constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent);
  }
}
