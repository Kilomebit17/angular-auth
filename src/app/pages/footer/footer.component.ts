import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  img:string = 'https://gioc.kyivcity.gov.ua/themes/giots/assets/img/giots_logo_white.svg'
  constructor() { }

  ngOnInit(): void {
  }

}
