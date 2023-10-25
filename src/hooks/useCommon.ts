import { useDispatch, useSelector } from 'react-redux';

import { toggleToast } from '../slices/commonSlice';
import { RootState } from '../store';
import { IToast } from '../type';

const useCommon = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state: RootState) => state.common.toast);

  const onToggleToast = (showToast: IToast) => {
    dispatch(toggleToast(showToast));
  };

  return { toast, onToggleToast };
};
export default useCommon;
