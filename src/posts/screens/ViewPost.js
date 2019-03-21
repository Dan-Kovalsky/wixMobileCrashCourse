import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from "react-native-navigation";

import * as postsActions from '../posts.actions';

class ViewPost extends Component {
    constructor(props){
        super(props);
        this.onPostDeletePressed = this.onPostDeletePressed.bind(this);
    }

    static propTypes = {
        componentId: PropTypes.string,
        post: PropTypes.object
    };

    // popScreenAfterDel(){
    //     Navigation.pop(this.props.componentId);
    //     postsActions.deletePost(this.props.post.id)
    //
    //     alert("Post deleted")
    // }
    onPostDeletePressed = async () => {
        Navigation.pop(this.props.componentId);

        await postsActions.deletePost(this.props.post.id);
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>View Post Screen</Text>
                <Text>{JSON.stringify(this.props.post)}</Text>
                <Text style={styles.deleteText} onPress={this.onPostDeletePressed}>Delete Post</Text>
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
    }
});
