
import React, { Component } from 'react';
import './Counter.css'




export default class Counter extends Component {


    constructor() {
        super();
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

    }

    increment(by) {

            this.setState(
                
             (prevState)=>   {
                
                return {counter: prevState.counter + by}
            }
            
            );
        //console.log("Increment in Parent");
    }

    
    decrement(by) {

        this.setState(
            
         (prevState)=>   {
            
            return {counter: prevState.counter - by}
        }
        
        );
    //console.log("Increment in Parent");
}

    reset() {

        //this.state.counter++;
        this.setState({
            counter: 0
        });
    }

    render() {
      return (
        <div className="counter">
  
          <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          
          <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          
          <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement}/>

          <span className="count">{this.state.counter}</span>
          
          <div>
          <button className="reset" onClick={this.reset}>Reset</button>
        </div>
        </div>
      );
    }
  }

export  class CounterButton extends Component {


    constructor() {
        super();
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        //this.reset = this.reset.bind(this);

    }

    render() {
        return (
            <div className="counterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)}> + {this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}> - {this.props.by}</button>
              

            </div>
        )
    }   



    increment() {
        //console.log("Increment in Child");

      this.props.incrementMethod(this.props.by);
    }

    
    decrement() {
        //console.log("Increment in Child");

      this.props.decrementMethod(this.props.by);
    }

}


