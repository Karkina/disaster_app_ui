import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private baseUrl = 'http://localhost:8080/api/v1/posts/langage'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getPostsByLanguage(language: string): Observable<any> {
   
 // Set the headers to handle CORS
 const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  // You can add more headers if needed
});
    const url = `${this.baseUrl}/${language.toLowerCase() }`;
    return this.http.get(url,{headers});
  }

  upvotePost(postId: string): Observable<any> {
     // Set the headers to handle CORS
     const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // You can add more headers if needed
    });
    const url = `${this.baseUrl}/${postId}/upvote`;
    return this.http.post(url, {headers});
  }

  downvotePost(postId: string): Observable<any> {
     // Set the headers to handle CORS
     const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // You can add more headers if needed
    });
    const url = `${this.baseUrl}/${postId}/downvote`;
    return this.http.post(url, {headers});
  }
}