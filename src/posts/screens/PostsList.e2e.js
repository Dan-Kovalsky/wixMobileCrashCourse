import React, {Component, PureComponent} from 'react';
// import {View, Text, StyleSheet,FlatList} from 'react-native';
import {StyleSheet,FlatList} from 'react-native';
import {View, Text, ListItem, Colors, BorderRadiuses, Image} from 'react-native-ui-lib';
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
                        text: 'Add',
                        testID: 'PostsList-add'
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
        <ListItem
            activeBackgroundColor={Colors.purple70}
            activeOpacity={0.1}
            height={77.5}
            onPress={() => this.pushViewPostScreen(item)}
            testID={item.id.toString()}
        >
            <ListItem.Part left>
                <Image
                    source={{uri: item.img}}
                    style={styles.image}
                />
                <Text>ID {item.id}   </Text>
            </ListItem.Part>
            <ListItem.Part middle column containerStyle={[styles.border, {paddingRight: 17}]}>
                <ListItem.Part containerStyle={{marginBottom: 3}}>
                    <Text dark10 text70 style={{flex: 1, marginRight: 10}} numberOfLines={1}>{item.title}</Text>
                </ListItem.Part>
                <ListItem.Part>
                    <Text style={{flex: 1, marginRight: 10}} text90 dark40 numberOfLines={1}>{item.text}</Text>
                </ListItem.Part>
            </ListItem.Part>
        </ListItem>

        // <Text onPress={() => this.pushViewPostScreen(item)}>
        //     {item.title}
        // </Text>
    );

    render() {
        return (
            <FlatList
                data={this.props.posts}
                testID="posts-list"
                keyExtractor={item => `{key-${item.id}`}
                renderItem={this.renderItem}
            />
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
    border: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.dark60,
    },
    image: {
        width: 54,
        height: 54,
        borderRadius: BorderRadiuses.br20,
        marginHorizontal: 14,
    }
});
