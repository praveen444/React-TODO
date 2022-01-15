import axios from "axios";


class HelloWorldService {

    executeHelloWorldService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello-world');        
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello-world-bean');        
    }

    executeHelloWorldPathVariableService(name) {
        console.log('executed service')
        // let username = 'praveen'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        // console.log(basicAuthHeader);


        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // , 
        //     {
        //         headers : {
        //             authorization: basicAuthHeader,
        //             'Access-Control-Allow-Origin': '*'
        //         }
        //     }
        );        
    }


}

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

export default new HelloWorldService();