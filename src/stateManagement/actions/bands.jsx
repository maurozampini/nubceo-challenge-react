import { types } from "../types/types"
import { urlBands } from '../../endpoints/enpoints';
const axios = require("axios").default;

export const startGetBands = (setOpenBackdrop) => {
    return async (dispatch) => {
        await axios.get(urlBands)
            .then((res) => {
                dispatch(getBands(res.data));
                setOpenBackdrop(false);
            })
            .catch((error) => {
                setOpenBackdrop(false);
                console.log(error);
                alert(error.message);
            });
    };
}

const getBands = (data) => ({
    type: types.BANDS_GET,
    payload: data
});
