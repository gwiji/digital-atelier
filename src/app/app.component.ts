import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data = {
    name: 'Digital Atelier',
    bio: 'Web Development Firm',
    image: 'https://digital-atelier.web.app/assets/img/da-logo.png'
  };

  constructor(public title: Title, public meta: Meta) {}

  ngOnInit() {
  this.title.setTitle(this.data.name);

  this.meta.updateTag({name: 'title', content: 'Digital Atelier'});
  this.meta.updateTag({name: 'description', content: 'Web design & development is our speciality. We build beautiful and functional websites, mobile applications as well as custom software. Claim your free website audit today'});
  this.meta.updateTag({property: 'og:title', content: 'Digital Atelier'});
  this.meta.updateTag({ name: 'og:image', content: 'https://digital-atelier.web.app/assets/img/da-logo.png' });
  this.meta.updateTag({property: 'og:image:alt', content: 'Digital Atelier Logo'});
  this.meta.updateTag({name: 'twitter:title', content: 'Digital Atelier - We build beautiful and functional websites and mobile apps'});
  this.meta.updateTag({name: 'twitter:image:alt', content: 'Digital Atelier'});
  }
}