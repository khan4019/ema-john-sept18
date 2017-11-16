import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GithubService } from "../github/github.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[GithubService]
})
export class UsersComponent implements OnInit {

  public userCount;
  public users;
  public searchText;
  public happyText = 'I got a developer job';
  public todos = [
    'take a shower',
    'put off headphone become social',
    'wash coffee mug',
    'call mom'
  ]
  constructor(private gitHubService: GithubService) { 
    this.happyText= 'manager is on vacation';
  }

  ngOnInit() {
    this.happyText = 'manager got fired';
    
  }

  keyupHandler(event){
    this.happyText = event.target.value;
  }

  loadUser(){
    this.gitHubService.loadData(this.searchText).subscribe(res => {
      this.userCount = res.total_count;
      this.users = res.items.slice(0,10);
      console.log(res[0]);
    })
  }

}
