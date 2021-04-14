import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'https://www.youtube.com/watch?v=PxdLZ4a6gP8';
  urlImage:string = 'https://pbs.twimg.com/media/EvNOiRyUYAQKarK?format=jpg&name=medium'
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;
  nomeCurso: string ="Tristeza";

  getValor(){
    return 1000;
  }
  botaoCliclado(){
    alert('butao clicladu');
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
    //console.log(evento)
  }
  salvaValor(aaa: HTMLInputElement){
    this.valorSalvo = aaa.value;
  }
  OnMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento:any){
    console.log(evento);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
