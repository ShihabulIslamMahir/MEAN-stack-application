import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Post} from '../post.model';
import { PostsService } from '../posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
// implements means you are using the elements of OnInit  Interface in PostListComponent class.
export class PostListComponent implements OnInit, OnDestroy {
  // posts =  [

  // {title: 'First Post', content: 'This is the first post\'s content'},
  // {title: 'Second Post', content: 'This is the second post\'s content'},
  // {title: 'Third Post', content: 'This is the third post\'s content'}

  // ];
//sign a type, we got a list of post
  posts : Post[] = [];
  private postsSub: Subscription;

//  postsService : PostsService;

 //public create new property (postsService) in this component, it store incoming value in the property
 // public postsService : PostsService :- example of dependency injection
  constructor(public postsService : PostsService) {
  // this.postsService = postsService;
  }

  // ngOnInit is a life cycle hook called by Angular2 to indicate that Angular is done creating the component. Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work".So you should use constructor() to setup Dependency Injection and not much else. ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.
  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListner()
    .subscribe((posts:Post[])=>{
      this.posts = posts;

    });
}

//Life cycle for destroy, when this component is about to remove
ngOnDestroy(){
this.postsSub.unsubscribe();

}

}
