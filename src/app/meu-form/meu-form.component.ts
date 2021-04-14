import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  @Input() nome: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
