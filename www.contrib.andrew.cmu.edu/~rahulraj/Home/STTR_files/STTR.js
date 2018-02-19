// Created by iWeb 3.0.4 local-build-20120206

function createMediaStream_id2()
{return IWCreatePhotocast("http://rahulrajan.com/Home/STTR_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://rahulrajan.com/Home',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://rahulrajan.com/Home',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(282,282),new IWSize(282,30),new IWSize(349,327),27,27,0,new IWSize(26,29)),new IWPhotoFrame([IWCreateImage('STTR_files/Modern_C_TL.png'),IWCreateImage('STTR_files/Modern_S_T.png'),IWCreateImage('STTR_files/Modern_C_TR.png'),IWCreateImage('STTR_files/Modern_S_R.png'),IWCreateImage('STTR_files/Modern_C_BR.png'),IWCreateImage('STTR_files/Modern_S_B.png'),IWCreateImage('STTR_files/Modern_C_BL.png'),IWCreateImage('STTR_files/Modern_S_L.png')],null,2,0.753947,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('STTR_files/STTRMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');IMpreload('STTR_files','shapeimage_2','0');Widget.onload();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
