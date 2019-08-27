var beowulf = require('../lib')
let url = beowulf.config.get('uri');
beowulf.api.setOptions({ url: url,useAppbaseApi: true });


// beowulf.api.getAccounts(['kietwallet'], function(err, result){
//     console.log(err, result);
// });

beowulf.api.getTransaction('ed9aa41e19138fb341a95af538dad7af5fc92916', function(err, result){
    console.log(err, result);
});
