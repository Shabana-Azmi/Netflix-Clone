import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/browse/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { HeaderComponent } from './core/Components/header/header.component';
import { BannerComponent } from './core/Components/banner/banner.component';
import {  HttpClientModule } from '@angular/common/http';
import { MovieCaroselComponent } from './Shared/Components/movie-carosel/movie-carosel.component';
import { DescriptionPipe } from './Shared/Pipes/description.pipe';
import { ImagePipe } from './Shared/Pipes/image.pipe';
import{provideAnimations}from'@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        BrowseComponent,
        HeaderComponent,
        BannerComponent,
        MovieCaroselComponent,
        DescriptionPipe,
        ImagePipe,
    ],
    providers: [provideAnimations()],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        CommonModule  
    ],
})
export class AppModule { }
