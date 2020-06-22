import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { kit } from "./KitActions"

function* createKit({ payload }) {
  const response = yield Api.post('/producers/create/kit-user', payload.kit)
  if (response.ok) {
    yield put(kit.createKitResponse());
  } else {
    const err = new TypeError('ERROR_CREATE_KIT')
    yield put(kit.createKitResponse(err))
  }
}

function* getKit() {
  const response = yield Api.get('/producers/get/kit-all')
  if (response.ok) {
    yield put(kit.getKitResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_CREATE_KIT')
    yield put(kit.getKitResponse(err))
  }
}

function* getKitUser() {
  const response = yield Api.get('/producers/get/all/kit-producer')
  if (response.ok) {
    yield put(kit.getKitUserResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_CREATE_KIT')
    yield put(kit.getKitUserResponse(err))
  }
}

function* get({ payload }) {
  const response = yield Api.get(`/organization/count/persons-organization?idOrganization=${payload.id}`)
  if (response.ok) {
    yield put(kit.getResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(kit.getResponse(err))
  }
}

function* update({ payload }) {
  const response = yield Api.put(`/organization/update`, payload.organization)
  if (response.ok) {
    yield put(kit.updateResponse());
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(kit.getResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(kit.createKit, createKit)
  yield takeLatest(kit.getKit, getKit)
  yield takeLatest(kit.getKitUser, getKitUser)
  yield takeLatest(kit.get, get)
  yield takeLatest(kit.update, update)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}