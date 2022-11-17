import React, { Component } from 'react'
import './filter.css'

export class filter extends Component {
  render() {
    return (
        <form class="flex">
        <div class="box">
        <span>City/Street</span>
        <input type="text" placeholder="Location"></input>
        </div>
        <div class="box"><span>Property Type</span>
        
        <input type="text" placeholder="Property Type"></input>
        </div>
        <div class="box"><span>Price Range</span>
        <input type="text" placeholder="Price Range"></input></div>
        <div class="box"><h4>Advance Filter</h4></div>
        <button class="btn1"><i class="fa fa-search"></i></button>
        </form>
    )
  }
}

export default filter