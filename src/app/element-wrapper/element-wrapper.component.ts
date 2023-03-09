import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-element-wrapper',
  templateUrl: './element-wrapper.component.html',
  styleUrls: ['./element-wrapper.component.css']
})
export class ElementWrapperComponent implements OnInit {
  isElementSelected = false
  @Input('values') values : any
  @Output() valueIndex = new EventEmitter<any>();
  @Output() deleteElement = new EventEmitter<any>();
  parent : AppComponent
  fileSrc : any

  constructor(private _commSrv : CommonService) { 
    this.parent = new AppComponent()
  }

  ngOnInit() {
  }

  onSelection(event, index, type){
    console.log(event, index)
    this.valueIndex.emit(index)
    this.isElementSelected = false
    console.log(type)
    this._commSrv.elementType.next(type)
    // this.resetStyling()
    // this.selectedElement = JSON.parse(JSON.stringify(event))
    // this.selectedIndex = index
  }



  
  delete(index){
      this._commSrv.selectedIndexs.subscribe((res : any) => {
        this.deleteElement.emit(res.selectedValueIndex)
      })
  }
}