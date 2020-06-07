import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./services/service";

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    //console.log(data);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <AppBar className={styles.appBar} position="static" style={{ backgroundColor: "black" }}>
          <Toolbar>

            <Typography variant="h6" className={styles.title}>
              <Button color="inherit" style={{ border: '2px solid' }}> COVID19 Dashboard </Button>
            </Typography>

          </Toolbar>
        </AppBar>

        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

      </div>
    );
  }
}

export default App;
