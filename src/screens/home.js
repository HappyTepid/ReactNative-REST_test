import React from 'react';
import {
    Alert,
    AsyncStorage
} from 'react-native';
import {
  Body,
  Container,
  Content,
  Right,
  Text,
  CheckBox,
  List,
  ListItem,
  Fab,
  Icon
} from 'native-base';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'RestTest'
  };

  constructor(props) {
    super(props);

    this.state  = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchDataFromApi();
  }

fetchDataFromApi = ()  => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  this.setState({
    noDataWording : 'Trying to load data from the API...'
  });

  setTimeout(() => {
    if (this.state.data.length === 0) {
      this.setState({
        noDataWording : 'An error occurred! We\'ll keep retrying in the background. Please try again in a little while.' 
      });
    }
  }, 5000);

  fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        data: res
      });
    })
    .catch(error => {
      this.setState({});
    })
};

  /*** Render ***/
  render() {
    if (this.state.data.length !== 0) {
      return (
        <Container>
          <Content>
            <List>
              {this.state.data.map(p => {
                return (
                  <ListItem key={p.name}>
                    <Body>
                      <Text>
                        {p.userId} - {p.id} - {p.title} - {p.completed.toString()}
                      </Text>
                    </Body>
                  </ListItem>
                );
              })}
            </List>
          </Content>
        </Container>
      );
    } else {
      return (
        <Text>
          {this.state.noDataWording}
        </Text>
      );
    }
  }
}