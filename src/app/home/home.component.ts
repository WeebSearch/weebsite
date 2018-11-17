import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { random } from '../utils';
import { LoaderService } from '../services/loader.service';

interface Anime {
  id: string;
  rawName: string;
  characters: any[];
  episodes: any[];
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public animes: Anime[] = [];
  public search = 'Search';
  public missingThumbnailPlaceholders = [
    'shrug1.jpg',
    'shrug2.png',
    'shrug3.png',
    'shrug4.png',
    // 'shrug5.jpg',
    'shrugsparent.png',
    'shrug6.png',
  ].map(file => `assets/shrugs/${file}`);

  public placeholders: string[] = [];
  public loader = this.loader.randomLoader()

  public randomThumbnailPlaceholder = () => random(this.missingThumbnailPlaceholders);

  constructor(public apollo: Apollo, public router: Router, public loader: LoaderService) {
    this.loadAnimes();
  }

  ngOnInit() {
  }

  animeLink = (id: string) => {
    return `/anime/${id}`;
  };

  loadAnimes = (paginate: number = 0) => {
    this.apollo.query<{ animes: Anime[] }>({
      query: gql`
        query {
          animes {
            id
            rawName
            thumbnailUrl
            characters {
              rawName
            }
            episodes {
              id
            }
          }
        }
      `,
    }).pipe(map(res => res.data.animes)).subscribe(items => {
      // const unknownAnimes = items.filter(anime => !anime.thumbnailUrl).length;
      console.log(items);
      this.animes = items.sort((a, b) => a.rawName > b.rawName ? -1 : 1);
      this.placeholders = this.animes.map(this.randomThumbnailPlaceholder);
    });
  }

}
