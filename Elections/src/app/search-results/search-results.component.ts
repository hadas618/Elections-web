import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitizenData } from '../CitizenData';
import { CitizenDataService } from '../citizen-data.service';
import { FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { UpdateVoterComponent } from '../update-voter/update-voter.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  ballotState$: Observable<boolean>;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'address',
    'city',
    'vote'
  ];
  dataSource: MatTableDataSource<CitizenData>;
  idFilter: FormControl;
  firstNameFilter: FormControl;
  lastNameFilter: FormControl;
  addressFilter: FormControl;
  cityFilter: FormControl;
  voteFilter: FormControl;
  filteredValues: {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    vote: string;
  };
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private citizenDataService: CitizenDataService,
    private dialogVoter: MatDialog
  ) {}

  ngOnInit() {
    this.subs = this.citizenDataService.searchResults$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ballotState$ = this.citizenDataService.ballotState$;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.idFilter = new FormControl();
    this.firstNameFilter = new FormControl();
    this.lastNameFilter = new FormControl();
    this.addressFilter = new FormControl();
    this.cityFilter = new FormControl();
    this.voteFilter = new FormControl();
    this.filteredValues = {
      id: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      vote: ''
    };
    this.idFilter.valueChanges.subscribe(idFilterValue => {
      this.filteredValues.id = idFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.firstNameFilter.valueChanges.subscribe(firstNameFilterValue => {
      this.filteredValues.firstName = firstNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.lastNameFilter.valueChanges.subscribe(lastNameFilterValue => {
      this.filteredValues.lastName = lastNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.addressFilter.valueChanges.subscribe(addressFilterValue => {
      this.filteredValues.address = addressFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.cityFilter.valueChanges.subscribe(lastNameFilterValue => {
      this.filteredValues.city = lastNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.voteFilter.valueChanges.subscribe(lastNameFilterValue => {
      this.filteredValues.vote = lastNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  customFilterPredicate() {
    const myFilterPredicate = (data: CitizenData, filter: string): boolean => {
      const searchString = JSON.parse(filter);
      return (
        data.id
          .toString()
          .trim()
          .indexOf(searchString.id) !== -1 &&
        data.firstName
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(searchString.firstName.toLowerCase()) !== -1 &&
        data.lastName
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(searchString.lastName.toLowerCase()) !== -1 &&
        data.address
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(searchString.address.toLowerCase()) !== -1 &&
        data.city
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(searchString.city.toLowerCase()) !== -1 &&
        data.vote
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(searchString.vote.toLowerCase()) !== -1
      );
    };
    return myFilterPredicate;
  }
  selectVoter(voter: CitizenData) {
    this.dialogVoter.open(UpdateVoterComponent, {
      data: {
        citizenData: voter
      }
    });
  }
}
