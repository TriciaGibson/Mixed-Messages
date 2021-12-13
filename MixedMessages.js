const Message = () => {
let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'Believe in yourself';
        case 1:
            return 'You are smart';
        case 2: 
        return 'You are loved';
    }
};
console.log(Message());

const Messages2 = () => {
const arr2 = ['You are courageous', 'you are inspiring', 'you are important'];
return arr2[Math.floor(Math.random() * 3)];
};
console.log(Messages2());

const MessagesArray = ["You are strong", "Never give up", "Be kind"];
for (let i = 0; i < MessagesArray.length; i++){
    console.log(MessagesArray[i]);
};
