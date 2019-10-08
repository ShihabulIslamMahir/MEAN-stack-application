import {Injectable} from '@angular/core'
import {Post} from './post.model'
import {Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";

import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})


export class PostsService{
  // private property -  You cann't edit from outside
private posts: Post[] = [];
//createing new instance subject just event emitter and have generic type, here passing a list of post as payload
private postsUpdated = new Subject<Post[]>();
//Inject HttpClient
constructor(private http: HttpClient){

}

//getting old posts
getPosts() {
  this.http
    .get<{ message: string; posts: any }>(
      "http://localhost:3000/api/posts"
    )
    .pipe(map((postData) => {

      return postData.posts.map(post => {
        return {
          title: post.title,
          content: post.content,
          id: post._id
        };
      });
    }))
    .subscribe(transformedPosts => {
      this.posts = transformedPosts;
      this.postsUpdated.next([...this.posts]);
    });
}

getPostUpdateListner(){
  return this.postsUpdated.asObservable();
}
addPost(title:string, content:string){
  //post object
const post : Post = {id:null, title:title, content:content};
//send req
//post: data we want to post
this.http.post<{message: string}>('http://localhost:3000/api/posts',post)
 .subscribe((responseData) =>{
  console.log(responseData.message);
  //pushing post in posts array
this.posts.push(post);
//A handler for each delivered value
this.postsUpdated.next([...this.posts]);
 });
}




}


