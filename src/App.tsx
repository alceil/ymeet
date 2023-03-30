import loadable from '@loadable/component'
import { LinearProgress } from '@mui/material';
import { Provider as ReduxProvider } from "react-redux";
import { SnackbarProvider } from "notistack";
import store from './core/store';
export const Routes = loadable(() => import('./pages'), {
  fallback: <LinearProgress />,
});
function App() {
  return (
    <ReduxProvider store={store}>
    <SnackbarProvider preventDuplicate maxSnack={3}>
<Routes/>
    </SnackbarProvider>
    </ReduxProvider>

);
}

export default App;
