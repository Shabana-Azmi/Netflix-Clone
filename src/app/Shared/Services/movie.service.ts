import { Injectable, inject } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { IVideoContent } from '../models/video-content.interface';

const options={
params:{
  include_adult:'false',
  include_video:'true',
  language:'en-US',
  page:'1',
  sort_by:'popularity.desc'
},
headers:{
   accept: 'application/json',
  // Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGExNTM3NGIxMDcyODlhNzZiOGFmNGZhY2FkZmNhZiIsInN1YiI6IjYwYzhkZDQ0Y2E4MzU0MDAyOTk1OTYzNCIsInNjb3Blcy16WyJhcGlfcmVhZCdLCJ2ZXJzaW9uIjoxfQ.R9ZhfiS3W_O'
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGFmNGE1N2I4YjExZDEyZGUxYjM1MmZhMDczMTkyMSIsInN1YiI6IjY1ZDVlMmQyZWEzN2UwMDE4MzZlZjAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F1NYLk4KFx_cpA6tf-lLdZ5jdRERo9pKFcrXl0EinJc'
}
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getVideos(id: any): import("rxjs").Observable<any> {
    throw new Error('Method not implemented.');
  }

  // constructor(private http:HttpClient) { }

  http=inject(HttpClient);
  getMovies(){
    return this.http.get<any>(
    'https://api.themoviedb.org/3/discover/movie',options)
  }
  getTvShows(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/tv',options)
  }
  // getRatedMovies(){
  //   return this.http.get<any>('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies',options)
  // }
  getBannerImage(movie_id:any){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/${movie_id}/images',options) 
  }
  getBannerVideo(movie_id:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movie_id}/videos`,options) 
  }
  getBannerDetail(movie_id:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movie_id}`,options)
  }
  getNowPlayingMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing',options)
  }
  getPopularMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular',options);
  }
  getTopRatedMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated',options);
  }
  getUpComingMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/upcoming',options);
  }
}
