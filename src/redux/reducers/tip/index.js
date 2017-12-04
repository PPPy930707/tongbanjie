import {SHOW_TIP,HIDDEN_TIP} from '../../actions/tip'

export default function tip(state = { visible : false,content : ''}, action) {
    switch (action.type) {
        case SHOW_TIP:
            return {
                visible : action.visible,
                content : action.content
            }
        case HIDDEN_TIP:
            return {visible : action.visible}
        default:
            return state
    }
}