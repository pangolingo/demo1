// source: https://www.enchantedlearning.com/math/money/bills/one/
const actualSize = {
  w: 156.956, // mm
  h: 66.294,
  t: 0.10922 // thickness
}
const scale = 1;

const style = { width: actualSize.w * scale, height: actualSize.h * scale, background: 'green', display: 'block', transformStyle: 'preserve-3d', border: '1px solid black', position: 'absolute', left: 0, top: 0,  backfaceVisibility: 'visible' }

const Bill = (props) => (
  <span style={{...style, ...props.style}} />
)

export default Bill;