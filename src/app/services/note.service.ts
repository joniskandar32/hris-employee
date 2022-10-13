import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  server:string = "https://hris.ntc.co.id/ntc/rest-api/ionic/projek/hris-employee/";

  constructor(public http: HttpClient) { }

  getListNote(){
    return this.http.get(this.server+'profile/');
  }
 
  getDetailNote(username){
    return this.http.get(this.server+'profile/'+username);
  }

  birthday(){
    return this.http.get(this.server+'birthday/');
  }

  otPropose(username){
    return this.http.get(this.server+'overtime/propose/'+username);
  }

  otPosted(username){
    return this.http.get(this.server+'overtime/posted/'+username);
  }

  overtimePosted(username){
    return this.http.get(this.server+'overtime/posted/list/'+username);
  }

  overtimePropose(username){
    return this.http.get(this.server+'overtime/propose/list/'+username);
  }

  lpPropose(username){
    return this.http.get(this.server+'permit/propose/'+username);
  }

  lpPosted(username){
    return this.http.get(this.server+'permit/posted/'+username);
  }

  permitPosted(username){
    return this.http.get(this.server+'permit/posted/list/'+username);
  }

  permitPropose(username){
    return this.http.get(this.server+'permit/propose/list/'+username);
  }

  claimPropose(username){
    return this.http.get(this.server+'eclaim/propose/'+username);
  }

  claimPosted(username){
    return this.http.get(this.server+'eclaim/posted/'+username);
  }

  claimsPosted(username){
    return this.http.get(this.server+'eclaim/posted/list/'+username);
  }

  claimsPropose(username){
    return this.http.get(this.server+'eclaim/propose/list/'+username);
  }

  addNote(noteTitle,noteContent){
    return this.http.post(this.server+'note/',{
      note_title:noteTitle,
      note_content:noteContent
    });
  }

  profile(username){
    return this.http.post(this.server+'profile/',{
      username:username
    });
  }

  login(username,password){
    return this.http.post(this.server+'login/',{
      username:username,
      password:password
    });
  }
 
  editNote(noteId,noteTitle,noteContent){
    return this.http.put(this.server+'note/'+noteId,{
      note_title:noteTitle,
      note_content:noteContent
    });
  }
 
  deleteNote(noteId){
    return this.http.delete(this.server+'note/'+noteId);
  }
}
