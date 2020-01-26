import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, Input } from '@angular/core';
import { AgWordCloudData,AgWordCloudDirective } from 'angular4-word-cloud';

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.css']
})
export class WordcloudComponent implements OnInit, AfterViewInit{

  options: any;
  wordData: Array<AgWordCloudData> = [];
  private _words:string[]=["SUCCESS", "EFFORT", "IMPROVE", "EFFICIENCE", "WORK", "LOYALTY", "RIGHTNESS", "TRUTH", "VALUE", "WAY", "MIND", "THINK", "RUN", "ACTIVATE", "READ", "IMPROVE", "REAL", "CODE", "COMMUNICATE", "YOU", "TEAM", "COMPANY"];
  private _colors:string[]=["red", "blue", "orange", "pink", "green", "yellow", "gray", "silver", "black", "violet", "aliceblue", "aqua", "beige", "pink", "green", "yellow", "gray", "silver", "black", "violet", "gray", "lightgray"];
  @ViewChild(AgWordCloudDirective, {static: false}) private _directive = null; //obtain the directive to manage the manually update of cloud
  constructor() {}
 
  ngOnInit() {
     this.startCloud();
    this.options = {
      settings: {
        minFontSize: 10,
        maxFontSize: 100,
      },
      margin: { // 0 is the better option to reduce width
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      labels: false // false to hide hover labels
    };
  }// end onInit

  ngAfterViewInit(){
    // The viewChild is ready here.
  }// end afterViewInit

  startCloud(){
    for (let i = 0; i < this._words.length; i++) {
      this.wordData[i]={
        text: this._words[i],
        color: this._colors[i],
        size: Math.random() * (100 - 10) + 10
      };
    }// end for
  }// end startcloud

  updateCloud(){
    if(!this._directive)
      return
    this._directive.update()
  }// end updateCloud

}// end of the way