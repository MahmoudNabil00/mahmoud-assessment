import { Component, DestroyRef, HostListener, inject, input, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'mahmoud-imgs',
  imports: [],
  templateUrl: './imgs.component.html',
  styleUrl: './imgs.component.scss'
})
export class ImgsComponent implements OnInit{
  destroyRef = inject(DestroyRef)
  http = inject(HttpClient)
  sanitizer = inject(DomSanitizer)
  src = input<string>('assets/imgs/logo.png')
  isSvg = input<boolean>(false)
  width = input<number>(120)
  alt = input<string>('Image')
  isOutline = input<boolean>(false)
  themeService = inject(ThemeService)
  router = inject(Router)
  svgTemplate !: SafeHtml

  @HostListener('click')
  handleClick() {
    if(this.src().includes('logo')){
      this.router.navigate(['dashboard'])
    }
  }

  ngOnInit(): void {
    this.fetchSvgAsTemplate()
  }
  
  fetchSvgAsTemplate(){
    this.http
    .get(`${this.src()}`, { responseType: 'text' }).pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(value => {
      this.svgTemplate =  this.sanitizer.bypassSecurityTrustHtml(value);
    });
  }

}
