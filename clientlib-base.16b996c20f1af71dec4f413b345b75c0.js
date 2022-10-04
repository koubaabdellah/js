const ua = navigator.userAgent.toLowerCase();
let isSafari = false;
if (ua.indexOf('safari') != -1) { 
  if(!(ua.indexOf('chrome') > -1)) {
	isSafari = true;
	console.debug('safari detected');
  }
}

if(!isSafari){
    let style = document.createElement('style');
    style.innerHTML =
        'html:not(.hydrated) {'+
        'display:none;'+
        '}';
    
    const ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);
}