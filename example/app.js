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

// TODO: write your module tests here
var tiaudiorecorder = require('org.selfkleptomaniac.ti.mod.tiaudiorecorder');
Ti.API.info("module is => " + tiaudiorecorder);

label.text = tiaudiorecorder.example();

Ti.API.info("module exampleProp is => " + tiaudiorecorder.exampleProp);
tiaudiorecorder.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	var proxy = tiaudiorecorder.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}

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

