export const constStatusCodes = {
    ok: 200,
    "Not Found": 404,
    "Internal Server Error": 500
} as const

type StatusCodes = typeof constStatusCodes
type StatusCodeKeys = keyof StatusCodes

function objectKeys<T extends {}>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>
}

const keys = objectKeys(constStatusCodes)

function statusText(code: StatusCodes[StatusCodeKeys]): StatusCodeKeys | undefined {
    for(let text of objectKeys(constStatusCodes)) {
        if (constStatusCodes[text] === code) {
            return text
        }
    }
    return undefined
}

type Keys = 'ok' | 'Not Found' | 'Internal Server Error'

type StatusCodes1 = {
    readonly [key in Keys]: number 
}

type StatusCodesHandler = {
    readonly [key in keyof StatusCodes]: (code: StatusCodes[key]) => void
}

class DefaultStatusHandler implements StatusCodesHandler {
  ok(code: 200) {
    console.log('ok')
  }
  'Not Found'(code: 404) {
    console.log('Not Found')
  }
  'Internal Server Error'(code: 500) {
    console.log('ISE')
  }
}

function getter<T extends {}, K extends keyof T>(obj: T, k: K): () => T[K] {
    return () => obj[k]
}

class Customer {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

const customer = new Customer("Joe")
const nameFunc = getter(customer, "getName")
const name = nameFunc()
console.log(name)