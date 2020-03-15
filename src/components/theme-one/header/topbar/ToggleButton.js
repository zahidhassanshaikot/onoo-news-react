import React, {Component} from 'react';
import Switch from 'react-toggle-switch';
import Cookies from 'universal-cookie';

class ToggleButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            switched: false
        };
    }
    componentDidMount() {
        const cookies = new Cookies();
        if(cookies.get('themeDarkMode')=='true'){
            this.setState({switched:true})
        }else{
            this.setState({switched:false})
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const cookies = new Cookies();

        if(this.state.switched===true){
            document.body.classList.add('sg-dark');
            cookies.set('themeDarkMode', true, { path: '/' });
        }else{
            document.body.classList.remove('sg-dark');
            cookies.set('themeDarkMode', false, { path: '/' });
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
                        <span> <i className="fa fa-sun-o"></i></span>
                    )}
                    { this.state.switched===true && (
                        <span> <i className="fa fa-moon-o"></i></span>
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