import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from "react-native-navigation";

import * as postsActions from '../posts.actions';

class ViewPost extends Component {
    constructor(props){
        super(props);
        this.onPostDeletePressed = this.onPostDeletePressed.bind(this);
        this.onEditPostPressed = this.onEditPostPressed.bind(this);
    }

    static propTypes = {
        componentId: PropTypes.string,
        post: PropTypes.object
    };


    onPostDeletePressed = async () => {
        Navigation.pop(this.props.componentId);

        await postsActions.deletePost(this.props.post.id);
    };

    onEditPostPressed = () => {
        let post = this.props.post;
        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: 'blog.EditPost',
                        passProps: {
                            someProp: 'some props',
                            post
                        }
                    }
                }]
            }
        });
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>View Post Screen</Text>
                <Text>{JSON.stringify(this.props.post)}</Text>
                <Text style={styles.deleteText} onPress={this.onPostDeletePressed}>Delete Post</Text>
                <Text style={styles.editText} onPress={this.onEditPostPressed}>Edit Post</Text>
            </View>
        );
    }
}

export default ViewPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCDDDB',
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    },
    deleteText: {
        color: 'red',
        fontSize: 29,
        textAlign: 'center',
        margin: 10,
    },
    editText: {
        color: 'magenta',
        fontSize: 29,
        textAlign: 'center',
        margin: 10,
    }
});
