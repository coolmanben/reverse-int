module.exports = function reverse (n) {
    if ( n == undefined ) return 0 ;
    var n_str = n.toString() ;
    var res_str = n_str.replace('-' , '') ;
    return res_str.split('').reverse().join('');
}
