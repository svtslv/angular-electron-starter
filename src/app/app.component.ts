import { Component, OnInit } from '@angular/core';
import { ElectronService } from './electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-electron-starter';
  mode = '';

  constructor(
    private readonly electronService: ElectronService,
  ) {}

  ngOnInit(): void {
    if (this.electronService.isElectron) {
      this.mode = 'Electron mode';
      console.log(this.mode);
      console.log('Mode electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      this.mode = 'Web mode';
      console.log(this.mode);
    }
  }
}
