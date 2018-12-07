'use strict';

var Sept = (function() {
    var words = [
        'abbbbbbbbbb',
        'acccccccccc',
        'adddddddddd',
        'aeeeeeeeeee',
        'affffffffff',
        'agggggggggg',
        'ahhhhhhhhhh',
        'aiiiiiiiiii',
        'ajjjjjjjjjj',
        'akkkkkkkkkk',
        'allllllllll',
        'ammmmmmmmmm'
    ];
    
    return {
        findWords: function(input) {
            let out = '';
            
            words.forEach(function(word) {
                if(word.includes(input))
                {
                    out += word + ',';
                }
            });            
            
            return out.split(',').slice(0, -1);
        },
        
        createWhisper: function(input) {
            let container = document.getElementById('result');
            let newChild = document.createElement('p');
            newChild.textContent = input;
            container.appendChild(newChild);
        }
    }
    
}());

let input = document.getElementsByTagName('input').item(0);
let result = document.getElementById('result');

input.addEventListener('keyup', function(event){
    result.innerHTML = '';
    
    if(!this.value) return;
    
    let words = Sept.findWords(this.value);    
    words.forEach(function(word){
        Sept.createWhisper(word);
    });
    
    for(let i = 0; i < result.children.length; i++)
    {
        result.children.item(i).addEventListener('click', function(){
            input.value = this.textContent;
            result.innerHTML = '';
        }); 
    }
    
});