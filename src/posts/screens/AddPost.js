import React, {Component} from 'react';
// import {View, Text, StyleSheet,TextInput} from 'react-native';
import {StyleSheet, Button, Alert} from 'react-native';
import {View, Text, TextInput} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation/lib/dist/index';
import * as postsActions from '../posts.actions';
import * as addPostPresenter from './AddPost.presenter';


import RNNativeToastLibrary from 'react-dankov-native-dankov-native-dankov-toast-dankov-library-dankov';


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
                leftButtons: [{
                    id: 'cancelBtn',
                    text: 'Cancel',
                    testID: 'cancel-post-btn'
                }],
                rightButtons: [{
                    id: 'saveBtn',
                    text: 'Save',
                    enabled: false,
                    testID: 'save-post-btn'
                }]
            }
        };
    }

    navigationButtonPressed({buttonId}) {
        if (buttonId === 'cancelBtn') {
            Navigation.dismissModal(this.props.componentId);
        } else if (buttonId === 'saveBtn') {
            addPostPresenter.onSaveBtnPressed({
                componentId: this.props.componentId,
                title: this.state.title,
                text:this.state.text
            })
            // Navigation.dismissModal(this.props.componentId);
            // const randomImageNumber = Math.floor((Math.random() * 500) + 1);
            // postsActions.addPost({
            //     title: this.state.title,
            //     text: this.state.text,
            //     img: `https://picsum.photos/200/200/?image=${randomImageNumber}`
            // });
        }
    }

    onChangeTitle(title){
        this.setState({title});
        addPostPresenter.onChangeTitle({
            componentId: this.props.componentId,
            title: title
        });
        // Navigation.mergeOptions(this.props.componentId, {
        //     topBar: {
        //         rightButtons: [{
        //             id: 'saveBtn',
        //             text: 'Save',
        //             enabled: !!title
        //         }]
        //     }
        // });
    };

    onChangeText(text) {
        this.setState({text});
    }

    render() {
        return (
            <View flex padding-24>
                <Text text40 purple10 marginB-24>Add Post</Text>
                <Text marginB-30 marginL-20>{this.props.someProp}</Text>

                <TextInput
                    testID='add-title-input'
                    text70
                    containerStyle={{marginBottom: 12}}
                    floatingPlaceholder
                    floatOnFocus
                    placeholder="Add great Title"
                    onChangeText={this.onChangeTitle}
                />
                <TextInput
                    text70
                    floatingPlaceholder
                    expandable
                    placeholder = "This is the beggining of a new great post"
                    onChangeText={this.onChangeText}
                />
                <Button
                    onPress={() => {RNNativeToastLibrary.show("TEXT = " + this.state.text)}}
                    title="Show Android Toast"
                    color="#843333"
                    />
                <View flex paddingT-10 marginT-10>
                    <Button
                        onPress={() => {RNNativeToastLibrary.showLong('TITLE = ' + this.state.title)}}
                        title="LONG Toast of title"
                        color="#123456"
                    />
                </View>

            </View>
        );
    }
}

export default AddPost;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#E8F7EF',
//     },
//     text: {
//         fontSize: 28,
//         textAlign: 'center',
//         margin: 10,
//     }
// });
