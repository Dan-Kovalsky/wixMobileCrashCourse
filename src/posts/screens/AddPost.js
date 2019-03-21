import React, {Component} from 'react';
import {View, Text, StyleSheet,TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation/lib/dist/index';
import * as postsActions from '../posts.actions';


class AddPost extends Component {

    static propTypes = {
        componentId: PropTypes.string,
        someProp: PropTypes.string
    };

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);

        this.state = {
            title: '',
            text: ''
        };

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }

    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Add Post'
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
            postsActions.addPost({
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
                    enabled: !!title
                }]
            }
        });
    }

    onChangeText(text) {
        this.setState({text});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Add Post Screen</Text>
                <Text>{this.props.someProp}</Text>

                <TextInput
                    placeholder="Add great title"
                    value={this.state.title}
                    onChangeText={this.onChangeTitle}
                />
                <TextInput
                    placeholder = "This is the beggining of a new great post"
                    value = {this.state.text}
                    onChangeText={this.onChangeText}
                />
            </View>
        );
    }
}

export default AddPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8F7EF',
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    }
});
