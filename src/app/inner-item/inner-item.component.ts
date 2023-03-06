import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-item',
  templateUrl: './inner-item.component.html',
  styleUrls: ['./inner-item.component.css']
})
export class InnerItemComponent implements OnInit {

  constructor() { }
  @Input('completed') complete : any
  @Input('todos') todos : any
  controlsData : any = []
  selectedElement:any
  color:any
  bgcolor:any
  padding:any
  width:any
  border_radius:any
  inputTypes = [
    'text',
    'date',
    'file',
    'number'
  ]
  inputtype:any
  ngOnInit() {
    console.log(this.complete)
  }

  resetStyling(){
    this.color = null
    this.bgcolor = null
    this.padding = 0
  }

  lastDropdrop(event:any,index:number){
event.stopPropagation()
  event.stopImmediatePropagation()
  console.log(index)
  console.log(this.complete)
    // console.log(JSON.parse(event.dataTransfer.getData('assciatedData')))
    this.complete.values.push(JSON.parse(event.dataTransfer.getData('assciatedData')))
    // console.log(this.complete)
  }

  allowDrop(ev:any,i:any){
    console.log(i)
    ev.stopPropagation();
    ev.preventDefault();
  }
}
