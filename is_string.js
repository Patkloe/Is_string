/** ver 1.0**/

is_string = function(input) {
  if (Object.prototype.toString.call(input) === '[object String]')
    return true;
  else
    return false;   
    };
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));
/***** other script ******/
function is_string(input){
  var recup = typeof(input);
  if(recup === 'string')
     return true;
  return false;
  //return recup;
}
is_string('test');

/** ver 1.01 **/

function is_string(s){
  if(typeof(s)==="string")
    return true;
  return false;
}
is_string([1, 2, 4, 0]);
is_string('w3resource');
