const Message1 = () => {
let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'You are enough';
        case 1:
            return 'You are smart';
        case 2: 
            return 'You are loved';
        }
    };
    console.log(Message1());
    
    const Message2 = () => {
    const arr2 = ['You are courageous', 'You are inspiring', 'You are important'];
    return arr2[Math.floor(Math.random() * 3)];
    };
    console.log(Message2());
    
    let Messages3 = () => {
    let randomIndex = ['You are unique', 'You deserve happiness', 'You are capable'];
    return randomIndex[Math.floor(Math.random() * 3)];
    };
    console.log(Messages3());
