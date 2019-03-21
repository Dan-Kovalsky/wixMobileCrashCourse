import React, {Component, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from "react-native-navigation";

import {connect} from 'remx';

import {postsStore} from '../store';
import * as postsActions from '../actions';

class PostsList extends Component {

    constructor(props) {
        super(props);

        this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
        // this.pushAddPostScreen = this.pushAddPostScreen.bind(this);
        Navigation.events().bindComponent(this);
        // this.state = {isPostExist : false}
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

    // pushAddPostScreen(){
    //     Navigation.push(this.props.componentId, {
    //         component: {
    //             name: 'blog.AddPost',
    //             passProps: {
    //                 somePropToPass: 'another props that we are passing'
    //             }
    //             // ,
    //             // options: {
    //             //     topBar: {
    //             //         title: {
    //             //             text: 'Add Posדשגt'
    //             //         }
    //             //     }
    //             // }
    //         }
    //     });
    // }

    pushViewPostScreen() {
        // if (!this.state.isPostExist){
        //     alert('Post Deleted')
        //     return
        // }
        Navigation.push(this.props.componentId, {
            component: {
                name: 'blog.ViewPost',
                passProps: {
                    somePropToPass: 'Some props that we are passing'
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
                        // ,
                        // options: {
                        //     topBar: {
                        //         title: {
                        //             text: 'Modal'
                        //         }
                        //     }
                        // }
                    }
                }]
            }
        });
    }

    componentDidMount() {
        postsActions.fetchPosts();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} onPress={this.pushViewPostScreen}>Posts List Screen</Text>
                <Text>{JSON.stringify(this.props.posts)}</Text>
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
