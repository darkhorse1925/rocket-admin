 //todo css  
 const ToggleSwitch = ({onChange, toggle}) => {
  return (
		<input type="checkbox" onChange={onChange} checked={toggle}/>
  )
} 

export default ToggleSwitch;
