import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

export const useActions = ({actionCreator}) => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreator, dispatch)
}
