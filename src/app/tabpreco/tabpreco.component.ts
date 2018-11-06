import { Component, OnInit, ViewChild } from '@angular/core';
import { TabprecoService } from './tabpreco.service';
// import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

// Material
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tabpreco',
  templateUrl: './tabpreco.component.html',
  styleUrls: ['./tabpreco.component.css']
})
export class TabprecoComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  matDataSource;
  displayedColumns = ['codigo', 'descricao', 'alt', 'larg', 'prof', 'volume', 'peso', 'cub', 'preco', 'img'];

  // MatPaginator Inputs
  length = 50;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  // Mat Filter ...
  applyFilter(filterValue: string) {
    this.matDataSource.filter = filterValue.trim().toLowerCase();
  }

  getTotal() {
    return this.matDataSource.map(t => t.preco).reduce((acc, value) => acc + value, 0);
  }

  rowClick(row) {
    alert(row);
  }

  colClick(col, codigo) {
    alert(col + ' : ' + codigo);
  }

  constructor(private tabprecoservice: TabprecoService) { }

  ngOnInit() {
      this.btnGetData();
  }

  btnGetData() {
  // this.matDataSource = this.tabprecoservice.getData();
  // this.matDataSource.sort = this.sort;
    this.tabprecoservice.getData()
     .subscribe(res => {
       if (!res) {
        return;
       } else {
        this.matDataSource = new MatTableDataSource(res);
        this.matDataSource.sort = this.sort;
        this.matDataSource.paginator = this.paginator;
       }
     });
  }

  btnClearData() {
    this.matDataSource = [];
    this.matDataSource.sort = this.sort;
    this.matDataSource.paginator = this.paginator;
}

}

