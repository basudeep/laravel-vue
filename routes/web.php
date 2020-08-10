<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/posts', 'PostController@all_posts');

// Route::get('/{anypath}', 'HomeController@index')->where('path','.*');




//Category   
Route::post('/add-category', 'CategoryController@add_category');
Route::get('/categories', 'CategoryController@all_category');
Route::get('/category/{id}', 'CategoryController@delete_category');
Route::get('/edit-category/{id}', 'CategoryController@edit_category');
Route::post('/update-category/{id}', 'CategoryController@update_category');


// Post Routes
Route::get('/all-posts', 'PostController@all_posts');
Route::post('/add-post', 'PostController@add_post');
Route::get('/delete-post/{id}', 'PostController@delete_post');
