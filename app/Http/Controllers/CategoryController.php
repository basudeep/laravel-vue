<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;



class CategoryController extends Controller
{
    //Add Category
    public function add_category( Request $request){
        $this->validate($request,[
            'category_name' => 'required|min:2|max:50',
        ]);
        $category = new Category();
        $category->category_name = $request->category_name;
        $category->save();
        return ['message'=> 'category added successfully'];
    }


    //Get All Category List

    public function all_category(){
        $categories = Category::all();
        return response()->json([
            'categories' => $categories
        ], 200);
    }


    //Delete CAtegory
    public function delete_category($id){
        $category = Category::find($id);
        $category->delete();
    }
    //Edit 
    public function edit_category($id){
        $category = Category::find($id);
        return response()->json([
            'category' => $category
    ], 200);
    }
    

    //Update
    public function update_category( Request $request, $id){
        $this->validate($request,[
            'category_name' => 'required|min:2|max:50'
        ]);
        $category= Category::find($id);
        $category->category_name = $request->category_name;
        $category->save();
        return[
            'message' => 'Category Updated Succesfully'
        ];
    }
}
