//具名函数
function add(a:number,b:number):number{
    return a+b
}

//函数表达式
let greet=function(name:string){
    return "return"+name
}

//箭头函数表达式
let greet3=(name:string)=>{
    return "return"+name
}
//箭头函数表达式简写
let greet4 = (name:string)=> "return"+name

//函数构造方法
let greet5=new Function('name','return "hello"+name')

//通常需要注解参数的类型，返回值类型不要求注解

//可选参数和默认参数,可选参数不能设置默认值
function log(name:string="",age?:number){
    return age
}
type Context = {
    name?:string
    userid?:string
}
function logme(msg:string,context:Context={}){
    return msg
}

//剩余参数,一个函数最多一个，只能在结尾
function sum(...numbers:number[]):number{
    return numbers.reduce((total,n)=>total+n,0)
}

interface Console{
    log(msg?:any,...params:any[]):void
}

//call apply bind
function addNum(a:number,b:number):number{
    return a+b
}
add(1,2)
add.apply(null,[10,20])
add.call(null,10,20)
add.bind(null,10,20)() //bind生成新函数，通过(),call,apply调用

//调用签名
type Log=(msg:string,userId?:string)=>void
let loglog:Log=(
    msg,
    userId="not signed in"
)=>{
    console.log("nihao")
}

//上下文类型推导
function times(
    f:(index:number)=>void,
    n:number
){
    f(n)
}

times(n=>console.log(n),4)

//函数类型重载
type loo={
    (msg:string,id?:string):void
}
// 等效于
type lo=(msg:string,id?:string)=>void

//函数类型重载
type Reservation ={}
type Reserve={
    (from:Date,to:Date,dest:string):Reservation
    (from:Date,dest:string):Reservation
}
let resv:Reserve=(
    from: Date,
    destPo:Date|string,
    dest?:string
)=>{
    if(destPo instanceof Date&&dest!==undefined){
        //(from:Date,to:Date,dest:string):Reservation逻辑
    }else if(typeof destPo==='string'){
        //(from:Date,dest:string):Reservation逻辑
    }
    return {} //Reserve是一个返回类型为Reservation的函数，且有两种类型，取决于输入的参数
}

type CreateElement={
    (tag:'a'):HTMLAnchorElement
    (tag:'canvas'):HTMLCanvasElement
    (tag:'table'):HTMLTableElement
    (tag:string):HTMLElement
    // wasCalled:boolean
}
let createElement:CreateElement=(tag:string)=>{
    switch (tag) {
        case 'a':
            return document.createElement('a') as HTMLAnchorElement;
        case 'canvas':
            return document.createElement('canvas') as HTMLCanvasElement;
        case 'table':
            return document.createElement('table') as HTMLTableElement;
        default:
            return document.createElement(tag);
    }
}
function createElement1(tag:string){
    // createElement.wasCalled=true //修改参数
    return new HTMLElement()
}

//add
class Animal{}
class Bird extends Animal{
}
(b:Bird)=>Bird
//等价于(b:Bird)=>{return Bird}