
import { appReducer } from 'reducers/app-reducer';
import { clientReducer } from 'reducers/client-reducer';
import { dashboardReducer } from 'reducers/dashboard-reducer';
import { votesReducer } from 'reducers/votes-reducer';

export const reducers = {
    app: appReducer,
    client: clientReducer,
    dashboard: dashboardReducer,
    votes: votesReducer,
};
