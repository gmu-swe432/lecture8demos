/**
 * Created by jon on 9/21/16.
 */
self.addEventListener('message', function(e) {
    var n=1;
    var c = parseInt(e.data);

    for (var i=0,Pi=0;i<=c;i++) {
        Pi=Pi+(4/n)-(4/(n+2));
        n=n+4;
        if(i % 1000 == 0)
            self.postMessage({status: 'working', val: Pi});
    }
    self.postMessage({status: 'done', val: Pi});
}, false);
