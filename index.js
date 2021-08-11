const texts=['Web Developer ','Guitarist ', 'Photographer '];
let count=0;
let index=0;
let currentText='';
let letter='';

(function type(){
  if (count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index=0;
  }
  setTimeout(type, 250);

}());
























// let input = prompt('what would u like to do?');
// const todos = ['janesh', 'ruby'];
// while (input!= 'quit' && input!='q'){
//     if (input === 'lists'){
//         for (let i=0; i<todos.length; i++){
//             console.log(`${i}: ${todos[i]}`)
//         }
    
//     } else if (input==='new'){
//         const newtodo = prompt('ok,whats new?');
//         todos.push(newtodo);
//         console.log(`${newtodo} is added on the list`)      
    
//     } else if (input==='delete'){
//         const index = parseInt(prompt('what u would like delete?'));
//         if  (!Number.isNaN(index)){
//             const deleted = todos.splice(index , 1)
//         }
//     }
//     input = prompt('what would u like to do?');
// }

// 
// function capitalizeFirstLetter(x) {
//      return x.charAt(0).toUpperCase() + x.slice(1);
//    }
   
//    console.log(capitalizeFirstLetter('eggplant'));
