import loadable from '@loadable/component'
import { LinearProgress } from '@mui/material';
export const Routes = loadable(() => import('./pages'), {
  fallback: <LinearProgress />,
});
function App() {
  return (
<Routes/>
);
}

export default App;
