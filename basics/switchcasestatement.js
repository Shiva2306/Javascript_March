

//switch case statements

let browser= '  Edge  ';

switch (browser.toLowerCase().trim()) {
    case 'chrome': console.log('this is chrome'); break;
    case 'firefox': console.log('this is firefox'); break;
    case 'edge': console.log('this is edge'); break;
    case 'safari': console.log('this is safari'); break;

    default: console.log('no browser matching'); break;
}

//Performance wise - switch case statements are better compared to if - else statements