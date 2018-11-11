import { TabprecolinhasService } from './tabprecolinhas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabprecolinhas',
  templateUrl: './tabprecolinhas.component.html',
  styleUrls: ['./tabprecolinhas.component.css']
})
export class TabprecolinhasComponent implements OnInit {

  breakpoint;
  jsonDataSource;

  constructor(private tabprecolinhaService: TabprecolinhasService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    console.log('breakpoint: ' + this.breakpoint);

    this.btnGetData();

  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    console.log('breakpoint: ' + this.breakpoint);
  }

  btnGetData() {
    // this.matDataSource = this.tabprecoservice.getData();
    // this.matDataSource.sort = this.sort;
      this.tabprecolinhaService.getData()
       .subscribe(res => {
         if (!res) {
          return;
         } else {
          this.jsonDataSource = res;
         }
       });
    }

}
