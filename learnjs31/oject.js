// 
const credentials = {
    username: "Admin",
    password: "admin123",


data: {

    fathername: "abc",
    mothername: "xyz"
}
}

console.log(credentials.username)
console.log(credentials.password)
console.log(credentials.data.mothername)
console.log(credentials['username'])
console.log(credentials['data']['mothername'])

// 1.Edit object

credentials['username']="padma"
console.log(credentials.username)

//--------------------------------------------
console.log(credentials.firstname)
//op=undefined
//----------------------------------

//2.add object

credentials['firstname'] = "veena"
console.log(credentials.firstname)


//3.delete object

delete credentials['password'] 
console.log(credentials.password)
//op=undefined

// ----------------------------------------

const menuitems = {
    menu1 : "admin",
    menu2 : "pin",
    menu3 : "leave"
}
 for(let item in menuitems){
    console.log("loop starts")
    console.log(menuitems[item])
    console.log("loop ends")
 }

//  -----------------------------------------