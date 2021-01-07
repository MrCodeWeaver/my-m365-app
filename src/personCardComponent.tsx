import { PersonCard } from '@microsoft/mgt-react';
import React, { Component } from 'react';

interface IPersonCardComponentProps {
  UnusedName?: string;
}

interface IPersonCardComponentState {
  value: string;
}

export class PersonCardComponent extends Component<IPersonCardComponentProps, IPersonCardComponentState> {
  constructor(props: IPersonCardComponentProps) {
    super(props);
    
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
       <form>
           <label>
            Value:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
           </label>
            <input type="submit" value="Submit" />
        </form>
        Hello, {this.state.value}
          { (this.state.value) && <PersonCard
          userId={this.state.value}>
        </PersonCard> }
      </div>
    )
  }
}