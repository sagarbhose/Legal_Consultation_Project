import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpcService {
  Ipc:any
  Otp:any
  userloggedin:boolean=false
  Lawyerloggedin:boolean=false
  user:any;
  lawyer:any
  queid:any
  constructor(private http: HttpClient) {}
  
  getqueid(){
    return this.queid
  }
  setqueid(val:any){
    this.queid=val;
  }

  getAllLawyers(){
    return this.http.get<any[]>("/app/lawyerlist");
  }
  getLawyer(){
    return this.lawyer;
  }
  setLawyer(val:any){
    this.lawyer=val;
  }

  getUser(){
    return this.user;
  }
  setuser(val:any){
    this.user=val;
  }

  getUserLoggedIn(){
    return this.userloggedin;
  }
  setUserLoggedIn(){
    this.userloggedin=true;
  }

  getLawyerloggedin(){
    return this.Lawyerloggedin;
  }

  setLawyerloggedin(){
    this.Lawyerloggedin=true;
  }

  getOtp(){
    return this.Otp
  }

  setOtp(Otp:any){
    this.Otp=Otp
  }

  getterIpc(){
    return this.Ipc;
  }
  setterIpc(obj:any){
    this.Ipc=obj
  }
  getipc() {
    return this.http.get<any[]>("app/ipclist");
  }

  getIpcById(ipc: any) {
    return this.http.get<any[]>("app/ipclist/" + ipc);
  }

  SendNGetOtp(emailid:any){
    return this.http.get("app/forgotpassword/"+emailid);
  }

  insertUser(User:any){
    return this.http.post("/app/clientlist",User);
  }

  getCredclient(cred:any){
    return this.http.get("app/clientbycred/"+cred)
  }

  getCredLawyer(cred:any){
    return this.http.get("app/lawyerbycred/"+cred)
  }

  getCities(){
    return this.http.get("https://api.openaq.org/v1/cities?country_id=IN")
  }

  insertQuestion(Question:any){
    return this.http.post("/app/Questionslist",Question)
  }
  insertAnswer(Answer:any){
    return this.http.post("/app/Answerlist",Answer)
  }

  deleteUser(id:any){
    return this.http.delete("/app/clientlist/"+id)
  }
  
  getAllQuestion(){
    return this.http.get("/app/Questionslist")
  }

  getQuestionById(qid:any){
    return this.http.get("/app/Questionslist/"+qid)
  }

  deleteQuestionById(qid:any){
    return this.http.delete("/app/Questionslist/"+qid)
  }

  getAllForum(){
    return this.http.get("/app/Forumlist")
  }

  insertForum(data:any){
    return this.http.post("/app/Forumlist",data);
  }

  deleteLawyer(lawyerid:any){
    return this.http.delete("app/lawyerlist/" + lawyerid)
  }

  insertLaywer(profile:any){
    return this.http.post("app/lawyerlist",profile)
  }

  updateLawyer(profile:any){
      return this.http.put("app/lawyerlist",profile)
  }

  getLawyerbyName(name:any){
    return this.http.get("/app/lawyerbyname/"+name)
  }

  getLawyerByEmail(email:any){
    return this.http.get("app/lawyerbyemail/"+email)
  }

  getClientByEmail(email:any){
    return this.http.get("app/clientbyemail/"+email)
  }
  
  getLawyerbyId(id:any){
    return this.http.get("app/lawyerbyid/"+id)
  }
}