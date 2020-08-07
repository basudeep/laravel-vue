<?php

namespace App\Http\Controllers;
use App\Post;
use App\Category;
use App\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //
    public function all_posts(){

        // $posts = Post::with('category','user')->get();
        // return $posts;

        // $categories = Category::with('posts')->get();
        // return $categories;
        
        $users = User::with('posts')->get();
        return $users;
    }
}
