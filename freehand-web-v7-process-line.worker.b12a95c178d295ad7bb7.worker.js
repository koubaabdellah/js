(()=>{"use strict";const t=1e-6;function e(e,i,s,r,h,n,a,l){let o=s-e,u=r-i,f=a-h,c=l-n,p=o*c-f*u;if(p>-t&&p<t)return!1;let d=(-u*(e-h)+o*(i-n))/p,b=(f*(i-n)-c*(e-h))/p;return d>=0&&d<=1&&b>=0&&b<=1}class i{constructor(){this.l=void 0,this.t=void 0,this.r=void 0,this.b=void 0,this.clear()}intersect(t){return this.r>=t.l&&this.b<=t.t&&this.l<=t.r&&this.t>=t.b}distanceToPoint2(t,e){return Math.min(Math.abs(this.l-t),Math.abs(this.t-e),Math.abs(this.b-e),Math.abs(this.r-t))}inside(t){return this.l>=t.l&&this.r<=t.r&&this.t<=t.t&&this.b>=t.b}intersectPercentage(t){return(Math.min(this.r,t.r)-Math.max(this.l,t.l))*(Math.min(this.t,t.t)-Math.max(this.b,t.b))/t.area}intersectByPercent(t,e){return!!t.inside(this)||!!this.intersect(t)&&this.intersectPercentage(t)>=e}intersectPoint(t,e,i){let s=t-i,r=t+i,h=e+i,n=e-i;return this.r>=s&&this.b<=h&&this.l<=r&&this.t>=n}get width(){return this.r-this.l}get height(){return this.t-this.b}get aspectRatio(){return this.width/this.height}get centerX(){return this.l+this.width/2}get centerY(){return this.b+this.height/2}get area(){return this.width*this.height}get hasArea(){return Math.abs(this.area)>0}setSize(t,e){let i=this.centerX,s=this.centerY;this.l=i-t/2,this.r=i+t/2,this.t=s+e/2,this.b=s-e/2}nudge(t,e){this.t+=e,this.b+=e,this.l+=t,this.r+=t}move(t,e){let i=this.width,s=this.height;this.l=t-i/2,this.r=t+i/2,this.t=e+s/2,this.b=e-s/2}normalize(){let t=Math.min(this.l,this.r),e=Math.max(this.l,this.r),i=Math.max(this.t,this.b),s=Math.min(this.t,this.b);this.l=t,this.r=e,this.t=i,this.b=s}clear(){this.l=Number.MAX_VALUE,this.t=-Number.MAX_VALUE,this.r=-Number.MAX_VALUE,this.b=Number.MAX_VALUE}zeroClear(){this.l=0,this.t=0,this.r=0,this.b=0}clone(){return this.copy(new i)}copy(t){return t.l=this.l,t.r=this.r,t.b=this.b,t.t=this.t,t}include(t){this.l=Math.min(this.l,t.l),this.r=Math.max(this.r,t.r),this.t=Math.max(this.t,t.t),this.b=Math.min(this.b,t.b)}expand(t){this.l-=t,this.t+=t,this.r+=t,this.b-=t}shrink(t){this.expand(-t)}expandXY(t,e){this.l-=t,this.t+=e,this.r+=t,this.b-=e}isValid(){return!(isNaN(this.centerY)||isNaN(this.centerX)||isNaN(this.l)||isNaN(this.t)||isNaN(this.r)||isNaN(this.b))}intersectLineSegment(t,i){return!(!this.intersectPoint(t[0],t[1],0)&&!this.intersectPoint(i[0],i[1],0))||e(t[0],t[1],i[0],i[1],this.l,this.t,this.r,this.t)||e(t[0],t[1],i[0],i[1],this.l,this.b,this.l,this.t)||e(t[0],t[1],i[0],i[1],this.r,this.b,this.r,this.t)||e(t[0],t[1],i[0],i[1],this.l,this.b,this.r,this.b)}}function s(t,e){let i=Math.abs(e-t)%(2*Math.PI);return i>Math.PI?2*Math.PI-i:i}var r="undefined"!=typeof Float32Array?Float32Array:Array;function h(){var t=new r(2);return r!=Float32Array&&(t[0]=0,t[1]=0),t}function n(t,e){var i=e[0]-t[0],s=e[1]-t[1];return Math.sqrt(i*i+s*s)}function a(t,e){return t[0]*e[0]+t[1]*e[1]}Math.random,Math.PI,h();let l=(t,e)=>[t[0]-e[0],t[1]-e[1]],o=(t,e)=>[t[0]+e[0],t[1]+e[1]],u=(t,e)=>[t[0]*e,t[1]*e],f=function(t){let e=h();return i=e,r=(s=t)[0],n=s[1],(a=r*r+n*n)>0&&(a=1/Math.sqrt(a)),i[0]=s[0]*a,i[1]=s[1]*a,e;var i,s,r,n,a},c=function(t,e){let i=f(t);return i[0]*=e,i[1]*=e,i};class p{constructor(t,e,i){this.points=void 0,this.corners=void 0,this.error=void 0,this.segments=void 0,this.points=t,this.error=i,this.corners=e,this.fit()}fit(){let{points:t}=this,{length:e}=t;if(this.segments=e>0?[[t[0],[0,0],[0,0]]]:[],e>1)for(let e=0;e<this.corners.length-1;e++){let i=this.corners[e],s=this.corners[e+1];this.fitCubic(i,s,f(l(t[i+1],t[i])),f(l(t[s-1],t[s])))}return this.segments}fitCubic(t,e,i,s){if(e-t==1){let r=this.points[t],h=this.points[e],a=n(r,h)/3;return void this.addCurve([r,o(r,c(i,a)),o(h,c(s,a)),h])}let r=this.chordLengthParameterize(t,e),h=Math.max(this.error,this.error*this.error),a=0,u=!0,p=0;for(;p<=4;){let n=this.generateBezier(t,e,r,i,s),l=this.findMaxError(t,e,n,r);if(l.error<this.error&&u)return void this.addCurve(n);if(a=l.index,l.error>=h)break;u=this.reparameterize(t,e,r,n),h=l.error,p++}let d=l(this.points[a-1],this.points[a]),b=l(this.points[a],this.points[a+1]),M=f((2,[(g=o(d,b))[0]/2,g[1]/2]));var g,m;this.fitCubic(t,a,i,M),this.fitCubic(a,e,[-(m=M)[0],-m[1]],s)}addCurve(t){this.segments[this.segments.length-1][2]=l(t[1],t[0]);let e=[t[3],l(t[2],t[3]),[0,0]];this.segments.push(e)}generateBezier(t,e,i,s,r){let h=1e-12,f=this.points[t],p=this.points[e],d=[[0,0],[0,0]],b=[0,0],M=0,g=e-t+1;for(;M<g;){let e=i[M],h=1-e,n=3*e*h,o=h*h*h,g=n*h,m=n*e,v=e*e*e,x=c(s,g),N=c(r,m),P=l(l(this.points[t+M],u(f,o+g)),u(p,m+v));d[0][0]+=a(x,x),d[0][1]+=a(x,N),d[1][0]=d[0][1],d[1][1]+=a(N,N),b[0]+=a(x,P),b[1]+=a(N,P),M++}let m,v,x=d[0][0]*d[1][1]-d[1][0]*d[0][1];if(Math.abs(x)>h){let t=d[0][0]*b[1]-d[1][0]*b[0];m=(b[0]*d[1][1]-b[1]*d[0][1])/x,v=t/x}else{let t=d[0][0]+d[0][1],e=d[1][0]+d[1][1];m=v=Math.abs(t)>h?b[0]/t:Math.abs(e)>h?b[1]/e:0}let N,P,y=n(p,f),A=h*y;if(m<A||v<A)m=v=y/3;else{let t=l(p,f);N=c(s,m),P=c(r,v),a(N,t)-a(P,t)>y*y&&(m=v=y/3,N=P=null)}return[f,o(f,N||c(s,m)),o(p,P||c(r,v)),p]}reparameterize(t,e,i,s){let r=t;for(;r<=e;)i[r-t]=this.findRoot(s,this.points[r],i[r-t]),r++;r=1;let h=i.length;for(;r<h;){if(i[r]<=i[r-1])return!1;r++}return!0}findRoot(t,e,i){let s=[],r=[],h=0;for(;h<=2;)s[h]=u(l(t[h+1],t[h]),3),h++;for(h=0;h<=1;)r[h]=u(l(s[h+1],s[h]),2),h++;let n=this.evaluate(3,t,i),o=this.evaluate(2,s,i),f=this.evaluate(1,r,i),c=l(n,e),p=a(o,o)+a(c,f);return Math.abs(p)<1e-6?i:i-a(c,o)/p}evaluate(t,e,i){let s=e.slice(),r=1;for(;r<=t;){let e=0;for(;e<=t-r;)s[e]=o(u(s[e],1-i),u(s[e+1],i)),e++;r++}return s[0]}chordLengthParameterize(t,e){let i=[0],s=t+1;for(;s<=e;)i[s-t]=i[s-t-1]+n(this.points[s],this.points[s-1]),s++;s=1;let r=e-t;for(;s<=r;)i[s]/=i[r],s++;return i}findMaxError(t,e,i,s){let r=Math.floor((e-t+1)/2),h=0,n=t+1;for(;n<e;){let e=this.evaluate(3,i,s[n-t]),a=l(e,this.points[n]),o=a[0]*a[0]+a[1]*a[1];o>=h&&(h=o,r=n),n++}return{error:h,index:r}}}let d=function(t){let e="number"==typeof(t=t||{}).recursion?t.recursion:8,i="number"==typeof t.epsilon?t.epsilon:1.1920929e-7,s="number"==typeof t.pathEpsilon?t.pathEpsilon:1,r="number"==typeof t.angleEpsilon?t.angleEpsilon:.01,h=t.angleTolerance||0,n=t.cuspLimit||0,a=function(t,s,l,o,u,f,c,p,d,b,M){if(M>e)return;const g=Math.PI;let m=(t+l)/2,v=(s+o)/2,x=(l+u)/2,N=(o+f)/2,P=(u+c)/2,y=(f+p)/2,A=(m+x)/2,E=(v+N)/2,w=(x+P)/2,z=(N+y)/2,X=(A+w)/2,C=(E+z)/2;if(M>0){let e,a,M=c-t,m=p-s,v=Math.abs((l-c)*m-(o-p)*M),x=Math.abs((u-c)*m-(f-p)*M);if(v>i&&x>i){if((v+x)*(v+x)<=b*(M*M+m*m)){if(h<r)return void d.push([X,C]);let i=Math.atan2(f-o,u-l);if(e=Math.abs(i-Math.atan2(o-s,l-t)),a=Math.abs(Math.atan2(p-f,c-u)-i),e>=g&&(e=2*g-e),a>=g&&(a=2*g-a),e+a<h)return void d.push([X,C]);if(0!==n){if(e>n)return void d.push([l,o]);if(a>n)return void d.push([u,f])}}}else if(v>i){if(v*v<=b*(M*M+m*m)){if(h<r)return void d.push([X,C]);if(e=Math.abs(Math.atan2(f-o,u-l)-Math.atan2(o-s,l-t)),e>=g&&(e=2*g-e),e<h)return d.push([l,o]),void d.push([u,f]);if(0!==n&&e>n)return void d.push([l,o])}}else if(x>i){if(x*x<=b*(M*M+m*m)){if(h<r)return void d.push([X,C]);if(e=Math.abs(Math.atan2(p-f,c-u)-Math.atan2(f-o,u-l)),e>=g&&(e=2*g-e),e<h)return d.push([l,o]),void d.push([u,f]);if(0!==n&&e>n)return void d.push([u,f])}}else if(M=X-(t+c)/2,m=C-(s+p)/2,M*M+m*m<=b)return void d.push([X,C])}a(t,s,m,v,A,E,X,C,d,b,M+1),a(X,C,w,z,P,y,c,p,d,b,M+1)};return function(t,e,i,r,h,n){let l=s/h;l*=l,function(t,e,i,s,r,h){r.push([t[0],t[1]]);let n=t[0],l=t[1],o=e[0],u=e[1],f=i[0],c=i[1],p=s[0],d=s[1];a(n,l,o,u,f,c,p,d,r,h,0),r.push([s[0],s[1]])}(t,e,i,r,n,l)}}({pathEpsilon:8e-4});"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope&&(self.onmessage=t=>{if(null==t.data.data)return;let e=function(t,e){let r=[];for(let i=0;i<t.length;i++){let s=t[i];r.push([s[0]*e,s[1]*e,s[2]])}let h=function(t){let e=[],i=t[0];i&&e.push(i);for(let s=1;s<t.length;s++){let r=t[s];i[0]===r[0]&&i[1]===r[1]||(e.push(r),i=r)}return e}(r),n=function(t){let e=[0];if(t.length>5)for(let i=2;i<t.length-2;i++){let r=t[i-2],h=t[i],n=t[i+2];s(Math.atan2(r[1]-h[1],r[0]-h[0]),Math.atan2(n[1]-h[1],n[0]-h[0]))<=94/(180/Math.PI)&&e.push(i)}return e.push(t.length-1),e}(h),a=function(t,e,i){return new p(t,e,1e-5).segments}(h,n),l=function(t,e){let s=new i;for(let i=0,r=t.length;i<r;i++){let r=t[i];s.t=Math.max(s.t,r[1]+r[2]*e),s.l=Math.min(s.l,r[0]-r[2]*e),s.r=Math.max(s.r,r[0]+r[2]*e),s.b=Math.min(s.b,r[1]-r[2]*e)}return s}(function(t,e,i,s){if(t.length<1)return[];if(1===t.length)return[[1*t[0][0][0],1*t[0][0][1],t[0][0][2]]];let r=[];for(let e=0;e<t.length-1;e++){let i=t[e],h=t[e+1],n=[1*i[0][0],1*i[0][1],i[0][2]],a=[1*h[0][0],1*h[0][1],h[0][2]],l=[n[0]+1*i[2][0],n[1]+1*i[2][1]],o=[a[0]+1*h[1][0],a[1]+1*h[1][1]],u=[];d(n,l,o,a,s,u);for(let t=0;t<u.length-1;t++){let e=u[t];r.push([e[0],e[1],n[2]])}if(e+1===t.length-1){let t=u[u.length-1];r.push([t[0],t[1],n[2]])}}return r}(a,0,0,e),e);return function(t,e){let i=e.width,s=e.height;for(let r=0,h=t.length;r<h;r++){let h=t[r];h[0][0]=(h[0][0]-e.l)/i-.5,h[0][1]=(h[0][1]-e.b)/s-.5,h[1][0]=h[1][0]/i,h[1][1]=h[1][1]/s,h[2][0]=h[2][0]/i,h[2][1]=h[2][1]/s}}(a,l),{position:[l.centerX/e,l.centerY/e],segments:a}}(t.data.data.points,t.data.data.scale);self.postMessage({id:t.data.id,result:e})}),self})();