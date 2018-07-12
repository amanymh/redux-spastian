import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';

import {NgRedux, NgReduxModule} from '@angular-redux/store';
import { AppComponent } from './app.component';
import { IAppState, INITIAL_STATAE, rootReducer } from './store';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { IncrementDescrimentComponent } from './increment-descriment/increment-descriment.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent,
    IncrementDescrimentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngredux:NgRedux<IAppState>){
  ngredux.configureStore(rootReducer,INITIAL_STATAE);
  }
}
