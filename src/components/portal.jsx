import React, { Component,StrictMode } from 'react';
import { createPortal } from 'react-dom';


class Portal extends Component {
    constructor(props) {
        super(props)
         this.mountNode = document.createElement('div')
    }

    componentDidMount() {
        const mount = document.querySelector('.mount')
        mount.appendChild(this.mountNode)
    } 

    render() { 
        console.log(this.props.name)
        return createPortal(
            <StrictMode>
                <div ref="aaa">Portal</div>
            </StrictMode>           
       , this.mountNode);
    }
}
 
export default Portal;