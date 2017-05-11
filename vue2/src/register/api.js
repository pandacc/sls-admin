import request from 'apis/';

// console.log(request);

var api_methods={};
for (var i = 0; i < request.length; i++) {
    if (typeof request[i]==='object' && request[i].list && Array.isArray(request[i].list)) {
        for(var j=0;j<request[i].list.length;j++){
            api_methods['api_'+request[i].module+'_'+request[i].list[j].method]=(function(n,m){
                return function(data, fn, opts){
                    this.$$ajax(request[n].list[m].type, request[n].list[m].path, data, fn, opts);
                };
            })(i,j);
        }
    }
}

// console.log(api_methods);

export default api_methods;