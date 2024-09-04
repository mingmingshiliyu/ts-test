//export的函数组件，之所以用<xxx/>进行实例化，而不是用new XXX进行实例化，是因为前者可以让react管理组件生命周期

import React from "react"

//type State ={isLoading:true}
//class Si extends React.Component<Props,State>{state={isLoading：false}}
//并没有定义props,state自动推导出类型.props类型怎么定位成Props的，也没有显式定义props参数，怎么传进来的
//函数只能接收一个参数？为什么书里这么说？(props,ref)为什么可以？
type User ={name:"aaa"}

type Request =
| {entity:'user',data:User}
| {entity:'location',location:Location}

function get<R extends Request>(entity:R['entity']):Promise['data']{


}

//定义组件
type Props={
    isDisabled?:boolean
    size: 'Big'|'Small'
    onClick(event:React.MouseEvent<HTMLButtonElement>):void
}
export function FancyButton(props:Props){
    return (
        <button
        disabled={props.isDisabled||false}
        onClick={event=>{
            props.onClick(event)
        }}
        ></button>
    )
}

<FancyButton size='Big' onClick={()=>console.log("asdad")}/>