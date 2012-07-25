TiAudioRecorder
===========================================

Titanium Mobile module for Android. You can record audio data with this module. Don't be evil.

USAGE
---------------------
See example/app.js.
Don't forget to add permission. On building your app, don't run, walk nor crawl.

```
$ mkdir -p ${PROJECT_HOME}/platfom/android
$ cp ${PROJECT_HOME}/build/android/AndroidManifest.xml ${PROJECT_HOME}/platform/android
```

And add user-permission:

```xml
	<uses-permission android:name="android.permission.RECORD_AUDIO"/>
```

LICENSE
---------------------
MIT License

Copyright 2012 Toshiro Yagi   
http://selfkleptomaniac.org/   
Twitter: @yagi_  