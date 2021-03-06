import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { EmpbackcolorDirective } from './empbackcolor.directive';
import { PipesComponent } from './pipes/pipes.component';
import { PipesdatebuttonclickComponent } from './pipesdatebuttonclick/pipesdatebuttonclick.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    EmpbackcolorDirective,
    PipesComponent,
    PipesdatebuttonclickComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
