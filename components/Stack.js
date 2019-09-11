import Bill from '../components/Bill';

const style = { position: 'absolute', left: 0, top: 0, display: 'block', transformStyle: 'preserve-3d', }

const multipleBills = (count) => {
  const bills = [];
  for(let i = 0;i<count;i++){
    // bills.push(<Bill key={i} style={{transform: `translate3D(${i * 2}px, ${i * 1}px, ${i * 2}px)`}} />);
    bills.push(<Bill key={i} style={{transform: `translate3D(${i * 0}px, ${i * 0}px, ${i * 2}px)`}} />);
  }
  return bills;
}

const Stack = (props) => (
  <span style={{...style, ...props.style}}>
    {multipleBills(props.count)}
  </span>
)

export default Stack;