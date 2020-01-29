import {userAPI} from '../api/api';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users:
        [
            /*{ id: 1, photoUrl: URL, followed: false, fullName: 'Artem', status: 'I am a BOSS', location: { city: 'Smolensk', country: 'Russia' } },
            { id: 2, photoUrl: URL, followed: false, fullName: 'Dmitry', status: 'I am a teacher', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 3, photoUrl: URL, followed: false, fullName: 'Ivan', status: 'I am a friend', location: { city: 'Smolensk', country: 'Russia' } },
            { id: 4, photoUrl: URL, followed: false, fullName: 'Valera', status: 'I am a BOSS', location: { city: 'New York', country: 'USA' } },
            { id: 5, photoUrl: URL, followed: false, fullName: 'Sergei', status: 'I am a BOSS', location: { city: 'Smolensk', country: 'Russia' } },
            { id: 6, photoUrl: URL, followed: true, fullName: 'Arina', status: 'My love baby', location: { city: 'Smolensk', country: 'Russia' } },
            { id: 7, photoUrl: URL, followed: false, fullName: 'Margarita', status: 'My love ', location: { city: 'Smolensk', country: 'Russia' } },
            { id: 8, photoUrl: URL, followed: false, fullName: 'Elena', status: 'I am a mother', location: { city: 'Smolensk', country: 'Russia' } },
            { id: 9, photoUrl: URL, followed: false, fullName: 'Lidia', status: 'I am a grandmother', location: { city: 'Smolensk', country: 'Russia' } },
            { id: 10, photoUrl: URL, followed: false, fullName: 'Marina', status: 'My sister', location: { city: 'Sankt-Peterburg', country: 'Russia' } },*/
        ],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? state.followingInProgress.filter(id => id !== action.userId) : [...state.followingInProgress, action.userId]
            }
        }

        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });



export const getUsersTC = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
            userAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            })
        }
    }

export default usersReducer;