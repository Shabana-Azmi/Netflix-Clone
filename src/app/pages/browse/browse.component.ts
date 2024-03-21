import { Component, Input, OnInit, inject } from '@angular/core';
import { AuthService } from '../../Shared/Services/auth.service';
import { MovieService } from 'src/app/Shared/Services/movie.service';
import { IVideoContent } from 'src/app/Shared/models/video-content.interface';
import { Observable, forkJoin, map, of } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit{
  movieService=inject(MovieService);
  auth=inject(AuthService);
  bannerTitleObs=new Observable<any>();
  bannerVideoObs=new Observable<any>();

  popularMovies:IVideoContent[]=[];
  movies:IVideoContent[]=[];
  TvShows:IVideoContent[]=[];
  nowPlayingMovies:IVideoContent[]=[];
  topRatedMovies:IVideoContent[]=[];
  upcomingMovies:IVideoContent[]=[]
ratedMovies:IVideoContent[]=[];
  // title:IVideoContent[]=[];
  sources=[
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getPopularMovies(),
    // this.movieService.getRatedMovies(),
    this.movieService.getTopRatedMovies(),
    this.movieService.getUpComingMovies()
  ]
  ngOnInit(): void {
    // One By One
  //  this.movieService.getMovies().subscribe(res=>{
  //   console.log(res);
  //   this.popularMovies=res.results;
  //  })
  // We Dont need to do one by one we can use  forkJoin to  get all the data at once 
    forkJoin(this.sources).pipe(map(([movies,TvShows,ratedMovies,nowPlaying,upComing,popular,topRated])=>{
      //   
      this.bannerTitleObs= this.movieService.getBannerDetail(movies.results[0].id);
      this.bannerVideoObs=this.movieService.getBannerVideo(movies.results[0].id);
      return {movies,TvShows,ratedMovies,nowPlaying,upComing,popular,topRated}
    }) ).subscribe((res:any)=>{
         console.log(res);
      this.movies=res.movies.results as IVideoContent[];
      this.TvShows=res.TvShows.results as IVideoContent[];
      // this.topRatedMovies=res.topRated.results as IVideoContent[];
      this.nowPlayingMovies=res.nowPlaying.results as IVideoContent[];
      this.popularMovies=res.popular.results as IVideoContent[];
      this.upcomingMovies= res.upComing.results as IVideoContent[];
      this.ratedMovies=res.ratedMovies.results as IVideoContent[];
        })
  }

 name=JSON.parse(sessionStorage.getItem("loggedInuser")!).name;
 userProfileImg=JSON.parse(sessionStorage.getItem("loggedInuser")!).picture;
 userEmail=JSON.parse(sessionStorage.getItem("loggedInuser")!).email;
 browsSignOut(){
  sessionStorage.removeItem("loggedInuser");
  this.auth.signOut();
 }
}
