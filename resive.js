const para  =  document.querySelector('#paragraph');
const sub = new URLSearchParams(window.location.search);

sub.forEach((value ,key )=>{
    para.append(`${key} = ${value}`);
    para.append(document.createElement('br'))


});