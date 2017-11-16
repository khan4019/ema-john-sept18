import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GithubService } from "../github/github.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [GithubService]
})
export class UserComponent implements OnInit {
  public userCount;
  public users;
  public searchText;
  public happyText = 'I got a job';
  public todos = [
    'take shower',
    'put off headphone and be social',
    'wash coffee mug',
    'go home sometime'
  ]
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    
  }

  private loadUser(){
    this.githubService.loadUsers(this.searchText).subscribe(res=>{
      console.log(res);
      this.userCount = res.total_count;
      this.users = res.items.slice(0,10);
    })
  }

  public loaduser($event: any){
    this.loadUser($event.target.value);
  }

}
