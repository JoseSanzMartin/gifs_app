import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get tagsHistory() {
    return this.gifsService.tagsHistory;
    console.log(this.gifsService.tagsHistory);
  }

  public searchTarget( tag: string ) {
    console.log("lol");
    this.gifsService.searchTag( tag );
  }
}
