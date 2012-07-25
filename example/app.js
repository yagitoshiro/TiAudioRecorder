// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var button = Ti.UI.createButton({title:'Start', width:200, height:200});
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

function open_recorder(){
  var audio_file = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory + 'test.3gp');
  var tiaudiorecorder = null;
  tiaudiorecorder = require('org.selfkleptomaniac.ti.mod.tiaudiorecorder');

  var b1 = Ti.UI.createButton({title:'Record', top:100, width:200,height:60,enabled:true});
  b1.addEventListener('click', function(){
    Ti.API.info(tiaudiorecorder.getLoadState());
    tiaudiorecorder.setPath(audio_file.nativePath);
    tiaudiorecorder.prepare();
  });
  win.add(b1);
  var b2 = Ti.UI.createButton({bottom:200,width:200, height:60,title:'STOP',enabled:false});
  b2.addEventListener('click', function(){
    tiaudiorecorder.stop();
  }); 
  win.add(b2);
  var b3 = Ti.UI.createButton({bottom:300, width:200, height:60, title:'Playback', enabled:false});
  b3.addEventListener('click', function(){
    if(audio_file.exists()){
      var player = Ti.Media.createSound({url:audio_file.nativePath});
      player.setVolume(10.0);
      player.play();
    }else{
      alert('file not exists');
    }
  });
  win.add(b3);
  
  var b4 = Ti.UI.createButton({bottom:100, width:200, height:60, title:'Close', enabled:true});
  b4.addEventListener('click', function(e){
    tiaudiorecorder = null;
    win.close();
  });
  win.add(b4);
  
  tiaudiorecorder.addEventListener('initialized', function(e){
    Ti.API.info('initialized');
    Ti.API.info(JSON.stringify(e));
    record();
  });
  function record(){
    var dialog = Ti.UI.createAlertDialog({title:'Audio Recorder', message:'OK, we are ready.', buttonNames:['Start', 'Cancel']});
    dialog.addEventListener('click', function(e){
      if(e.index == 0){
        tiaudiorecorder.start();
        b2.enabled = true;
      }else{
        tiaudiorecorder.reset();
      }
      return;
    });
    dialog.show();
    win.add(dialog);
  }
  tiaudiorecorder.addEventListener('complete', function(e){
    Ti.API.info('complete');
    Ti.API.info(JSON.stringify(e));
    b3.enabled = true;
  });
  tiaudiorecorder.addEventListener('error', function(e){
    Ti.API.info('error');
    Ti.API.info(JSON.stringify(e));
    return;
  });
  win.open();
}
open_recorder();
