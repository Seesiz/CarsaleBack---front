import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isConnected: boolean = true;

  ngOnInit() {
    // const min = 1;
    // const max = 3;
    // const randomNumber = Math.floor(Math.random() * (max - min) + min);
    // const imageUrl = `../assets/img/bg_${randomNumber}.jpeg`;
    // const image = new Image();
    // image.onload = () => {
    //   document.body.style.backgroundImage = `url(${imageUrl})`;
    // };
    // image.src = imageUrl;
  }
}
