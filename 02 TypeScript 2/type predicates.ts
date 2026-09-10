type LoadingState = { status: 'Loading', percentComplete: number }
type FailedState = { status: 'Failed', statusCode : number, header: string }
type OkState = { status: 'Ok', payload: number[], header: string }

export type State = LoadingState | FailedState | OkState

function isLoaded(state: State): state is FailedState | OkState {
  return state.status === 'Failed' || state.status === 'Ok'
}

function hasHeader(obj: any): obj is { header: string } {
  return typeof obj.header === 'string'
}

function getHeader(state: State): string {
  if (hasHeader(state)) {
    return state.header
  } else {
    return ""
  }
}

console.log(getHeader({status: 'Failed', statusCode: 404, header: 'Failed Header'}))
console.log(getHeader({status: 'Ok', payload: [0x23, 0xAF, 0x00], header: 'Success'}))
