import React, {Component} from 'react';

class RequestServer extends Component  {
    state = {
        data: null
    };
    
    componentDidMount() {
        // calls fetch function once the component does mount
        this.callBackendAPI()
        .then(res => this.setState({data: res.express}))
        .catch(err => console.log(err));
    }
    //fetches the GET route from server.
    //the route we are fetching matches the GET route from server.js
    // in this case the route is /express_backend
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();
        
        if(response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };
    
    render() {
        return(
            <div className="RequestServer">
               <p className="request"></p>
            </div>
        );
    }
    
}
export default RequestServer;
