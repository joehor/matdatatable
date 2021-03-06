import { Component, OnInit, ViewChild } from '@angular/core';
import { TabprecoService } from './tabpreco.service';
// import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

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

  // agora com colunas automaticas ...
  // displayedColumns: string[] = ['codigo', 'descricao', 'alt', 'larg', 'prof', 'volume', 'peso', 'cub', 'preco', 'img'];
  displayedColumns: string[];

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
    if (this.arrDataSource) {
      console.log('Calculando o subtotal...');
      this.sumPreco = this.arrDataSource
        .map(t => t.preco)
        .reduce((acc, value) => acc + value, 0);
    } else {
      return 0;
    }
  }

  rowClick(r, c, k) {
    alert(c + ': ' + r[c] + ' na pk: ' + r[k] + ' o campo ' + c + ' é numérico? ' + !isNaN(parseFloat(r[c])) );
  }

  colClick(col, codigo) {
    alert(col + ' : ' + codigo);
  }

  alignText(val) {
    if (isNaN(parseFloat(val))) {
      return '';
    } else {
      return 'alr';
    }
  }

  maskText(r, c) {
    if (c === 'preco' ) {
      return 'currency';
    } else {
      return '';
    }
  }

  applySum(col) {
    if ( col === 'preco') {
      return this.sumPreco;
    } else {
      return '';
    }
  }

  constructor(
      private tabprecoservice: TabprecoService,
      private route: ActivatedRoute
      ) { }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }

  ngOnInit() {
    /*
    setInterval(() => {
      this.btnGetData();
    }, 2000);
    */
    this.btnGetData(this.route.snapshot.params.linha);

  }

  btnGetData(linha) {
  // this.matDataSource = this.tabprecoservice.getData();
  // this.matDataSource.sort = this.sort;
    this.tabprecoservice.getData(linha)
     .subscribe(res => {
       if (!res) {
        return;
       } else {
        this.arrDataSource = res;
        this.cntRow = res.length;
        this.matDataSource = new MatTableDataSource(res);

        // teste funciona?
        // console.log('Vai converter?');
        // this.arrDataSource = JSON.parse(this.matDataSource);
        // console.log('converteu?');

        // agora com colunas automaticas ...
        this.displayedColumns = Object.keys(res[0]);

        // remove os dois últimos campos que não devem ser exibidos - TODO
        // this.displayedColumns.pop();
        // this.displayedColumns.pop();

        console.log(this.displayedColumns);

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
    this.sumPreco = 0;
    this.matDataSource.sort = this.sort;
    this.matDataSource.paginator = this.paginator;
  }

  btnSearchClear() {
    console.log('Limpando a busca...');
    this.searchText = '';
    this.applyFilter('');
  }
}

