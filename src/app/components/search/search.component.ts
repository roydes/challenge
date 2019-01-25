import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RepositoryDetailComponent } from '../repository-detail/repository-detail.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  repositories: any[];
  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({searchInput: ['', []]});
  }
  onSubmit(event) {
    event.preventDefault();
    console.log('Searching for: ' + this.searchForm.controls.searchInput.value);
    this.searchService.fetchAll(this.searchForm.controls.searchInput.value).subscribe(
      (response) => {
        console.log(response);
        this.repositories = response.items;
      }
    );

  }
  onSeeRepositoryDetail(repository: any) {
    console.log(repository);
    const dialogRef = this.dialog.open(RepositoryDetailComponent, {
      width: '70%',
      position: {'top': '5%'},
      hasBackdrop: true,
      data: repository
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
