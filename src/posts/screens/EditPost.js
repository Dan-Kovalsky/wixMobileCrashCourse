import React, {Component} from 'react';
import {View, Text, StyleSheet,TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation/lib/dist/index';
import * as postsActions from "../posts.actions";
import AddPost from "./AddPost";


class EditPost extends Component{

    constructor(props){
        super(props);
        Navigation.events().bindComponent(this);
        this.state = {
            title: '',
            text: ''
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);

    }

    static propTypes = {
        componentId: PropTypes.string,
        post: PropTypes.object
    };

    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Edit Post'
                },
                rightButtons: [{
                    id: 'saveBtn',
                    text: 'Save',
                    enabled: false
                }],
                leftButtons: [{
                    id: 'cancelBtn',
                    text: 'Cancel'
                }]
            }
        };
    }

    navigationButtonPressed({buttonId}) {
        if (buttonId === 'cancelBtn') {
            Navigation.dismissModal(this.props.componentId);
        } else if (buttonId === 'saveBtn') {
            Navigation.dismissModal(this.props.componentId);
            const randomImageNumber = Math.floor((Math.random() * 500) + 1);
            postsActions.editPost(this.props.post.id, {
                title: this.state.title,
                text: this.state.text,
                img: `https://picsum.photos/200/200/?image=${randomImageNumber}`
            });
        }
    }

    onChangeTitle(title){
        this.setState({title});
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                rightButtons: [{
                    id: 'saveBtn',
                    text: 'Save',
                    enabled: true
                }]
            }
        });
    }

    onChangeText(text) {
        this.setState({text})
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                rightButtons: [{
                    id: 'saveBtn',
                    text: 'Save',
                    enabled: true
                }]
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Edit Post Screen</Text>
                <Text>{this.props.someProp}</Text>

                <TextInput
                    placeholder="change your post title TODO"
                    value={this.state.title}
                    onChangeText={this.onChangeTitle}
                />
                <TextInput
                    placeholder = "change your post text TODO"
                    value = {this.state.text}
                    onChangeText={this.onChangeText}
                />
            </View>
        );
    }
}

export default EditPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B8B7BF',
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    }
});
