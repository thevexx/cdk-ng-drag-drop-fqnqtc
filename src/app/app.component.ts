import { Component, ChangeDetectorRef, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDrag,
  CdkDrop,
  transferArrayItem
} from "@angular/cdk/drag-drop";
declare const $: any;

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  items = ["Zero", "One", "Two", "Three"];

  items2 = [
    {
      id: "1",
      text: "One",
      link: "0"
    },
    {
      id: "2",
      text: "Two"
    },
    {
      id: "3",
      text: "Three"
    }
  ];
  items3 = [
    {
      id: "5",
      text: "Five",
     },
    {
      id: "6",
      text: "Six",
     },{
      id: "4",
      text: "Zero",
      link: "0"
    }
  ];
  listItems = [this.items2, this.items3];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    let connections;
    setTimeout(() => {
      $("#1").connections({
        to: "#4",
        borderClasses: {
          top: "border-top",
          right: "border-right",
          bottom: "border-bottom",
          left: "border-left"
        }
      });
      connections = $("connection, inner");
    }, 1000);
    setInterval(() => {
      connections.connections("update");
    }, 100);
  }
  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  isAllowed = (drag?: CdkDrag, drop?: CdkDrop) => {
    return false;
  };

  addToList(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
