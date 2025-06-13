import { Component, inject, OnInit } from '@angular/core';
import { FetchService } from '../../service/fetch.service';

@Component({
  selector: 'app-main-fetch',
  imports: [],
  templateUrl: './main-fetch.component.html',
  styleUrl: './main-fetch.component.scss',
})
export class MainFetchComponent implements OnInit {
  private fetchService: FetchService = inject(FetchService);
  fetchedData: any;
  filteredObj: any;

  ngOnInit(): void {
    this.fetchService.getData().subscribe({
      next: (data) => {
        console.log(data);
        this.fetchedData = data;
        this.filteredObj = this.fetchedData;
      },
    });
  }

  searchData(event: string) {
    if (event !== '') {
      this.filteredObj = (this.fetchedData as Array<any>).filter((el) => {
        const elName = (el.name as string).toLowerCase();
        return elName.startsWith(event);
      });
      return;
    }
    this.filteredObj = this.fetchedData;
  }
}
