import { Component, OnInit, EventEmitter,Output } from '@angular/core';

import {NgForm} from "@angular/forms";
import { PostsService } from '../posts.service';

//decorator
@Component({
  //which allows to use this component
  selector: 'app-post-create',
  //html file of component
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent  {
  //properties (variable)
  // enteredContent = "";
  // enteredTitle = "";
  //<> defines such generic type
  // @Output() postCreated = new EventEmitter<Post>();
  //event binding







  constructor(public postsService: PostsService) {

  }

  // click method(function of class)
  // HTMLTextAreaElement is type
  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    // const post : Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };

    //EventEmitter is for exchanging data from one component to another
  //  this.postCreated.emit(post);
  this.postsService.addPost(form.value.title,form.value.content);
  form.resetForm();



}

}
