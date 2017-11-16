import { Component, OnInit } from '@angular/core';
import { GithubService  } from "../github/github.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [GithubService]
})
export class UsersComponent implements OnInit {

  public userCount;
  public users;
  public counter;

  public happyText = 'Got a developer job';
  public todos = [];
  constructor(private githubService: GithubService) { 
    this.happyText = 'manager is sick';
  }

  ngOnInit() {
    this.happyText = 'manager got fired';
    this.todos = [
      'take a shower',
      'be social and put on  headphone',
      'wash the coffee mug'
    ]
    this.githubService.getUsers().subscribe(res => {
      this.userCount = res.total_count;
      this.users = res.items.slice(0,10);
      console.log(res.items[0]);
    })
  }

  makeHappier(){
    this.happyText = 'I am the only developer';
  }

}
