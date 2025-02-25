import { call, put, takeEvery } from "redux-saga/effects";
import { getStats } from "../../api/songapi";
import { setStats } from "../slices/statsSlice";

function* fetchStats() {
  try {
    const response = yield call(getStats);
    yield put(setStats(response.data));
  } catch (error) {
    console.error("Failed to fetch stats:", error);
  }
}

export default function* statsSaga() {
  yield takeEvery("stats/fetchStats", fetchStats);
}
