import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { organization } from "./organizationActions"

function* createOrganization({ payload }) {
  const response = yield Api.post('/organization/create', payload.organization)
  console.log("response==>", response)
  if (response.ok) {
    yield put(organization.createOrganizationResponse());
  } else {
    const err = new TypeError('ERROR_CREATE_ORGANIZATION')
    yield put(organization.createOrganizationResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(organization.createOrganization, createOrganization)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}