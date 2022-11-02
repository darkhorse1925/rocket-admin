import './radio.css'
import cake from '../assets/cake'

const Radiocard = ({item}) => {
return (
		<label className='custom-radio' htmlFor={item.name}>
			<input type="radio" id={item.name} name={item.name} />
			<span className="radio-btn">
				<img src={item.img === "cake" ? cake : item.img} alt="leads" />
				<div>
					<p className="bigText">{item.name}</p>
					<p className="smallText">{item.desc}</p>
				</div>
			</span>
		</label>
)
}
export default Radiocard
