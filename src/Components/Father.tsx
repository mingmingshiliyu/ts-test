import React, { LegacyRef, Ref, RefObject } from 'react'
import Child from './Child';
export class Father extends React.Component{
    input:RefObject<HTMLInputElement>
    constructor(props:any){
        super(props)
        this.input=React.createRef();
    }

    handleClick=()=>{
        const input=this.input.current
        input?.focus();
        input?.setAttribute("height","100px")
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}></button>
                <Child ref={this.input}></Child>
            </div>
        )
    }

}