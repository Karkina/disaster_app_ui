export interface User {
    firstname: string;
    lastname: string;
    email: string;
  }

export interface Post {
    id: string;
    name: string;
    language: string;
    isPending: boolean;
    numberVote: number;
    createdBy: User;
    // Add any other post properties as needed
  }