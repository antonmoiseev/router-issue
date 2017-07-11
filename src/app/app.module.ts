import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

export function homeModuleLoader() {
  return HomeModule;
}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', loadChildren: homeModuleLoader }
    ],
    {
      enableTracing: true
    })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
