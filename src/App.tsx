import loadable from '@loadable/component'
import { LinearProgress } from '@mui/material';
import { Provider as ReduxProvider } from "react-redux";
import { SnackbarProvider } from "notistack";
import store from './core/store';
import SocketProvider from './core/provider/SocketProvider';
export const Routes = loadable(() => import('./pages'), {
  fallback: <LinearProgress />,
});
function App() {
  return (
    <ReduxProvider store={store}>
      <SocketProvider>

    <SnackbarProvider preventDuplicate maxSnack={3}>
<Routes/>
    </SnackbarProvider>
    </SocketProvider>

    </ReduxProvider>

);
}

export default App;
