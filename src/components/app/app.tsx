import MainPage from '../../pages/main-page/main-page';
import { MainPageProps } from '../../pages/main-page/main-page';

// function App({offersCount}: MainPageProps): JSX.Element {
//   return (
//     <MainPage offersCount={offersCount}/>
//   );
// }

function App(props: MainPageProps): JSX.Element {
  return (
    <MainPage {...props}/>
  );
}

export default App;
