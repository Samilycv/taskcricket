import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  no:number;
  name: string;
  match: string;
  position: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {no:1,name: 'Virat Kohli', match:'T20',position:'Captain'},
  {no:2,name: 'Rohit Sharma', match:'Worldcup',position:'Batsman'},
  {no:3,name: 'Jasprit Bumrah', match:'T20',position:'Fast Bowler'},
  {no:4,name: 'KL Rahul', match:'Worldcup',position:'Wicketkeeper-Batsman'},
  {no:5,name: 'Hardik Pandya', match:'T20',position:'Vice-Captain'},
  {no:6,name: 'Ravindra Jadeja', match:'Worldcup',position:'All-Rounder'},
  {no:7,name: 'Mohammed Shami', match:'T20',position:'Right-arm Fast Bowler'},
  {no:8,name: 'Mohammed Siraj', match:'T20',position:'Right-arm Fast Bowler'},
 
];

