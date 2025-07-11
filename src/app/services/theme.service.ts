import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  get isDarkMode() : boolean{
    return localStorage.getItem('dark-theme') === 'true'
  }
  isDarkModeTheme = signal(true)
  constructor() {
    if(localStorage.getItem('dark-theme') == null){
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('dark-theme','true')
    }else if(this.isDarkMode){
      localStorage.setItem('dark-theme','true')
      this.isDarkModeTheme.set(true)
      document.documentElement.classList.add('dark-theme');
    }else{
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('dark-theme','false')
      this.isDarkModeTheme.set(false)
    }
  }
  
  switchTheme(isClicked?:boolean){
    if(this.isDarkModeTheme()){
        localStorage.setItem('dark-theme','false')
        document.documentElement.classList.remove('dark-theme');
        this.isDarkModeTheme.set(false)
      }else{
        this.isDarkModeTheme.set(true)
        localStorage.setItem('dark-theme','true')
        document.documentElement.classList.add('dark-theme');
      }
    }

}
