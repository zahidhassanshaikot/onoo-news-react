import React, {Component} from 'react';
import Switch from 'react-toggle-switch';

class ToggleButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            switched: false
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.switched===true){
            document.body.classList.add('sg-dark');
        }else{
            document.body.classList.remove('sg-dark');
        }
    }
    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !prevState.switched
            };
        });
    };

    render() {
        return (
            <div>
                <Switch onClick={this.toggleSwitch} on={this.state.switched}>
                    { this.state.switched===false && (
                        <span>Dark Mode <i className="fa fa-toggle-off"></i></span>
                    )}
                    { this.state.switched===true && (
                        <span>Dark Mode <i className="fa fa-toggle-on"></i></span>
                    )}
                </Switch>
            </div>
        );
    }



//     constructor(props) {
//         super(props);
//         this.state = { darkMode: false }
//         this.clicky = this.clicky.bind(this);
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if(this.state.darkMode===true){
//             document.body.classList.add('sg-dark');
//         }else{
//             document.body.classList.remove('sg-dark');
//         }
//     }
//
//     clicky=(event) => {
//         event.preventDefault();
//         this.setState(prevState => ({
//             darkMode: !prevState.darkMode
//         }));
//     }
//
//     render () {
//         return (
//             <div>
//                 { this.state.darkMode===false && (
//                     <i className="fa fa-toggle-off" onClick={this.clicky}></i>
//                 )}
//                 { this.state.darkMode===true && (
//                     <i className="fa fa-toggle-on" onClick={this.clicky}></i>
//                 )}
//
//             </div>
//         )
//     }

}

export default ToggleButton;