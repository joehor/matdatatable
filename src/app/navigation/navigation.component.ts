import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openOptions() {
    /*
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    */
  }
}
