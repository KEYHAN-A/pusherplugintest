/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/
const pusherAndroid = require("nativescript-pusher-android");
var app_key = 'b3c0c47415432dd2514e';
var channel_name = 'my-channel';
var event_name = 'my-event';

pusherAndroid.connect(app_key, channel_name, event_name);
