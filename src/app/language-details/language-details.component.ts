import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../language.service';
import { Post } from '../entity/post';

@Component({
  selector: 'app-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.scss']
})
export class LanguageDetailsComponent implements OnInit {
  languageName: string = '';
  pendingPosts: Post[] = [];
  validatedPosts: Post[] = [];

  constructor(private route: ActivatedRoute, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.languageName = params['name'];

      // Call the service method to get posts based on the language
      this.loadPosts();
    });
  }

  upvote(post: Post): void {
    this.languageService.upvotePost(post.id).subscribe(
      () => {
        // Update the local post data if needed
        this.loadPosts();
      },
      (error) => {
        console.error('Error upvoting post:', error);
      }
    );
  }

  downvote(post: Post): void {
    this.languageService.downvotePost(post.id).subscribe(
      () => {
        // Update the local post data if needed
        this.loadPosts();
      },
      (error) => {
        console.error('Error downvoting post:', error);
      }
    );
  }


  private loadPosts(): void {
    this.languageService.getPostsByLanguage(this.languageName).subscribe({
      next: (data) => {
        this.pendingPosts = data;
        console.log('Posts:', this.pendingPosts);
      },
      error: (e) => {
        console.error('Error fetching posts:', e);
      }
    });
  }


}
