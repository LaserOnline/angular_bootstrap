import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-home',
  templateUrl: './bootstrap-home.component.html',
  styleUrls: ['./bootstrap-home.component.sass'],
})
export class BootstrapHomeComponent {
  title = 'Bootstrap';

  Send() {
    console.log('Work!!!');
  }
}
