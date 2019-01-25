import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.scss']
})
export class RepositoryDetailComponent implements OnInit {
    comments: any[];
  constructor(
    public dialogRef: MatDialogRef<RepositoryDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public repository: any,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.fetchComments(this.repository.comments_url).subscribe(
        (response) => {
            this.comments = response;
            this.comments.sort(
                function (repoA, repoB) {
                    return Date.parse(repoB.created_at) - Date.parse(repoA.created_at);
                }
            );
        }
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
