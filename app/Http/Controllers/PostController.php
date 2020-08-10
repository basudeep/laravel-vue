<?php

namespace App\Http\Controllers;
use App\Post;
use App\Category;
use App\User;
use Image;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //*============== All Post =================*//
    public function all_posts(){

        // $posts = Post::with('category','user')->get();
        // return $posts;

        // $categories = Category::with('posts')->get();
        // return $categories;
        
        // $users = User::with('posts')->get();
        // return $users;
        $posts = Post::with('user','category')->get();
        return response()->json([
            'posts' => $posts
        ],200);
    }


    //*============== Add New Post =================*// 

    public function add_post( Request $request){

        $userid = Auth::id();
        $this->validate( $request, [
            'title' =>'required | min:5 ',
            'description' => 'required | min:10',
            'category_id' => 'required',
            'photo' => 'required'
        ]);
        // Photo
        $imgnamecut = strpos($request->photo, ';');   // length of photo name string brfore first semicolon ;
        $substring = substr($request->photo, 0, $imgnamecut );  // Cropped photo name from 0 to first semicolon
        $explodename = explode('/', $substring)[1];  //  Getting second array item which contain image extension
        $img_name = time().".".$explodename;
        $img = Image::make($request->photo); // Image class from Intervention 
        $img_path = public_path().'/upload/postimages/';
        $img->save($img_path.$img_name);    
        $post = new Post();
        $post->title = $request->title;
        $post->user_id = $userid;
        $post->description = $request->description;
        $post->category_id = $request->category_id;
        $post->photo = $img_name;
        $post->save();
        return [
            'message' => "Post Added Succesfully"
        ];
    }



    public function delete_post($id){
        $post = Post::find($id);
        $upload_directory = public_path().'/upload/postimages/';
        $full_path =  $upload_directory.$post->photo;
        if(file_exists($full_path)){
            @unlink($full_path);
        }
        $post->delete();
    }
}
