import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import MovieDetail from './Pages/MovieDetail';
import Navigation from './Component/Navigation';

//1. 홈페이지, 영화페이지, 영화상세페이지 총 3페이지가 필요하다

// -홈페이지
// 배너를 볼 수 있다.
// 인기있는 영화,평점 높은 영화, 상영예정작 세개의 카테고리를 볼 수 있다
// 영화 포스터에 마우스를 올리면 제목,장르,평점,인기도,청불여부를 알 수 있다
// 영화 검색을 할 수 있다
// 영화 정렬이 가능하고, 필터링도 가능하다

// -영화 상세페이지
// 포스터 제목 줄거리 점수 인기도 청불여부 예산 이익 러닝타임 리뷰 등등
// trailer를 누르면 예고편을 볼 수 있다
// 관련 영화도 볼 수 있다


function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/movies"  element={<Movies/>}></Route>
        <Route path="/movies/:id"  element={<MovieDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
