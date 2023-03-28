import loadable from '@loadable/component'
import { LinearProgress } from '@mui/material';
import { SnackbarProvider } from "notistack";
export const Routes = loadable(() => import('./pages'), {
  fallback: <LinearProgress />,
});
function App() {
  return (
    <SnackbarProvider preventDuplicate maxSnack={3}>
<Routes/>
    </SnackbarProvider>
);
}

export default App;
