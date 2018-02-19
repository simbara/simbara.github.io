// Created by iWeb 3.0.4 local-build-20120206

function createMediaStream_id3()
{return IWCreatePhotocast("http://rahulrajan.com/Home/Temp_Stability_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://rahulrajan.com/Home',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://rahulrajan.com/Home',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,30),new IWSize(229,236),27,27,0,new IWSize(18,20)),new IWPhotoFrame([IWCreateImage('Temp_Stability_files/Modern_C_TL.png'),IWCreateImage('Temp_Stability_files/Modern_S_T.png'),IWCreateImage('Temp_Stability_files/Modern_C_TR.png'),IWCreateImage('Temp_Stability_files/Modern_S_R.png'),IWCreateImage('Temp_Stability_files/Modern_C_BR.png'),IWCreateImage('Temp_Stability_files/Modern_S_B.png'),IWCreateImage('Temp_Stability_files/Modern_C_BL.png'),IWCreateImage('Temp_Stability_files/Modern_S_L.png')],null,2,0.502632,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Temp_Stability_files/Temp_StabilityMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
fixAllIEPNGs('Media/transparent.gif');IMpreload('Temp_Stability_files','shapeimage_2','0');Widget.onload();initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
