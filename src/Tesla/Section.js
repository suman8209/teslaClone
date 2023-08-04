import React from 'react'

function Section(props) {
	return (
		<>
			<div className='main' id={props.id}>
				<div className='carname'>
					<h1>{props.name}</h1>
					<p>{props.para}</p>
				</div>
				<div className='carbutton'>
					<div className='button'>
						<a href="" className='leftbutton'>{props.leftbtn}</a>
						{
							props.rightbtn && <a href="" className='rightbutton'>{props.rightbtn}</a>
						}

					</div>
					{
						props.arrow && <img src="../images/down-arrow.svg" className='arrow' />
					}

				</div>
			</div>
		</>
	)
}




export default Section