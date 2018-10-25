import React, { Component } from 'react';

import './App.css';

import Car from './Car/Car'

export default class App extends Component {
  state = {
        cars: [
            {key: 'n1', name: 'Ford', year: '2016'},
            {key: 'n2', name: 'Audi', year: '2018'},
            {key: 'n3', name: 'Mazda', year: '2015'}
            ],
      pageTitle: 'React Components',
      showCars: false
  };

    onChangeName = (name, index) => {

      const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
       cars[index] = car;
        this.setState({ cars })
      }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    onDeleteHandler = (index) => {
      const cars = [...this.state.cars];
      cars.splice(index, 1);
      this.setState({ cars})

    }

  render() {
      const style = {
          color: '#000',
          textAlign: 'center'
      };

      let cars = null;

      if (this.state.showCars) {
          cars = this.state.cars.map((car, index)=> {
              const {name, year} = car;
              return (
                  <Car
                      key = {index}
                      name = {name}
                      year = {year}
                      onChangeName = {(event) => this.onChangeName(event.target.value, index) }
                      onDelete = {(event) => this.onDeleteHandler(index) }
                  />
              );
          })
      }


    return (
      <div style={ style }>
        <h1>{this.state.pageTitle}</h1>

        <button onClick ={this.toggleCarsHandler}>Toggle Cars</button>
         <div style = {{
             width: 400,
             margin: 'auto',
             marginTop: '20px'
         }
         }>
          {cars}
         </div>

      </div>
    );
  }
}
