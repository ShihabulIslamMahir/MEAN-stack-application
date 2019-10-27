import { Component, OnInit, EventEmitter,Output } from '@angular/core';

import {NgForm} from "@angular/forms";
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';

//decorator
@Component({
  //which allows to use this component
  selector: 'app-post-create',
  //html file of component
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit  {
  //properties (variable)
  // enteredContent = "";
  // enteredTitle = "";
  //<> defines such generic type
  // @Output() postCreated = new EventEmitter<Post>();
  //event binding


  private mode = 'create';
  post: Post;
  private postId: string;








  constructor(public postsService: PostsService, public route: ActivatedRoute) {}
  ngOnInit(){
    //paramMap is observable
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
   if(paramMap.has('postId')){
     this.mode = 'edit';
     this.postId = paramMap.get('postId');
     this.post = this.postsService.getPost(this.postId);
   }else{
    this.mode = 'create';
    this.postId = null;
   }
    });
  }

  // click method(function of class)
  // HTMLTextAreaElement is type
  onSavePost(form: NgForm){
    if(form.invalid){
      return;
    }
    if(this.mode === 'create'){
      this.postsService.addPost(form.value.title,form.value.content);
    }
    else{
      this.postsService.updatePost(this.postId,form.value.title,form.value.content);
    }
    // const post : Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };

    //EventEmitter is for exchanging data from one component to another
  //  this.postCreated.emit(post);

  form.resetForm();



}

}
