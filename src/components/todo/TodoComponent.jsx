import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';  
import AuthenticationService from './AuthenticationService';
import TodoDataService from '../../api/todo/TodoDataService'; 

class TodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values){   

        let username = AuthenticationService.getLoggedInUserName()

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            TodoDataService.createTodo(username, todo)
                .then(() => this.props.history.push('/todos'))
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push('/todos'))
        }
        
        console.log(values);

        console.log(values)
    }

    componentDidMount() {

        console.log("in TOdocomponents componentDidMount username")


        if(this.state.id===-1) {
            return
        }
        
        let username = AuthenticationService.getLoggedInUserName()

        console.log("in TOdocomponents componentDidMount username: " + username)

        // if(!username)
        // {

        // }
        
        TodoDataService.retrieveTodo(username, this.state.id)
               // .then(response => console.log(response))
             .then((response) => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
             }))
             //console.log(response)
             
    }


    validate(values) {
        let errors = {}
        if(!values.description) {
            errors.description = 'Enter a Description'
        } else if(values.description.length<5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target Date'
        }

        return errors

    }


    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                    initialValues={{
                        description:this.state.description,
                        targetDate:this.state.targetDate
                    }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" 
                                                                className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" 
                                                                className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )   
                        }
                    </Formik>
                
                </div>                
            </div>
        )
    }
}

export default TodoComponent