import { Component } from '@angular/core';
import {Post} from './posts/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //connected post-create and post-list
  //we got array of post here (type script syntext)
//  storedPosts: Post[] =[];
//  onPostAdded(post){
// this.storedPosts.push(post);
//  }
}
