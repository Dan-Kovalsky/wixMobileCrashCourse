import {Navigation} from "react-native-navigation";
import * as postsActions from "../posts.actions";


export function onChangeTitle({componentId, title}){
    Navigation.mergeOptions(componentId, {
        topBar: {
            rightButtons: [{
                id: 'saveBtn',
                text: 'Save',
                enabled: !!title
            }]
        }
    });
};

export function onSaveBtnPressed({componentId, title, text}){
    Navigation.dismissModal(componentId);
    const randomImageNumber = Math.floor((Math.random() * 500) + 1);
    postsActions.addPost({
        title: title,
        text: text,
        img: `https://picsum.photos/200/200/?image=${randomImageNumber}`
    });
};
