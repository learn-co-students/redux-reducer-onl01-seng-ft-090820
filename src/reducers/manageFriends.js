export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: state.friends.concat({ hometown: action.friend.hometown, id: action.friend.id, name: action.friend.name})}
        case 'REMOVE_FRIEND':
                return {friends: state.friends.filter(friend => friend.id !== action.id)}    
        default:
            return state
    }
}

// switch (action.type) {
//     case 'ADD_FRIEND':
//         return {friends: state.friends.concat({ hometown: action.friend.hometown, id: action.friend.id, name: action.friend.name})}
//     case 'REMOVE_FRIEND':
//             return {friends: state.friends.filter(friend=> friend.id !== action.friend)}    
//     default:
//         return state
// }