export function manageFriends(state = { friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            console.log(action.friend)
            return {...state, friends: [...state.friends,
                {name: action.friend.name,
                hometown: action.friend.hometown,
                id: action.friend.id}
            ]}
        break;
        case 'REMOVE_FRIEND':
            return {...state, friends: state.friends.filter(friend => !(action.id === friend.id))}
        break;
        default:
            return state;
    }
}
