const account = {
    balance: 120,
    isBlocked: false,
}

const {balance, isBlocked} = account

if (isBlocked){
    console.log("Account blocked")
}
 
if (balance < 100){
    console.log("Low balance")
    
} else {
    console.log("OK")
}


