import React,{ Component} from 'react';
import Axios from 'axios';
class Token extends Component {
    state = { 
        user:{token:""}
     }

    changeHandler =(e) =>{
        const {user} = this.state;
        user[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ user});
    }
    
    submitHandler = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:5000/token_verification',this.state.user)
        .then(res=>
            {
             if(res.status===200) {window.location.href="/aftersubmit"}
             
            } )
        
        .catch(err=>console.log(err));
    }
    render() { 
        return ( 
        
        <>
        <div className="token">
            <h1>Please verfy your Email</h1>
            <div className="token_content">
                
                <p>Enter the Token from your Email</p>
            <form onSubmit={this.submitHandler}>
                <input type="text" name="token" value={this.state.user.token} onChange={this.changeHandler} />
                <input className="submit" type="submit" value="Submit" size="25"/>
                
            </form>
        </div>
        </div>
        </> );
    }
}
 
export default Token;