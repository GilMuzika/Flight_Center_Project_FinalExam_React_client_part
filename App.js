import React from'react';
import './App.css';
import './common_style.css';
import imagesMap from'./images/imagesMap';
import Login from'./components/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import navbar from'./components/navbar';


class App extends React.Component {

	render() {
		const navigationComponentsActual = new Map();

		
		navigationComponentsActual.set('Login', Login);
		const navigationComponentsNames = ['Login'];


		const navigationRoutesArr = [];
		for(let s in navigationComponentsNames) {
			navigationRoutesArr.push(
				<Route exact path={`/${navigationComponentsNames[s].toLowerCase()}`} component={navigationComponentsActual.get('Login')} />
			);
		}

				return (
				<div>
					<div class="Box">

					</div>
					<div class="onTopOfTable">
						<div style={{margin: '10px', padding: '10px'}}>
							<table class="upperBox" border="0" cellspacing="0" cellpadding="0" style={{background: '#b3c8d7', padding: '0', margin: '0', border: '0px', borderSpacing: '0', borderCollapse: 'collapse'}}>
								<tr>
									<td><img style={{verticalAlign: 'top'}} src={imagesMap().get('upperLeftCorner')} width="8" /></td>
									<td></td>
									<td><img style={{verticalAlign: 'top'}} src={imagesMap().get('upperRightCorner')} width="8" /></td>
								</tr>
								<tr>
									<td></td>
									<td style={{verticalAlign: 'middle'}}>
										Flights Management Center
									{/*<img src={imagesMap().get('search_small')} />*/}
									</td>
									<td></td>
								</tr>
								<tr>
									<td><img style={{verticalAlign: 'bottom'}} src={imagesMap().get('bottomLeftCorner')} width="8" /></td>
									<td></td>
									<td><img style={{verticalAlign: 'bottom'}} src={imagesMap().get('bottomRightCorner')} width="8" /></td>
								</tr>
							</table>
						</div>
					</div>
			<BrowserRouter>
				<table class="FlightsTable">
					<tr style={{textAlign: 'left'}}>
						<td width="5">
							&nbsp;<br/>
						</td>
						<td width="0"></td>
						<td style={{textAlign:'left'}}>
								{/*		הסרגל העליון	*/}	 
								{	navbar(navigationComponentsNames)	}
						</td>
					</tr>
				</table>
				<br />
				{/* <!-- class "FlightsTable" uses different colors for "<th>" and "<tr>" elements --> */ }
				
				<table class="FlightsTable" name="search_text_and_buttons_table">
					<thead>
						<tr>
							<th>&nbsp;</th>

						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								{/*		אזור הפעילות	*/}
								{ navigationRoutesArr }
								
								





								
							</td>
						</tr>
					</tbody>
				</table>
			</BrowserRouter>
				<br />






				<div class="Box">

				</div>

				


				</div>
			);
	  }
}

export default App;
