import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ssr15-test';

  constructor(private readonly meta: Meta) {

  }
  ngOnInit(): void {
    this.meta.updateTag({ property: 'og:title', content: 'Niki App Title' });
    this.meta.updateTag({ property: 'og:description', content: 'Niki App Description' });
    this.meta.updateTag({ property: 'og:image', content: 'https://picsum.photos/200/300' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }

}
