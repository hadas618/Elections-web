import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitizenData } from '../CitizenData';
import { CitizenDataService } from '../citizen-data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'city', 'didVote'];
  dataSource: MatTableDataSource<CitizenData>;

  @ViewChild(MatPaginator/*, {static: true}*/) paginator: MatPaginator;
  @ViewChild(MatSort/*, {static: true}*/) sort: MatSort;

  constructor(private citizenDataService: CitizenDataService) {
    this.dataSource = new MatTableDataSource(citizenDataService.getSearchResults());
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
