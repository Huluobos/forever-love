timeTrans = function(ns) {  
    var d = new Date(ns);  
    var dformat = [ d.getFullYear(), d.getMonth() + 1, d.getDate() ].join('-');  
    return dformat;  
} 

module.exports = timeTrans;