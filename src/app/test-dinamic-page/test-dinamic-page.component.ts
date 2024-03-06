import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-test-dinamic-page',
  templateUrl: './test-dinamic-page.component.html',
  styleUrls: ['./test-dinamic-page.component.scss']
})
export class TestDinamicPageComponent implements OnInit {

  constructor(private readonly meta: Meta) {

  }

  ngOnInit(): void {
    this.meta.updateTag({ property: 'og:title', content: 'dynamic App Title' });
    this.meta.updateTag({ property: 'og:description', content: 'dynamic App Description' });
    this.meta.updateTag({ property: 'og:image', content: 'https://picsum.photos/200/300' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }

}
