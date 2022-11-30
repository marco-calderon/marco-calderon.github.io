![Overview](/admin-dashboard-react/1.jpg)

An admin dashboard that displays general information about statistics in form of charts, tables and maps, and also offering the user to change their account information.

The GIS system included can be used for tracking goods, show important locations, and this can be connected to a backend service for collaboratively distribute tasks and information.

![Secondary](/admin-dashboard-react/2.jpg)

This application was made using React and the best coding practices for it. It implements the usage of Redux, a common state management library that is both powerful and efficient for sharing the state among the components of the app. It uses a Bootstrap theme for showing statistics in a friendly way while maintaining the bundle final size minimal.

The GIS part of this application was used by implementing MapBox service and Leaflet library for displaying points of interests appropriately. It also offers a mobile friendly version that resembles a mobile app to allow easy navigation between the screens.

![Third](/admin-dashboard-react/3.jpg)

![Fourth](/admin-dashboard-react/4.jpg)

While this application is not connected to a back end service, a service pattern is used under-the-hood and therefore the data can be migrated or be obtained by requesting to a server. The Redux pattern used here has the advantage of dispatching actions that avoid fetching the same data twice, it instead returns the data of the state if it was already obtained and saved into the store. On the other hand, when no data is present, it will request to the server and save if it was successfully obtained, and returns an error if there was an issue on this process.

You can see on the code below a sample of the usage of this pattern and see how simple it is, yet so powerful to use for scalable applications.

```
import { fetchFeed } from "../../services/api.service";

export const REQUEST_FEED = 'REQUEST_FEED';
export const REQUEST_FEED_SUCCESS = 'REQUEST_FEED_SUCCESS';
export const REQUEST_FEED_FAIL = 'REQUEST_FEED_FAIL';

export const feedAction = () => {
    return (dispatch: any, getState: any) => {
        dispatch(requestFeed());

        // Returns the state if data is retrieved.
        const state = getState().dashboard.feed;
        if (state && state.data) {
            return () => dispatch(requestFeedSuccess(state.data));
        }

        // Fetchs data if not.
        return fetchFeed().then(data => {
            dispatch(requestFeedSuccess(data));
        }).catch(err => {
            dispatch(requestFeedFail(err));
        });
    }
}
```