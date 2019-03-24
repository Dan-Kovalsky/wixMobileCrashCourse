import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
import {StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib';
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
        const {title, text} = this.props.post;

        return (
            <View flex spread padding-24>
                <View>
                    <Text text30 putple10>{title}</Text>
                    <Text text70 dark20 marginT-12>{text}</Text>
                </View>
                {/*<Button label="Delete Post" text80 red20 bg-red70 fullWidth onPress={this.onPostDeletePressed}/>*/}
                <Button label='Delete Post' text80 red20 bg-red70 fullWidth onPress={this.onPostDeletePressed}/>
                <Button label='Edit Post' text60 blue20 bg-blue80 onPress={this.onPostDeletePressed}/>
                <Text style={styles.deleteText} onPress={this.onPostDeletePressed}>Delete Post</Text>
                <Text style={styles.editText} onPress={this.onEditPostPressed}>Edit Post</Text>
            </View>
        );
        // return (
        //     <View style={styles.container}>
        //         <Text style={styles.text}>View Post Screen</Text>
        //         <Text>{JSON.stringify(this.props.post)}</Text>
        //         <Text style={styles.deleteText} onPress={this.onPostDeletePressed}>Delete Post</Text>
        //         <Text style={styles.editText} onPress={this.onEditPostPressed}>Edit Post</Text>
        //     </View>
        // );
    }
}

export default ViewPost;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#FCDDDB',
    // },
    // text: {
    //     fontSize: 28,
    //     textAlign: 'center',
    //     margin: 10,
    // },
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
        marginBottom:250
    }
});
