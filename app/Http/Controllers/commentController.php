<?php

namespace App\Http\Controllers;

use App\comment;
use App\user;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;


class commentController extends Controller
{
    public function register(Request $request)
    {   $nametag=$request->nametag;
        $comment=$request->comment;
        $nameuser=$request->nameuser;
        $flag=$request->flag;
        $idFlag=$request->comFlag;
        $error_message="DENIED";
         $Success = "Success";
         $email=$request->email;
         $id=$request->id;
         
        
         $name= user::where('useremail', '=',$nameuser)->value('username'); 
            if($flag=='true'){
             $index= comment::select('id','comment','nameuser','email')->where('nametag', '=',$nametag)->orderBy('id','DESC')->get();
           
             return response()->json(['message' => $index]);
            }elseif($flag=='false')
            {
              
            $index =comment::insert(['id'=>$id,'nametag'=>$nametag,'comment'=>$comment,'nameuser'=>$name,'email'=>$nameuser]);
            $index= comment::select('id','comment','nameuser','email')->where('nametag', '=',$nametag)->orderBy('id','DESC')->get();
            return response()->json(['message' => $index]);
            }else{
              
               
                $moment=comment::where('id', '=',$idFlag)->delete();
                $index= comment::select('id','comment','nameuser','email')->where('nametag', '=',$nametag)->orderBy('id','DESC')->get();
                return response()->json(['message' => $index]);
               
                   
              
               
            }
        
        
       
       
    }
}
