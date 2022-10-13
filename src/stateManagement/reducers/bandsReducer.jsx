import { types } from '../types/types';

const initialState = [
    {
        id: '',
        name: '',
        genreCode: '',
        year: 0,
        country: '',
        members: []
    }
]

export const bandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BANDS_GET:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
