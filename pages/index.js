import { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router'
import FancyLink from '../components/FancyLink';
import { red } from 'ansi-colors';
import Stack from '../components/Stack';
import _ from 'lodash';

import {withRouter} from 'next/router'
import axios from 'axios';

const defaultCount = 5;

class Index extends Component {
  state = { count: 1, stacks: 1 }

  constructor() {
    super();
    this.debouncedUpdateRouteCount = _.debounce(this.updateRouteCount, 1000);
  }

  componentDidMount() {
    this.setState({count: this.props.router.query.count || defaultCount});
  }

  static getInitialProps = async ({ query }) => {
    const res = await axios.get('https://api.exchangeratesapi.io/latest?base=USD');
    const conversionRates = res.data.rates;

    const usd = query.count || defaultCount;
    const yen = usd * conversionRates['JPY'];

    return {
      yen
    };
  }

  updateRouteCount = (count) => {
    const href = `/?count=${count}`;
    Router.replace(href, href,{ shallow: false })
  }


  updateCount = (e) => {
    const count = Number(e.target.value);
    this.debouncedUpdateRouteCount(count);
    if(count < 1) {
      return;
    }
    this.setState({count})
  }

  updateStacks = e => {
    const stacks = Number(e.target.value);
    if(stacks < 1) {
      return;
    }
    this.setState({stacks})
  }

  renderStacks = () => {
    const stacks = [];
    // const stackCounts = [];
    const equalAmount = Math.floor(this.state.count / this.state.stacks);
    let remainder = this.state.count % equalAmount;

    for(let i = 0; i < this.state.stacks;i++){
      let amt = equalAmount;
      if(remainder > 0){
        amt += 1
      }
      // stackCounts.push(amt);
      stacks.push(<Stack count={amt} key={i} style={{transform: `translate3D(${i * 200}px, 0px, 0px) rotate3d(1, 0, 0, 90deg)`}} />);

      remainder -= 1;
    }


    // stacks = this.state.count / this.state.stacks;


    // const perStack = Math.floor();
    // const remainder = 1;
    // const stacks = [];
    // const numStacks = 1;

    // for(let i = 0; i < numStacks;i++){
    //   stacks.push(<Stack count={perStack} key={i} />);
    // }

    return stacks;
  }

  render() {
    return (
    <div>
    <p>Hello World!</p>
    <p><Link href="/about" passHref><FancyLink>hello world</FancyLink></Link></p>
    
    <label htmlFor="count">How many do you want to see?</label>
    <input type="number" id="count" onChange={this.updateCount} defaultValue={this.state.count} min="1" />

    <label htmlFor="stacks">How many stacks?</label>
    <input type="number" id="stacks" onChange={this.updateStacks} defaultValue={this.state.stacks} min="1" />
    
    <div style={{position: 'relative', perspective: 200, display: 'block', width: 100, height: 100,marginTop: 500,marginLeft: 500}}>
    {this.renderStacks()}
    </div>

    {this.state.count} US Dollars is equal to {this.props.yen} Japanese Yen
    </div>
    )
  }
}

export default withRouter(Index);