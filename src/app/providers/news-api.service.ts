import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private baseUrl: String = environment.baseUrl 
  private apiKey: String = environment.apiKey

  constructor(private http:HttpClient) { }

  getTopHeadlines(countryCode: String, categoryCode:String) { 
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${categoryCode}&apiKey=54852e9c406c4edda3ffe810ff4ee826`)
    //return this.http.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=54852e9c406c4edda3ffe810ff4ee826`)
  }

}
