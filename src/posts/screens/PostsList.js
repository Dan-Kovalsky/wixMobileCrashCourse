import React, {Component, PureComponent} from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from "react-native-navigation";

import {connect} from 'remx';

import {postsStore} from '../posts.store';
import * as postsActions from '../posts.actions';

class PostsList extends Component {

    constructor(props) {
        super(props);

        this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
        Navigation.events().bindComponent(this);

    }

    static get options() {
        return {
            topBar: {
                rightButtons: [
                    {
                        id: 'addPost',
                        text: 'Add'
                    }
                ]
            }
        };
    }

    static propTypes = {
        componentId: PropTypes.string,
        posts: PropTypes.array

    };

    pushViewPostScreen(post) {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'blog.ViewPost',
                passProps: {
                    // somePropToPass: 'Some props that we are passing'
                    post
                },
                options: {
                    topBar: {
                        title: {
                            text: 'Post1'
                        }
                    }
                }
            }

        });
    }

    navigationButtonPressed({buttonId}) {

        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: 'blog.AddPost',
                        passProps: {
                            someProp: 'some props'
                        }
                    }
                }]
            }
        });
    }

    componentDidMount() {
        postsActions.fetchPosts();
    }

    renderItem = ({item}) => (
        <Text onPress={() => this.pushViewPostScreen(item)}>
            {item.title}
        </Text>);

    render() {
        return (
            <View style={styles.container}>
                {/*<Text style={styles.text} onPress={this.pushViewPostScreen}>Posts List Screen</Text>*/}
                {/*<Text>{JSON.stringify(this.props.posts)}</Text>*/}
                <Text style={styles.text}>PostsList Screen</Text>
                <FlatList
                    data={this.props.posts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}



function mapStateToProps() {
    return {
        posts: postsStore.getPosts()
    };
}

export default connect(mapStateToProps)(PostsList);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3EDFF',
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    }
});
