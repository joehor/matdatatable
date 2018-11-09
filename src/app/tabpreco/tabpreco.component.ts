import { Component, OnInit, ViewChild } from '@angular/core';
import { TabprecoService } from './tabpreco.service';
// import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

// Material
import { MatSort, MatTableDataSource, MatPaginatorIntl } from '@angular/material';

@Component({
  selector: 'app-tabpreco',
  templateUrl: './tabpreco.component.html',
  styleUrls: ['./tabpreco.component.css']
})
export class TabprecoComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  matDataSource;
  arrDataSource; // TODO tem que ter um jeito de resolver isso ...
  jsonDataSource;
  sumPreco;
  cntRow = 0;
  searchText = '';
  displayedColumns: string[] = ['codigo', 'descricao', 'alt', 'larg', 'prof', 'volume', 'peso', 'cub', 'preco', 'img'];
  // displayedColumns: string[] = ['codigo', 'preco'];

  // MatPaginator Inputs
  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100, 9999];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput
                            .split(',')
                            .map(str => +str);
  }

  // Mat Filter ...
  applyFilter(filterValue: string) {
    this.matDataSource.filter = filterValue
                                  .trim()
                                  .toLowerCase();
  }

  getTotal() {
    console.log('Calculando o subtotal...');
    this.sumPreco = this.arrDataSource
      .map(t => t.preco)
      .reduce((acc, value) => acc + value, 0);
  /*
   console.log(this.arrDataSource);
   if (this.arrDataSource === 'undefined') {
      return this.arrDataSource
      .map()
      .reduce((acc, value) => acc.preco + value.preco, 0);
   } else {
     return 0;
   }
   */
  }

  rowClick(row) {
    alert(row);
    console.log('sumPreco: ' + this.sumPreco);
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
        this.arrDataSource = res;
        this.cntRow = res.length;
        this.matDataSource = new MatTableDataSource(res);
        // this.jsonDataSource = JSON.stringify(this.matDataSource);
        this.length = res.length;
        this.matDataSource.sort = this.sort;
        this.matDataSource.paginator = this.paginator;

        // chama o totalizador ...
        this.getTotal();
       }
     });
  }

  btnClearData() {
    this.matDataSource = [];
    this.length = 0;
    this.matDataSource.sort = this.sort;
    this.matDataSource.paginator = this.paginator;
  }

  btnSearchClear() {
    console.log('Limpando a busca...');
    this.searchText = '';
    this.applyFilter('');
  }

}

