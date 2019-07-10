import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitizenData } from './CitizenData';

@Injectable({
  providedIn: 'root'
})
export class CitizenDataService {
  searchResults: Array<CitizenData> = [];
  constructor() {
    this.searchResults = [
      {id: '204466783', firstName: 'Hadas', lastName: 'Dahan', address: 'Harakefet 18', city: 'Holon', vote: true},
      {id: '204466700', firstName: 'Haim', lastName: 'Cohen', address: 'Harimon 5', city: 'Haifa', vote: false},
      {id: '302884648', firstName: 'David', lastName: 'Levy', address: 'Hahadas Ish 2', city: 'Holon', vote: true},
      {id: '121212123', firstName: 'shmuel', lastName: 'Moshkowitz', address: 'Hashaked 12', city: 'Haifa', vote: true},
      {id: '258963145', firstName: 'Yosef', lastName: 'Madlal', address: 'Hazait 2', city: 'Holon', vote: false},
      {id: '053698563', firstName: 'Tirza', lastName: 'Bitan', address: 'Hatamar 11', city: 'Haifa', vote: true}];
  }
  getSearchResults() {
    return this.searchResults;
    }
}
