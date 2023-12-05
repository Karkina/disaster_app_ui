import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-langages-list',
  templateUrl: './langages-list.component.html',
  styleUrls: ['./langages-list.component.scss']
})
export class LangagesListComponent {
  availableLanguages: string[] = ['English', 'French', 'Spanish', 'German'];
  pendingLanguages: { language: string, votes: number }[] = [];
  newLanguage: string = '';

  constructor(private snackBar: MatSnackBar) { }

  addLanguage(): void {
    if (this.newLanguage.trim() !== '') {
      if (this.availableLanguages.includes(this.newLanguage)) {
        this.snackBar.open('Language is already in the available list', 'Close', {
          duration: 3000, // 3 seconds
        });
      } else {
        this.pendingLanguages.push({ language: this.newLanguage, votes: 0 });
        this.newLanguage = '';
      }
    }
  }

  upVote(language: string): void {
    const languageObj = this.pendingLanguages.find(lang => lang.language === language);
    if (languageObj) {
      languageObj.votes++;
      this.sortPendingLanguages();

    }
  }

  downVote(language: string): void {
    const languageObj = this.pendingLanguages.find(lang => lang.language === language);
    if (languageObj && languageObj.votes > 0) {
      languageObj.votes--;
      this.sortPendingLanguages();
    }
  }

  private sortPendingLanguages(): void {
    // Sort the array in descending order based on votes
    this.pendingLanguages.sort((a, b) => b.votes - a.votes);
  }
}

