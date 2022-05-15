import React, { PureComponent } from 'react';


const NavBar = ({total, onReset}) => {
    return ( 
        <nav>
        <span>NAVBAR</span>
        <span>{total}</span>
        <button onClick={onReset}>Reset</button>
    </nav>
     );
}
 
export default NavBar;

// class NavBar extends PureComponent {
//     render() { 
//         return (
//             <nav>
//                 <span>NAVBAR</span>
//                 <span>{this.props.total}</span>
//                 <button onClick={this.props.onReset}>Reset</button>
//             </nav>
//          );
//     }
// }
 
// export default NavBar;