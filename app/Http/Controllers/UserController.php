<?php

namespace App\Http\Controllers;

use App\user;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

//use JWTAuth;




class UserController extends Controller {
   
    public function store(Request $request)
    {
        $data= user::all();
        $email = $request->email;
        $password=$request->password;
        $error_message="DENIED";
        $Success = "Success";
        
     
     
        
        if (user::where('useremail', '=',$email)->count() > 0) 
        {
          $hashed_password= user::where('useremail', '=',$email)->value('password'); 
          if(Hash::check($password, $hashed_password)) 
          {
            return response()->json(['message' => $Success]);
          }
          else
          {
            return response()->json(['message' => $error_message]);
          }
            
        }
        else
        {
          return response()->json(['message' => $error_message]);
        }
       
   }
   public function checkuser(Request $request)
   {   
       $data= user::all();
       $email = $request->email;
       $error_message="DENIED";
       $Success = "Success";
       
       
        
       if (user::where('useremail', '=',$email)->count() > 0)
        {
          $user= user::select('username','useremail','password')->where('useremail', '=',$email)->get();
          return response()->json(['message' => $user]);  
        }else{
           return response()->json(['message' => $error_message]);
        }
       
    }
 
   public function register(Request $request)
   {
      $data= User::all();
      $name=$request->name;
      $email = $request->email;
      $password=$request->password;
      
      $Success = "Success";
      $error_message="DENIED";
      $hash = Hash::make($password);

      
      
      if(user::where('useremail', '=', $email)->exists())
        {
          return response()->json(['message' => $error_message]);
        }
       else
       {
          user::insert(['username'=>$name,'useremail'=>$email,'password'=>$hash,'email'=>$email]);
          return response()->json(['message' => $Success]);
       }
      
  } 
 
 
}
