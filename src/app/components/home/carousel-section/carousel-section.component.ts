import { Component, OnInit } from '@angular/core';
interface Slides {
  img:string
  description:string
}
@Component({
  selector: 'app-carousel-section',
  templateUrl: './carousel-section.component.html',
  styleUrls: ['./carousel-section.component.scss']
})
export class CarouselSectionComponent implements OnInit {
  responsiveOptions
  public slides:Slides[] = [
    {img: "https://gioc.kyivcity.gov.ua/storage/app/media/icons/giots_administration.svg", description:'Департамент інформаційно-комунікаційних технологій'},
    {img: "https://gioc.kyivcity.gov.ua/storage/app/media/icons/giots_administration.svg", description:'Департамент житлово-комунальної інфраструктури'},
    {img: "https://gioc.kyivcity.gov.ua/storage/app/media/icons/giots_administration.svg", description:'Керуючі компанії'},
    {img: "https://gioc.kyivcity.gov.ua/storage/app/media/icons/giots_administration.svg", description:'Департамент соціальної політики'},
    {img: "https://gioc.kyivcity.gov.ua/storage/app/media/icons/giots_administration.svg", description:'Районні державні адміністрації'},
    {img: "https://gioc.kyivcity.gov.ua/storage/app/media/icons/giots_administration.svg", description:'Департамент освіти і науки, молоді та спорту'},
    {img: "https://gioc.kyivcity.gov.ua/storage/app/media/icons/giots_srv_aid.svg", description:'Департамент охорони здоров’я'}
  ];
  public height:string = '300px'
  public fiveNum: number = 5;

  constructor() {
    this.responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];}

  ngOnInit(): void {
  }

}
