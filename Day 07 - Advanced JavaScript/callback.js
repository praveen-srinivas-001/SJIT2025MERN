/*function func() {
    console.log('welcome to the community');
    callback();
}
function callback() {
    console.log('welcome to the community, ');
}
func();*/

// Example
function formSubmit(callback) {
    if(callback()){
        console.log('Form Submitted Successfully');
    }else{
        console.log('form validation failed');
    }
}
function callback() {
    // form validation
    return false;
    console.log('form validation Successful');
    return true;
}
formSubmit(callback);