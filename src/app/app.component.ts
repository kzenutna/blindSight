import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlindSight';
}
// var n = <any>navigator;

// n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );
// navigator.getUserMedia = navigator.getUserMedia ||
// navigator.webkitGetUserMedia || 
// navigator.mozGetUserMedia || 
// navigator.msGetUserMedia || navigator.oGetUserMedia;

// if(navigator.getUserMedia){
//   navigator.getUserMedia({video: true}, handleVideo, videoError);
// }
// function handleVideo(stream){
//   document.querySelector('#videoElement').src = window.URL.createObjectURL(stream);

// }
// function videoError(e){
//   alert("There was an issue");
// }

// (function() {
//   var video = document.getElementById("#videoElement"),
//       vendorUrl = window.URL || window.webkitURL;
  
//       navigator.getMedia = navigator.getUserMedia ||
//                             navigator.webkitGetUserMedia || 
//                             navigator.mozGetUserMedia || 
//                             navigator.msGetUserMedia;
  


//   navigator.getMedia({
//     video: true, 
//     audio: false
  
//   }, function(stream){
//     video.src = vendorUrl.createObjectURL(stream);
//     console.log(stream)
//     video.play();
//   }, function(error){
//     console.log("error")
//   });
//   })();

// @ViewChild('video') video:any; 
// note that "#video" is the name of the template variable in the video element

// ngAfterViewInit() {
//   let _video=this.video.nativeElement;
//   if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     navigator.mediaDevices.getUserMedia({ video: true })
//                           .then(stream => {
//                             _video.src = window.URL.createObjectURL(stream);
//                             _video.play();
//                           })
//   }
// }