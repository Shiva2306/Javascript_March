
//0 to 100
let marks = 100;
switch (marks) {
    case 90:
        console.log('hi');
        break;
    case 100:
        console.log('hello');
        break;
    default:
        console.log('bye!');
        break;
}

console.log('===========');

let isActive = true;//false
switch (isActive) {
    case true:
        console.log('pass');
        break;
    case false:
        console.log('fail');
        break;
    default:
        console.log('no result');
        break;
}



//use cases for switch case:
//1. cross browser logic
//2. cross os/platforms: win/linux/mac
//3. cross system: local, remote
//4. cross environment: dev/qa/stage/uat/prod
//5. RBAC: user permission: admin, customer, seller, partner, vendor, distributor, guest
//6. locator strategy: id, name, role, text, xpath, css




