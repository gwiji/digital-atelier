import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DbService } from '../service/db.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  contactForm: FormGroup;
  demoForm: FormGroup;
  newsletterForm: FormGroup;

  constructor(private appService: AppService,public formBuilder: FormBuilder,public db: DbService,  public title: Title,
    public meta: Meta) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.minLength(4), Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['',Validators.compose([Validators.required])],
  });

  

  this.demoForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.maxLength(30), Validators.minLength(4), Validators.required])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
});

this.newsletterForm = this.formBuilder.group({
  email: ['', Validators.compose([Validators.required, Validators.email])],
});

}

ngOnInit() {
  //this.title.setTitle('Digital Atelier');
  this.appService.pageTitle = 'Home';
  this.meta.updateTag({name: 'title', content: 'Digital Atelier'});
  this.meta.updateTag({property: 'og:title', content: 'Digital Atelier'});
  this.meta.updateTag({ name: 'og:image', content: 'https://digital-atelier.web.app/assets/img/da-logo.png' });
  this.meta.updateTag({property: 'og:image:alt', content: 'Digital Atelier Logo'});
  this.meta.updateTag({name: 'twitter:title', content: 'Digital Atelier - We build beautiful and functional websites and mobile apps'});
  this.meta.updateTag({name: 'twitter:image:alt', content: 'Digital Atelier'});
  
  
  
}

  get f(){ return this.contactForm.value}
  get g(){ return this.demoForm.value}
  get h(){ return this.newsletterForm.value}

  async send(){
    var data = {
      name: this.f.name,
      email_address: this.f.email,
      message: this.f.message,
      updatedAt:  new Date()
    }

    this.db.sendMessage(data)
    .then(res => {
      this.contactForm.reset();
      alert('Your message has been received! We will get back to you shortly')
    })
    .catch(err => {
      alert(err);
    });

  }

  async requestDemo(){
    var data = {
      name: this.g.name,
      email_address: this.g.email,
      updatedAt:  new Date()
    }

    this.db.saveRequest(data)
    .then(res => {
      this.demoForm.reset();
      alert('Your request has been received! We will get back to you shortly')
    })
    .catch(err => {
      alert(err);
    });

  }

  async requestNewsletter(){
    var data = {
      email_address: this.h.email,
      updatedAt:  new Date()
    }

    this.db.newsletter(data)
    .then(res => {
      this.newsletterForm.reset();
      alert('Your email has been received and subscribed!')
    })
    .catch(err => {
      alert(err);
    });

  }

}
