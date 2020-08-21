import React,{Component} from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
          <div>
           <input
            placeholder="Busca tu producto"
            type= "text"
            />
            <input type="submit"
            value="Buscar"
            />
          </div>
          <div>

          </div>
      </div>
    )
  }
}
