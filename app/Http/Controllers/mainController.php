<?php

namespace App\Http\Controllers;
use App\user;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use DB;
use Intervention\Image\Facades\Image;
use App\Fileupload;

class mainController extends Controller
{ public $save = false;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
       
        $useremail = $request->email;
        $newname = $request->new_name;
        $newpassword = $request->new_password;
        $hash = Hash::make($newpassword);

        $error_message="DENIED";
        $Success = "Success";
    
        if ($user = User::where('useremail','=' ,$useremail)->first()) {
            
            $user->username = $newname;
            $user->password = $hash;
            $user->save();
           
        
            return response()->json(['message' => $Success]);
        } else {
           return response()->json(['message' => $error_message]);
        }
        
   }
  /* public function updatepassword(Request $request)
   {
      
       $email = $request->email;
       $new = $request->newuser;
     
       $error_message="DENIED";
       $Success = "Success";
       $hash = Hash::make($new);
       if ($user = User::where('username','=' ,$email)->first()) {
           
           $user->password= $hash;
           $user->save();
       
           return response()->json(['message' => $user->name]);
       } else {
          return response()->json(['message' => $error_message]);
       }
       
  }*/
 

 

 
 
  public function upload(Request $request)
  {
   
    $image = $request->get('C:/Users/Tse/Desktop/test.jpg');
    $path = "C:/xampp/htdocs/backend/uploads";
    $img=Image::make($image);
    $img->resize(32, 24);
    $img->save("public/test.jpeg");
    //$Success = "Success";
    return response()->json(['message' =>$img]);
      
 }
 

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
