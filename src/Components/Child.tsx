import React, { LegacyRef } from "react"

//forwardRef转发ref到组件内部（child）的dom上，外层通过ref操控dom
//ref用于html元素，接受底层dom元素作为current
//ref用于自定义class组件，ref接受组件实例作为current
//不能在函数组件使用ref，因为函数组件没实例
const Child = React.forwardRef((props,myRef:LegacyRef<HTMLInputElement>)=>
    <div>
        <p>something</p>
        <input defaultValue='ref成功转发到child组件内部input节点上' ref={myRef}>otherthing</input>
    </div>
)

export default Child;