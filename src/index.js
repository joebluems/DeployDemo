import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {LineChart} from 'react-easy-chart';
import { CsvToHtmlTable } from 'react-csv-to-table';
import mlp from './nnet.png';
import rforest from './randomForest.png';
import bulb from './bulb.png';



class DeployOptions extends React.Component {
  render() {
   return (
      <form> 
      <label> <input name="champ" type="checkbox" /> Champion/Challenger
        ---> Specify Champion: <input type="text" value="ensemblejwb_001"/> 
      </label> 
      <img src={bulb} alt="Logo" />
      <br />
      <label> <input name="ab" type="checkbox" /> A/B Testing
        ---> Specify Proportions: <input type="text" value="0.8,0.1,0.1"/> 
      </label> 
      <img src={bulb} alt="Logo" />
      <br />
      <label> <input name="armed" type="checkbox" /> Multi-Armed Bandit
        ---> Bandit Parameters: <input type="text" value=" "/> 
      </label> 
      <img src={bulb} alt="Logo" />
      <br />
      <input type="submit" value="SUBMIT" />
      </form>
   );
  }
}

///// Get file input from user
class InputFile extends React.Component {
  render() {
    const filename = this.props.filename;
    return (
      <form >
       <label> Avaliable models in repository: <input type="text" value="jwb_ensemble001" /> </label>
       <input type="submit" value="UPLOAD" />
      </form>
    );
  }
}

class ScoreFile extends React.Component {
  render() {
    const filename = this.props.filename;
    return (
      <form >
       <label> Avaliable batch files in repository: <input type="text" value="batches.csv" /> </label>
       <input type="submit" value="UPLOAD" />
      </form>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props); this.state = {filename: 'features.csv'}
  }

  render() {
    var filename = this.state.filename;

    return (
      <div>
        <h1> User-Driven, Model Deployment Demo </h1>
	<h4> Second stage of a two-part demo. In part one, model(s) were trained. <br />
	In stage two, models that have been trained are put into production and monitored<br />
        The user can select which models to deploy, the method for orchestration and how to 
        </h4>
        <p><b>1. Select multiple models to deploy... </b></p>
        <InputFile onFileSubmit={this.handleFileInput} />
        <p><b>2. Select batch file to start scoring ... </b></p>
        <ScoreFile />
        <p><b>3. Select one deployment option... </b></p>
        <DeployOptions />
        <h2>Deploying the solution ... </h2>
        <br />
        <p><b>4. Canary Model monitors Incoming Features as an early-warning system for performance impacts...</b>
        <img src={bulb} alt="Logo" /> </p>
        <LineChart
         axes
         axisLabels={{x: 'date', y: 'data stability'}}
         margin={{top: 10, right: 10, bottom: 50, left: 50}}
         width={800} 
         interpolate={'cardinal'} 
         height={350}
         data={[ [ {x:1,y:1.0}, {x:2,y:1.1}, {x:3,y:0.8}, {x:4,y:1.5}, {x:5,y:1.4}, {x:6,y:1.1}, {x:7,y:1.3}, {x:8,y:1.5}, {x:9,y:1.7}, {x:10,y:1.7}, {x:11,y:1.9}, {x:12,y:1.7}, ] ]}
        />
        <p><b>5. Tracking performance over time with F1 statistic ...</b>
        <img src={bulb} alt="Logo" /> </p>
        <LineChart
         axes
         axisLabels={{x: 'date', y: 'data stability'}}
         margin={{top: 10, right: 10, bottom: 50, left: 50}}
         width={800} 
         interpolate={'cardinal'} 
         height={350}
         data={[ [ {x:1,y:0.6}, {x:2,y:0.62}, {x:3,y:0.63}, {x:4,y:0.61}, {x:5,y:0.68}, {x:6,y:0.58},
{x:7,y:0.44}, {x:8,y:0.56}, {x:9,y:0.66}, {x:10,y:0.65}, {x:11,y:0.68}, {x:12,y:0.62},
{x:13,y:0.65}, {x:14,y:0.68}, {x:15,y:0.65} ],
[ {x:1,y:0.6}, {x:2,y:0.61}, {x:3,y:0.63}, {x:4,y:0.64}, {x:5,y:0.65}, {x:6,y:0.64},
{x:7,y:0.63}, {x:8,y:0.62}, {x:9,y:0.65}, {x:10,y:0.62}, {x:11,y:0.63}, {x:12,y:0.67},
{x:13,y:0.63}, {x:14,y:0.62}, {x:15,y:0.61} ],
[ {x:1,y:0.55}, {x:2,y:0.52}, {x:3,y:0.49}, {x:4,y:0.54}, {x:5,y:0.56}, {x:6,y:0.57},
{x:7,y:0.52}, {x:8,y:0.54}, {x:9,y:0.55}, {x:10,y:0.58}, {x:11,y:0.61}, {x:12,y:0.62},
{x:13,y:0.63}, {x:14,y:0.63}, {x:15,y:0.65} ], ]}
        />
      </div>
    );
  }
}


ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

