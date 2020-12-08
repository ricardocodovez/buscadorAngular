import { Component, OnInit } from '@angular/core';
import { GifsService } from './../gifs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gifService: GifsService) { }

  q: string;
  gifs: any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.q = params['q'];

      this.gifService.getGifs(this.q).subscribe(gifs => {
        this.gifs = gifs;
      });
    });
  }

}
