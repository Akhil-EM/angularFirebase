import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase} from'@angular/fire/database';

import{AngularFirestore} from '@angular/fire/firestore'
import {} from '@angular/fire'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private bookCounter = 0;
  public categories:any[]=[];
  public isImage=true;
  
  public imageUrl:any;
  public videoUrl:any;
  

  // public tutRef = this.fireStoreDb.doc('category')

  constructor(private fireDb:AngularFireDatabase,public fireStoreDb :AngularFirestore) { }

  ngOnInit(): void {
    //   this.fireDb.database.ref('category/')
    //  .on('value', (snapshot:any) =>{
    //     const data = snapshot.val();
    //      console.log(data);
         
    //   });
    // this.categories=this.fireDb.list('category/').snapshotChanges()
     this.fireStoreDb.collection("testCollection")
     .get()
     .subscribe((ss) => {
       ss.docs.forEach((doc) => {
         this.categories.push(doc.data());
       });
     });

    console.log(this.categories);
    
  }
  submitCategory(data:any){
    console.log(data);
    

    // this.fireDb.database.ref('category/').push(data.category);
      this.fireStoreDb.collection('testCollection').add({
          field:data.category
      })
      .then(res => {
          console.log(res);
          
      })
      .catch(e => {
          console.log(e);
      })
    alert("Entered Email id : " + data);
  }
  
  submitNews(data:any){
     console.log(data);
      
      if(this.isImage==true){
        this.imageUrl=data.imageUrl;
        this.videoUrl="";
      }else{
        this.imageUrl="";
        this.videoUrl=data.videoUrl;
      }
    
       console.log(this.videoUrl,this.imageUrl);
       
       this.fireStoreDb.collection('news').add({
        newsTitle:data.newsTittle,
        newsContent:data.newsContent,
        newsCategory:data.newsCategory,
        isImage:this.isImage,
        imageUrl:this.imageUrl,
        videoUrl:this.videoUrl,
        isDeleted:false
      })
      .then(res => {
          console.log(res);
          
      })
      .catch(e => {
          console.log(e);
      })
     
  }
  changeImageUploadOrVideoUrl(){
    this.isImage=this.isImage==true?false:true;
    console.log(this.isImage);
    
    
  }

}
