import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from "react-native-navigation";

class ViewPost extends Component {
    constructor(props){
        super(props);
        this.popScreenAfterDel = this.popScreenAfterDel.bind(this);
    }

    static propTypes = {
        componentId: PropTypes.string,
        somePropToPass: PropTypes.string
    };

    popScreenAfterDel(){
        Navigation.pop(this.props.componentId)
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>View Post Screen</Text>
                <Text>{this.props.somePropToPass}</Text>
                <Text style={styles.deleteText} onPress={this.popScreenAfterDel}>Delete Post</Text>


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
