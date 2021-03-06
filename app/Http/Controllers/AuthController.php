<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return mixed
     */
    public function login( Request $request )
    {
        $response = Http::post( config( 'services.passport.login_enpoint' ), array(
            'grant_type'    => 'password',
            'client_id'     => config( 'services.passport.client_id' ),
            'client_secret' => config( 'services.passport.client_secret' ),
            'username'      => $request->email,
            'password'      => $request->password,
            'scope'         => '',
        ) );
        return $response->json();
    }

    /**
     * @param Request $request
     */
    public function register( Request $request )
    {
        $request->validate( array(
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ) );

        return User::create( array(
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make( $request->password ),
        ) );
    }

    public function logout()
    {
        auth()->user()->tokens->each( function ( $token, $key ) {
            $token->delete();
        } );

        return response()->json( array( 'message' => 'Logged out successfully.' ), 200 );
    }
}
