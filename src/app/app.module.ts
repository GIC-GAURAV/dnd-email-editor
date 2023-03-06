import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import { InnerItemComponent } from './inner-item/inner-item.component';
import { ParentComponent } from './parent/parent.component';
import { ElementWrapperComponent } from './element-wrapper/element-wrapper.component';
@NgModule({
  declarations: [
    AppComponent,
    InnerItemComponent,
    ParentComponent,
    ElementWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    FormsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
