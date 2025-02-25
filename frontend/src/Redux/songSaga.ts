import { call, put, takeEvery } from "redux-saga/effects";
import { getSongs, addSong, updateSong, deleteSong } from "../api/songapi";
import { setSongs, addSong as addSongAction, updateSong as updateSongAction, removeSong } from "./songSlice";


function* fetchSongs() {
  const response = yield call(getSongs);
  yield put(setSongs(response.data));
  yield put({ type: "stats/fetchStats" });
}

function* createSong(action: any) {
  const response = yield call(addSong, action.payload);
  yield put(addSongAction(response.data));
  yield put({ type: "stats/fetchStats" });
}

function* modifySong(action: any) {
  const response = yield call(updateSong, action.payload.id, action.payload.data);
  yield put(updateSongAction(response.data));
  yield put({ type: "stats/fetchStats" });
}

function* eraseSong(action: any) {
  yield call(deleteSong,action.payload);
  yield put(removeSong(action.payload));
  yield put({ type: "stats/fetchStats" });
}

export default function* songSaga() {
  yield takeEvery("songs/fetchSongs", fetchSongs);
  yield takeEvery("songs/createSong", createSong);
  yield takeEvery("songs/modifySong", modifySong);
  yield takeEvery("songs/eraseSong", eraseSong);
}
