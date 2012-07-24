// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

var tiaudiorecorder = null;
var audio_file = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory + 'test.3gp');
  
win.addEventListener('open', function(){
  tiaudiorecorder = require('org.selfkleptomaniac.ti.mod.tiaudiorecorder');
  tiaudiorecorder.start();
  var new_file = tiaudiorecorder.setPath(audio_file.nativePath);
});
var b2 = Ti.UI.createButton({bottom:100,width:200, height:60,title:'STOP'});
b2.addEventListener('click', function(){
  tiaudiorecorder.stop();
}); 
win.add(b2);
var b3 = Ti.UI.createButton({bottom:200, width:200, height:60, title:'Record'});
b3.addEventListener('click', function(){
  var f2 = audio_file;
  if(f2.exists()){
    var player = Ti.Media.createSound({url:f2.nativePath});
    player.setVolume(10.0);
    player.play();
  }else{
    alert('not exists');
  }
});
win.add(b3);

