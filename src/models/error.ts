import { newTypeError } from '@/utils/errorUtils';

const ErrorModule = {
    namespace: 'error',
    state: {},
    effects: {
        *effectsError(_ :any, { put }: any) {
            newTypeError();
            yield put({
                type: 'reducerserror'
            });
          },
    },
    reducers: {
        reducerserror(state:any) {
            newTypeError()
            return state;
        }
    },
}
export default ErrorModule;