import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Observable, from } from 'rxjs';
import { JsonPipe as json, NgIf } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  blogPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }

}
